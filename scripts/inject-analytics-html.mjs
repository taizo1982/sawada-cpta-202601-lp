import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const buildIndexPath = path.resolve(projectRoot, "build", "index.html");
const markerStart = "<!-- analytics:start -->";
const markerEnd = "<!-- analytics:end -->";

const sanitize = (value) => {
  if (typeof value !== "string") {
    return "";
  }
  const trimmed = value.trim();
  return trimmed && trimmed !== "undefined" ? trimmed : "";
};

const createGoogleTagBlock = (gaMeasurementId, gaAdsId) => {
  if (!gaMeasurementId && !gaAdsId) {
    return "";
  }

  const primaryId = gaMeasurementId || gaAdsId;
  const loaderTag = `<script async src="https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(primaryId)}"></script>`;

  const lines = [
    "<script>",
    "  window.dataLayer = window.dataLayer || [];",
    "  function gtag(){dataLayer.push(arguments);}",
    "  gtag('js', new Date());",
  ];

  if (gaMeasurementId) {
    lines.push(`  gtag('config', '${gaMeasurementId}');`);
  }

  if (gaAdsId) {
    lines.push(`  gtag('config', '${gaAdsId}');`);
  }

  // NOTE: Google Adsのコンバージョンはお問い合わせThanksページで計測
  // LPではグローバルタグのみ（リマーケティング用）

  lines.push("</script>");

  return [loaderTag, lines.join("\n")].join("\n");
};

const createMetaPixelBlock = (metaPixelId, metaAppId) => {
  if (!metaPixelId) {
    return "";
  }

  const script = [
    "<script>",
    "  !function(f,b,e,v,n,t,s){",
    "    if(f.fbq)return;",
    "    n=f.fbq=function(){",
    "      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);",
    "    };",
    "    if(!f._fbq)f._fbq=n;",
    "    n.push = n;",
    "    n.loaded = true;",
    "    n.version = '2.0';",
    "    n.queue = [];",
    "    t = b.createElement(e);",
    "    t.async = true;",
    "    t.src = v;",
    "    s = b.getElementsByTagName(e)[0];",
    "    s.parentNode.insertBefore(t,s);",
    "  }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');",
  ];

  if (metaAppId) {
    script.push(`  fbq('init', '${metaPixelId}', { app_id: '${metaAppId}' });`);
  } else {
    script.push(`  fbq('init', '${metaPixelId}');`);
  }

  script.push("  fbq('track', 'PageView');");
  // CVボタンクリック時のトラッキング（ViewContent）
  // NOTE: Leadはお問い合わせThanksページで計測
  script.push("  window.trackMetaPixelConversion = function() {");
  script.push("    fbq('track', 'ViewContent', { content_name: 'contact_button_click' });");
  script.push("  };");
  script.push("</script>");

  const noscript = `<noscript><img height="1" width="1" style="display:none" alt="" src="https://www.facebook.com/tr?id=${encodeURIComponent(metaPixelId)}&ev=PageView&noscript=1"/></noscript>`;

  return [script.join("\n"), noscript].join("\n");
};

const createClarityBlock = (clarityProjectId) => {
  if (!clarityProjectId) {
    return "";
  }

  return `<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "${clarityProjectId}");
</script>`;
};

const injectAnalytics = async () => {
  try {
    await fs.access(buildIndexPath);
  } catch {
    // Nothing to do if build/index.html does not exist.
    return;
  }

  const mode = process.env.NODE_ENV || "production";
  const env = loadEnv(mode, projectRoot, "");

  const gaMeasurementId = sanitize(env.VITE_GA_MEASUREMENT_ID);
  const gaAdsId = sanitize(env.VITE_GA_ADS_ID);
  const metaPixelId = sanitize(env.VITE_META_PIXEL_ID);
  const metaAppId = sanitize(env.VITE_META_APP_ID);
  const clarityProjectId = sanitize(env.CLARITY_PROJECT_ID);

  // 統合トラッキング関数（Meta Pixelのみ、Google Adsはグローバルタグのみ）
  const createTrackConversionBlock = () => {
    return `<script>
  window.trackConversion = function() {
    if (typeof window.trackMetaPixelConversion === 'function') {
      window.trackMetaPixelConversion();
    }
  };
</script>`;
  };

  const blocks = [
    createGoogleTagBlock(gaMeasurementId, gaAdsId),
    createMetaPixelBlock(metaPixelId, metaAppId),
    createClarityBlock(clarityProjectId),
    createTrackConversionBlock(),
  ].filter(Boolean);

  let html = await fs.readFile(buildIndexPath, "utf-8");
  const markerPattern = new RegExp(`${markerStart}[\\s\\S]*?${markerEnd}\\n?`, "g");
  html = html.replace(markerPattern, "");

  if (blocks.length === 0) {
    await fs.writeFile(buildIndexPath, html, "utf-8");
    return;
  }

  const analyticsBlock = [markerStart, ...blocks, markerEnd].join("\n");
  if (html.includes("</head>")) {
    html = html.replace("</head>", `${analyticsBlock}\n</head>`);
  } else {
    html += `\n${analyticsBlock}\n`;
  }

  await fs.writeFile(buildIndexPath, html, "utf-8");
  console.log("Injected analytics tags into build/index.html");
};

injectAnalytics().catch((error) => {
  console.error("[analytics] Failed to inject tags:", error);
  process.exitCode = 1;
});
