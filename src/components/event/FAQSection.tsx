import { useState } from 'react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      question: '創業計画書が全くできていなくても相談できますか？',
      answer: 'はい。計画を作る前の整理相談ですので問題ありません。',
    },
    {
      question: '融資を受けるかどうか決めていなくても大丈夫ですか？',
      answer: '可能です。融資を視野に入れた場合の考え方を整理します。',
    },
    {
      question: '相談だけで終わっても問題ありませんか？',
      answer: 'はい。相談のみで終了される方もいらっしゃいます。',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">よくあるご質問</h2>
        </div>

        <div className="faq-list animate-on-scroll">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(index)}>
                <span className="q-mark">Q</span>
                <span>{faq.question}</span>
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
