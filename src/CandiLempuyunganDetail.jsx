import React, { useEffect } from "react";
import Header from "./Header";
import "./styles.css";

function CandiLempuyunganDetail() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  return (
    <div className="popular-detail">
      <Header />

      <section className="popular-content section" id="popular-content">
        <div className="container">
          <h1 className="section__title">Candi Lempuyungan</h1>
          <div className="image-container">
            <img
              src="assets/img/detail-lempuyungan.jpeg"
              alt="Gerbang Surga Candi Lempuyungan"
              className="content-image"
            />
          </div>

          <p className="section-description">
            Candi Lempuyungan, juga dikenal sebagai Pura Lempuyang Luhur, adalah salah satu pura
            tertua dan paling dihormati di Bali. Terletak di puncak Gunung Lempuyang di bagian
            timur pulau, pura ini menawarkan pemandangan yang luar biasa dan pengalaman spiritual
            yang mendalam bagi para pengunjungnya.
          </p>

          <div className="section-content">
            <h2 className="content-title">Sejarah Candi Lempuyungan</h2>
            <p className="content-description">
              Candi Lempuyungan diperkirakan dibangun pada masa yang sangat kuno, bahkan sebelum
              agama Hindu dan Buddha masuk ke Indonesia. Pura ini merupakan salah satu dari enam
              pura Sad Kahyangan yang dianggap sebagai pilar spiritual utama di Bali.
            </p>

            <h2 className="content-title">Arsitektur dan Pemandangan</h2>
            <p className="content-description">
              Pura Lempuyang terkenal dengan gerbangnya yang ikonik, yang sering disebut sebagai
              "Gerbang Surga" oleh para wisatawan. Dari gerbang ini, pengunjung dapat menikmati
              pemandangan gunung yang indah, terutama Gunung Agung, gunung berapi tertinggi di Bali.
            </p>

            <h2 className="content-title">Pendakian ke Puncak</h2>
            <p className="content-description">
              Untuk mencapai Pura Lempuyang Luhur, pengunjung harus mendaki lebih dari 1.700 anak
              tangga. Perjalanan ini tidak hanya menawarkan pemandangan alam yang menakjubkan, tetapi
              juga kesempatan untuk merasakan ketenangan dan kedamaian di setiap langkahnya.
            </p>

            <h2 className="content-title">Tips untuk Pengunjung</h2>
            <ul className="tips-list">
              <li className="tips-item">1. Kenakan pakaian yang sopan dan sesuai, seperti sarung yang bisa disewa di lokasi.</li>
              <li className="tips-item">2. Bawa air minum yang cukup untuk mendaki.</li>
              <li className="tips-item">3. Jangan lupa untuk membawa kamera untuk mengabadikan pemandangan yang menakjubkan.</li>
              <li className="tips-item">4. Hormati adat dan tradisi lokal saat berkunjung ke pura.</li>
            </ul>

            <h2 className="content-title"><br />Lokasi</h2>
            <div className="map-container">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3947.100136705185!2d115.62696620821951!3d-8.391811387411265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2071753222893%3A0x40a0fd58fe779263!2sTemple%20Of%20Penataran%20Agung%20Lempuyang!5e0!3m2!1sen!2sid!4v1716030639400!5m2!1sen!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CandiLempuyunganDetail;