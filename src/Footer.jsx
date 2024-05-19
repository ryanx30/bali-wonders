import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // Import CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__content grid">
          <div>
            <Link to="/" className="footer__logo">
              <img src="assets\img\beachicon.ico" alt="Bali Wonders Logo" />
              <br />Bali Wonders
            </Link>

            <p className="footer__description">
              Discover the hidden beauty of travel with us,<br />
              where every moment is magical
            </p>
          </div>

          <div className="footer__data grid">
            <div>
              <h3 className="footer__title">About</h3>
              <ul className="footer__links">
                <li>
                  <Link to="/Team" className="footer__link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/Team" className="footer__link">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/Team" className="footer__link">
                    News & Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="footer__title">Contact</h3>
              <ul className="footer__links">
                <li>
                  <Link to="/Team" className="footer__link">
                    Call Center
                  </Link>
                </li>
                <li>
                  <Link to="/Team" className="footer__link">
                    Support Center
                  </Link>
                </li>
                <li>
                  <Link to="/Team" className="footer__link">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="footer__title">Support</h3>
              <ul className="footer__links">
                <li>
                  <Link to="/Team" className="footer__link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/Team" className="footer__link">
                    Terms & Services
                  </Link>
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
