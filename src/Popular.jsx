import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"; // Import CSS file

function Popular() {
  return (
    <section className="popular section" id="popular">
      <h2 className="section__title">
      Explore the Enchanting <br />
      Wonders of Bali
      </h2>

      <div className="popular__container container grid">
      <Link to="/CandiLempuyunganDetail">
        <article className="popular__card">
          <div className="popular__image">
            <img
              src="assets/img/popular-lampuyungan.jpg"
              alt="popular"
              className="popular__img"
            />
            <div className="popular__shadow"></div>
          </div>

          <h2 className="popular__title">Candi Lempuyungan</h2>

          <div className="popular__location">
            <i className="ri-map-pin-line"></i>
            <span>
              Jl. Laksamana, Guwang, Kec. Sukawati, Kabupaten Gianyar
            </span>
          </div>
        </article>
        </Link >

        <Link to="/GWKDetail">
        <article className="popular__card">
          <div className="popular__image">
            <img
              src="assets/img/popular-monumen gwk.jpg"
              alt="popular"
              className="popular__img"
            />
            <div className="popular__shadow"></div>
          </div>

          <h2 className="popular__title">Garuda Wisnu Kencana </h2>

          <div className="popular__location">
            <i className="ri-map-pin-line"></i>
            <span>
              Jl. Raya Uluwatu, Ungasan, Kec. Kuta Sel., Kabupaten Badung
            </span>
          </div>
        </article>
        </Link>

        <Link to="/UluwatuDetail">
        <article className="popular__card">
          <div className="popular__image">
          <img
              src="assets/img/popular-kecak.jpg"
              alt="popular"
              className="popular__img"
            />
            <div className="popular__shadow"></div>
          </div>

          <h2 className="popular__title">Pura Uluwatu</h2>

          <div className="popular__location">
            <i className="ri-map-pin-line"></i>
            <span>
              Jl. Uluwatu, Pecatu, Kec. Kuta Sel., Kabupaten Badung
            </span>
          </div>
        </article>
        </Link>
      </div>
    </section>
  );
}

export default Popular;
