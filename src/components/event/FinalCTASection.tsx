import officeImageAvif from '../../assets/office-interior.avif';
import officeImageWebp from '../../assets/office-interior.webp';
import officeImageJpg from '../../assets/office-interior.jpg';

export function FinalCTASection() {
  return (
    <section className="section final-cta" id="final-cta">
      <div className="final-cta-bg">
        <picture>
          <source srcSet={officeImageAvif} type="image/avif" />
          <source srcSet={officeImageWebp} type="image/webp" />
          <img src={officeImageJpg} alt="オフィス" />
        </picture>
      </div>
      <div className="container">
        <div className="final-cta-content">
          <div className="section-header animate-on-scroll">
            <span className="section-label">Contact</span>
            <h2 className="section-title">最後に</h2>
          </div>

          <p className="final-cta-message animate-on-scroll">
            創業計画や融資は、<span className="emphasis">「勢い」よりも「整理」</span>が重要です。<br /><br />
            創業は決めた。でも、この考えで進んでいいのか不安。<br />
            その段階こそ、相談に最も適したタイミングです。
          </p>

          <div className="final-cta-card animate-on-scroll" id="form">
            <h3>創業計画・融資を見据えた<br />「事前整理」無料相談（60分）</h3>
            <a href="https://sawada-cpta.com/contact/" className="btn btn-primary btn-lg">無料相談を申し込む</a>
            <div className="cta-inline-info">
              <span>予約制</span>
              <span>来所</span>
              <span>60分</span>
              <span>無料</span>
            </div>
            <a href="tel:0748-36-2817" className="final-cta-tel">
              <span className="label">お電話でのご予約</span>
              <span className="number">0748-36-2817</span>
              <span className="hours">平日 9:00〜18:00</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
