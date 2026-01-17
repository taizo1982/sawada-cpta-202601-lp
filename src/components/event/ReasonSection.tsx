export function ReasonSection() {
  return (
    <section className="section section-alt" id="reason">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Why Important</span>
          <h2 className="section-title">なぜ「事前整理」が重要なのか</h2>
        </div>

        <div className="reason-visual animate-on-scroll">
          <div className="reason-card problem">
            <div className="reason-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </div>
            <h4>準備不足のまま進める</h4>
            <p>数字があいまい、計画に一貫性がない状態で提出</p>
          </div>
          <div className="reason-card arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
          <div className="reason-card solution">
            <div className="reason-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h4>事前に整理してから進める</h4>
            <p>一度整理することが、最短ルートになる場合も</p>
          </div>
        </div>

        <p className="reason-description animate-on-scroll">創業計画や融資は、提出・相談後の修正が難しいケースが多いのが実情です。</p>

        <div className="reason-problems animate-on-scroll">
          <li>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            <span>数字の前提があいまい</span>
          </li>
          <li>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            <span>計画に一貫性がない</span>
          </li>
          <li>
            <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            <span>金融機関目線が不足している</span>
          </li>
        </div>

        <div className="reason-conclusion animate-on-scroll">
          こうした状態で進めると、結果的に時間や労力が余分にかかることがあります。<br />
          <strong>進める前に一度整理すること</strong>が、最短ルートになる場合もあります。
        </div>
      </div>
    </section>
  );
}
