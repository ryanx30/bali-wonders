import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  useEffect(() => {
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navMenu = document.getElementById("nav-menu");

    const toggleMenu = () => {
      navMenu.classList.toggle("show-menu");
    };

    if (navToggle) {
      navToggle.addEventListener("click", toggleMenu);
    }

    if (navClose) {
      navClose.addEventListener("click", toggleMenu);
    }

    const navLinks = document.querySelectorAll(".nav__link");

    const closeMenu = () => {
      navMenu.classList.remove("show-menu");
    };

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    const blurHeader = () => {
      const header = document.getElementById("header");
      if (window.scrollY >= 20) {
        header.classList.add("blur-header");
      } else {
        header.classList.remove("blur-header");
      }
    };

    window.addEventListener("scroll", blurHeader);

    return () => {
      if (navToggle) {
        navToggle.removeEventListener("click", toggleMenu);
      }

      if (navClose) {
        navClose.removeEventListener("click", toggleMenu);
      }

      navLinks.forEach((link) => {
        link.removeEventListener("click", closeMenu);
      });

      window.removeEventListener("scroll", blurHeader);
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Bali Wonders
        </Link>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link active-link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/" className="nav__link">
                Popular
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/Weather" className="nav__link">
                Weather
              </Link>
            </li>
          </ul>
          <div className="nav__close" id="nav-close">
            <i className="ri-close-line"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="ri-menu-line"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
