import expertImage from '../../assets/expert-explanation.jpg';

export function BenefitsSection() {
  return (
    <section className="section" id="benefits">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Benefits</span>
          <h2 className="section-title">税理士に相談するメリット</h2>
        </div>

        <div className="benefits-grid">
          <div className="benefits-image animate-on-scroll">
            <img src={expertImage} alt="税理士との相談" />
            <div className="benefits-image-badge">
              <span>創業支援</span>
              <strong>専門家の視点でサポート</strong>
            </div>
          </div>
          <div className="benefits-content animate-on-scroll">
            <ul className="benefits-list">
              <li>
                <div className="icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <span className="text">創業時の税務・数字を前提に整理できる</span>
              </li>
              <li>
                <div className="icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  </svg>
                </div>
                <span className="text">融資を見据えた現実的な視点が得られる</span>
              </li>
              <li>
                <div className="icon-wrap">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <span className="text">後から修正しづらい判断を事前に防げる</span>
              </li>
            </ul>

            <div className="benefits-message">
              創業準備段階だからこそ、<span className="emphasis">「整えてから進む」</span>という選択肢があります。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
