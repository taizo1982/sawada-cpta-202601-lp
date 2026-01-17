import profileImage from '../../assets/sawada-profile.jpg';

export function ProfileSection() {
  return (
    <section className="section section-alt" id="profile">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Advisor</span>
          <h2 className="section-title">担当者紹介</h2>
          <p className="section-subtitle">初回の無料相談を担当いたします</p>
        </div>

        <div className="profile-wrapper">
          <div className="profile-image-col animate-on-scroll">
            <div className="profile-main-image">
              <img src={profileImage} alt="澤田匡央税理士" />
            </div>
            <div className="profile-name-card">
              <h3>澤田 匡央</h3>
              <p className="reading">さわだ ただちか</p>
              <p className="title">澤田匡央税理士事務所 代表</p>
            </div>
          </div>

          <div className="profile-content animate-on-scroll">
            <div className="profile-greeting">
              <h4>ごあいさつ</h4>
              <p>はじめまして。澤田匡央（さわだ ただちか）と申します。</p>
              <p>私は、滋賀県生まれ・滋賀県育ちの税理士です。滋賀県内で、企業・個人事業主の方など、さまざまなお悩みに向き合ってきました。</p>
            </div>

            <div className="profile-philosophy">
              <h4>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                「お客様のとなりにいる税理士」でありたい
              </h4>
              <p>税理士は「先生」と呼ばれることが多い仕事ですが、上から目線で指導するような関わり方ではなく、同じ目線で、気軽に相談できる存在でありたいと考えています。</p>
              <p style={{ marginTop: '0.75rem' }}>税務だけでなく、経営のこと／お金のこと／将来の不安／まだ言葉になっていない悩みも含めて、安心してお話しください。</p>
            </div>

            <div className="profile-values">
              <h4>創業相談で大切にしていること</h4>
              <ul>
                <li>
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>まだ計画が固まっていなくても構いません</span>
                </li>
                <li>
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>数字に自信がなくても問題ありません</span>
                </li>
                <li>
                  <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>「こんなことを聞いていいのか」と思う必要はありません</span>
                </li>
              </ul>
              <p className="highlight-text">その状態こそ、相談に最も適したタイミングです。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
