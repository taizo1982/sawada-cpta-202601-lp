import serviceImageAvif from '../../assets/service-image.avif';
import serviceImageWebp from '../../assets/service-image.webp';
import serviceImagePng from '../../assets/service-image.png';

export function ServiceSection() {
  return (
    <section className="section" id="service">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">この無料相談で行うこと</h2>
          <p className="section-subtitle">60分間の相談内容</p>
        </div>

        <div className="service-hero animate-on-scroll">
          <picture>
            <source srcSet={serviceImageAvif} type="image/avif" />
            <source srcSet={serviceImageWebp} type="image/webp" />
            <img src={serviceImagePng} alt="相談の様子" />
          </picture>
          <div className="service-hero-overlay">
            <div className="service-hero-text">
              <h3>本相談は、<span className="emphasis">「事前整理」</span>に特化しています</h3>
              <p>創業計画を作る前に、考えを整理するための時間です</p>
            </div>
          </div>
        </div>

        <ul className="service-list animate-on-scroll">
          <li>
            <span className="number">1</span>
            <span className="text">現在考えている事業内容の整理</span>
          </li>
          <li>
            <span className="number">2</span>
            <span className="text">創業計画全体の考え方の確認</span>
          </li>
          <li>
            <span className="number">3</span>
            <span className="text">売上・経費・生活費など数字の整理</span>
          </li>
          <li>
            <span className="number">4</span>
            <span className="text">融資を見据えた際の注意点の共有</span>
          </li>
          <li>
            <span className="number">5</span>
            <span className="text">今後の進め方（次の一歩）の明確化</span>
          </li>
        </ul>

        <div className="service-promise animate-on-scroll">
          <h4>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            安心して話せるための約束
          </h4>
          <ul>
            <li>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>正解を押し付けることはありません</span>
            </li>
            <li>
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>否定せず、現実的な視点で整理します</span>
            </li>
          </ul>
        </div>

        <div className="cta-inline animate-on-scroll">
          <a href="https://sawada-cpta.com/contact/" className="btn btn-primary btn-lg">無料相談を申し込む</a>
          <div className="cta-inline-info">
            <span>予約制</span>
            <span>来所</span>
            <span>60分</span>
            <span>無料</span>
          </div>
        </div>
      </div>
    </section>
  );
}
