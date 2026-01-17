export function ConcernsSection() {
  return (
    <section className="section section-alt" id="concerns">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Common Concerns</span>
          <h2 className="section-title">よくあるお悩み</h2>
        </div>
        <div className="concerns-grid animate-on-scroll">
          <div className="concern-card">
            <div className="concern-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
              </svg>
            </div>
            <p className="concern-text">創業計画書に何を書けばよいのか分からない</p>
          </div>
          <div className="concern-card">
            <div className="concern-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <p className="concern-text">売上や経費の数字をどう考えればよいか不安</p>
          </div>
          <div className="concern-card">
            <div className="concern-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
            </div>
            <p className="concern-text">融資で見られるポイントが分からない</p>
          </div>
          <div className="concern-card">
            <div className="concern-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <p className="concern-text">計画を出してからダメ出しされないか心配</p>
          </div>
        </div>
        <p className="concerns-note animate-on-scroll">この相談では、いきなり作成や結論を求めることはありません。</p>
      </div>
    </section>
  );
}
