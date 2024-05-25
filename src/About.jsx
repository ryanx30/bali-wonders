import React from "react";
import "./styles.css";

function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h3 className="section__title">
            Learn More <br />
            About Bali
          </h3>

          <p className="about__description">
          Bali adalah sebuah provinsi di Indonesia yang terletak pada bagian barat Kepulauan Nusa Tenggara dan beribu kota di Kota Denpasar.
           Pulau Bali, yang merupakan pulau terbesar di Provinsi Bali, memiliki beberapa julukan, di antaranya Pulau Dewata dan Pulau Seribu Pura.
           Di awal kemerdekaan Indonesia, pulau ini termasuk dalam Provinsi Sunda Kecil yang beribu kota di Singaraja, dan kini terbagi menjadi 3 provinsi,
            yakni Bali, Nusa Tenggara Barat, dan Nusa Tenggara Timur. Pada tahun 2020, penduduk provinsi Bali berjumlah 4.317.404 jiwa, dengan kepadatan 747 jiwa/km2,
             dan pada akhir 2023 berjumlah 4.344.554 jiwa
          </p>
        </div>

        <div className="about__image">
          <img
            src="assets/img/about-beach.jpg"
            alt="about"
            className="about__img"
          />
          <div className="about__shadow"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
