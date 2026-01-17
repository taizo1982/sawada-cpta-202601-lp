export function OverviewSection() {
  return (
    <section className="section section-alt" id="overview">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Overview</span>
          <h2 className="section-title">相談概要</h2>
        </div>

        <div className="overview-card animate-on-scroll">
          <div className="overview-header">
            <h3>創業無料相談</h3>
            <p>お気軽にご相談ください</p>
          </div>
          <div className="overview-body">
            <div className="overview-table">
              <div className="overview-row">
                <div className="overview-label">相談時間</div>
                <div className="overview-value">60分</div>
              </div>
              <div className="overview-row">
                <div className="overview-label">相談形式</div>
                <div className="overview-value">個別相談（予約制・来所）</div>
              </div>
              <div className="overview-row">
                <div className="overview-label">相談費用</div>
                <div className="overview-value highlight">無料</div>
              </div>
              <div className="overview-row">
                <div className="overview-label">対象</div>
                <div className="overview-value">創業を検討中の方</div>
              </div>
            </div>

            <ul className="overview-notes">
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>本相談は、情報整理・判断材料の提供を目的としています。</span>
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>その場での契約や、無理な勧誘、営業活動は一切ありません。</span>
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>ご相談内容は税理士の守秘義務により厳重に管理いたします。</span>
              </li>
              <li>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>初回相談はすべて代表税理士が直接対応いたします。</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
