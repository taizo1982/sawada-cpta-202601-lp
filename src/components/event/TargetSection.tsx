import entrepreneurImage from '../../assets/entrepreneur-planning.jpg';

export function TargetSection() {
  return (
    <section className="section" id="target">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">For You</span>
          <h2 className="section-title">このような方のための相談です</h2>
        </div>
        <div className="target-grid">
          <div className="target-image animate-on-scroll">
            <img src={entrepreneurImage} alt="創業を考えている方" />
          </div>
          <div className="target-content animate-on-scroll">
            <ul className="target-list">
              <li>
                <span className="check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>創業することはすでに決めている</span>
              </li>
              <li>
                <span className="check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>創業計画書をこれから作成しようとしている</span>
              </li>
              <li>
                <span className="check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>日本政策金融公庫や金融機関への融資を視野に入れている</span>
              </li>
              <li>
                <span className="check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span>計画や数字について「このままで大丈夫か」不安がある</span>
              </li>
            </ul>
            <div className="target-message">
              「やる覚悟はあるが、設計図がまだ整っていない」<br />
              そんな方に向けた無料相談です。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
