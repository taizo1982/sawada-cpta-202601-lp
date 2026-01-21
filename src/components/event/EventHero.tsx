import heroImageAvif from '../../assets/hero-consultation.avif';
import heroImageWebp from '../../assets/hero-consultation.webp';
import heroImageJpg from '../../assets/hero-consultation.jpg';
import heroLogoAvif from '../../assets/hero-logo.avif';
import heroLogoWebp from '../../assets/hero-logo.webp';
import heroLogoPng from '../../assets/hero-logo.png';

export function EventHero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <picture>
          <source srcSet={heroImageAvif} type="image/avif" />
          <source srcSet={heroImageWebp} type="image/webp" />
          <img src={heroImageJpg} alt="相談風景" />
        </picture>
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-vertical-title">
            <picture>
              <source srcSet={heroLogoAvif} type="image/avif" />
              <source srcSet={heroLogoWebp} type="image/webp" />
              <img src={heroLogoPng} alt="澤田匡央税理士事務所" className="hero-vertical-logo" />
            </picture>
          </div>
          <div className="hero-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
            創業無料相談（予約制）
          </div>
          <h1 className="hero-title">
            創業計画・融資を見据えた<br />
            <span className="highlight">「事前整理」</span>無料個別相談
          </h1>
          <p className="hero-lead">
            事業は決めた。<br />
            でも、計画と数字に不安がある方へ。
          </p>
          <ul className="hero-concerns">
            {[
              '創業は決めたが、この考えで進んでいいのか誰かに聞きたい',
              '創業計画を立てたいが、進め方に迷っている',
              '融資を検討しているが、数字に自信がない',
              '金融機関にどう見られるのかが不安',
            ].map((concern, index) => (
              <li key={index}>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
                {concern}
              </li>
            ))}
          </ul>
          <p className="hero-message">
            その状態のままで、ご相談ください。
          </p>

          <div className="trust-badges">
            <div className="trust-badge">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              無理な勧誘は一切ありません
            </div>
            <div className="trust-badge">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              守秘義務により厳重管理
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-header">
            <h2 className="hero-card-title">創業無料相談</h2>
            <p className="hero-card-subtitle">初回60分・代表税理士が直接対応</p>
          </div>
          <ul className="hero-card-features">
            <li>
              <span className="feature-label">相談時間</span>
              <span className="feature-value">60分</span>
            </li>
            <li>
              <span className="feature-label">相談費用</span>
              <span className="feature-value free">無料</span>
            </li>
            <li>
              <span className="feature-label">相談形式</span>
              <span className="feature-value">来所・個別相談</span>
            </li>
            <li>
              <span className="feature-label">担当</span>
              <span className="feature-value">代表税理士 澤田</span>
            </li>
          </ul>
          <a href="https://sawada-cpta.com/contact/" className="btn btn-primary btn-lg" onClick={() => (window as any).trackConversion?.()}>無料相談を申し込む</a>
          <a href="tel:0748-36-2817" className="hero-card-tel">
            <span>お電話でのご予約</span>
            <span className="tel-number">0748-36-2817</span>
          </a>
        </div>
      </div>
    </section>
  );
}
