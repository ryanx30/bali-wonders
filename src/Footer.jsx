import React from "react";
import "./styles.css"; // Import CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__content grid">
          <div>
            <a href="bali\public\assets\img\beach_icon.png" className="footer__logo">
              Bali Wonders
            </a>

            <p className="footer__description">
            Discover the hidden beauty of Bali with us,<br />
            where every moment is magical
            </p>
          </div>

          <div className="footer__data grid">
            <div>
              <h3 className="footer__title">About</h3>

              <ul className="footer__links">
                <li>
                  <a href="bali\src\AboutUs.jsx" className="footer__link">
                    About Us
                  </a>
                </li>

                <li>
                  <a href="bali\src\AboutUs.jsx" className="footer__link">
                    Features
                  </a>
                </li>

                <li>
                  <a href="bali\src\AboutUs.jsx" className="footer__link">
                    News & Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">Contact</h3>

              <ul className="footer__links">
                <li>
                  <a href="bali\src\AboutUs.jsx" className="footer__link">
                    Call Center
                  </a>
                </li>

                <li>
                  <a href="bali\src\AboutUs.jsx" className="footer__link">
                    Support Center
                  </a>
                </li>

                <li>
                  <a href="bali\src\AboutUs.jsx" className="footer__link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="footer__title">Support</h3>

              <ul className="footer__links">
                <li>
                  <a href="bali\src\AboutUs.jsx" className="footer__link">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="bali\src\AboutUs.jsx" className="footer__link">
                    Terms & Services
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__group">
          <div className="footer__social">
            <a
              href="https://www.facebook.com/"
              className="footer__social-link"
            >
              <i className="ri-facebook-line"></i>
            </a>

            <a
              href="https://www.instagram.com/"
              className="footer__social-link"
            >
              <i className="ri-instagram-line"></i>
            </a>

            <a
              href="https://twitter.com/"
              className="footer__social-link"
            >
              <i className="ri-twitter-line"></i>
            </a>

            <a
              href="https://www.youtube.com/"
              className="footer__social-link"
            >
              <i className="ri-youtube-line"></i>
            </a>
          </div>

          <span className="footer__copy">
            &copy; Copyright Kelompok 3. UAS PTI
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
