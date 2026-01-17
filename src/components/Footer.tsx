import sawadaLogoWhAvif from '../assets/sawada-logo-wh.avif';
import sawadaLogoWhWebp from '../assets/sawada-logo-wh.webp';
import sawadaLogoWhPng from '../assets/sawada-logo-wh.png';

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-info">
            <div className="footer-logo">
              <picture>
                <source srcSet={sawadaLogoWhAvif} type="image/avif" />
                <source srcSet={sawadaLogoWhWebp} type="image/webp" />
                <img src={sawadaLogoWhPng} alt="澤田匡央税理士事務所" style={{ height: '48px', width: 'auto' }} />
              </picture>
            </div>
            <ul className="footer-details">
              <li>
                <span className="label">代表</span>
                <span className="value">澤田 匡央（さわだ ただちか）</span>
              </li>
              <li>
                <span className="label">所在地</span>
                <span className="value">
                  〒523-0894<br />
                  滋賀県近江八幡市中村町 20-15<br />
                  コルージャビル 3F
                </span>
              </li>
              <li>
                <span className="label">TEL</span>
                <span className="value"><a href="tel:0748-36-2817">0748-36-2817</a></span>
              </li>
              <li>
                <span className="label">営業時間</span>
                <span className="value">平日 9:00〜18:00</span>
              </li>
            </ul>
          </div>
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.8!2d136.0976!3d35.1289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5ruL6LOA55yM6L-R5rGf5YWr5bmh5biC5Lit5p2R55S6MjAtMTU!5e0!3m2!1sja!2sjp!4v1600000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="澤田匡央税理士事務所 地図"
            />
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 澤田匡央税理士事務所 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
