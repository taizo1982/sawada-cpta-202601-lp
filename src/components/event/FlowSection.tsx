export function FlowSection() {
  return (
    <section className="section" id="flow">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">Flow</span>
          <h2 className="section-title">無料相談の流れ</h2>
        </div>

        <div className="flow-list animate-on-scroll">
          <div className="flow-item">
            <div className="flow-number">1</div>
            <div className="flow-content">
              <h4>相談フォームよりお申し込み</h4>
              <p>下記フォームより必要事項をご入力ください。</p>
            </div>
          </div>
          <div className="flow-item">
            <div className="flow-number">2</div>
            <div className="flow-content">
              <h4>当事務所より日程調整のご連絡</h4>
              <p>内容確認後、メールにてご連絡いたします。</p>
            </div>
          </div>
          <div className="flow-item">
            <div className="flow-number">3</div>
            <div className="flow-content">
              <h4>相談日程の確定</h4>
              <p>双方の都合を調整し、相談日時を決定します。</p>
            </div>
          </div>
          <div className="flow-item">
            <div className="flow-number">4</div>
            <div className="flow-content">
              <h4>当日ご来所・個別相談（60分）</h4>
              <p>ご予約日時に事務所へお越しください。代表税理士が直接対応いたします。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
