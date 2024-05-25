import React, { useEffect } from "react";
import Header from "./Header";
import "./styles.css";

function UluwatuDetail() {
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
          <h1 className="section__title">Pura Uluwatu</h1>
          <div className="image-container">
            <img
              src="assets/img/detail-uluwatu.jpg"
              alt="Pura Uluwatu"
              className="content-image"
            />
          </div>

          <p className="section-description">
            Pura Uluwatu adalah salah satu pura paling terkenal di Bali yang terletak di ujung selatan dari Bukit Badung. Terletak di tebing yang menjorok ke laut, pura ini menawarkan pemandangan spektakuler, terutama saat matahari terbenam.
          </p>

          <div className="section-content">
            <h2 className="content-title">Sejarah Pura Uluwatu</h2>
            <p className="content-description">
              Pura Uluwatu memiliki sejarah yang kaya dan merupakan salah satu pura paling sakral di Bali. Pura ini dipersembahkan untuk Dewa Rudra, yang dianggap sebagai dewa dari langit dan samudra menurut kepercayaan Hindu Bali.
            </p>

            <h2 className="content-title">Pemandangan dan Atraksi</h2>
            <p className="content-description">
              Selain arsitektur yang menakjubkan, Pura Uluwatu juga menawarkan pemandangan yang menakjubkan dari tebing-tebing batu karang yang menjorok ke laut. Pengunjung dapat menikmati keindahan alam dan pemandangan matahari terbenam yang spektakuler di tempat ini.
            </p>

            <h2 className="content-title">Kisah Legenda</h2>
            <p className="content-description">
              Menurut legenda, pura ini dibangun oleh seorang pedanda bernama Mpu Kuturan pada abad ke-10 Masehi. Pura Uluwatu dianggap sebagai salah satu tempat suci yang penting bagi umat Hindu Bali, dan sering kali menjadi lokasi penting untuk upacara keagamaan dan tari kecak yang terkenal.
            </p>

            <h2 className="content-title">Tari Kecak di Pura Uluwatu</h2>
            <div className="image-container">
            <img
              src="assets/img/detail-kecak.jpg"
              alt="Tari Kecak"
              className="content-image"
            />
          </div>
            <p className="content-description">
              Selain keindahan alamnya, Pura Uluwatu juga terkenal dengan pertunjukan Tari Kecak yang mengesankan. Pertunjukan ini biasanya dilakukan saat matahari terbenam di latar belakang pemandangan laut yang indah, menambahkan sentuhan magis pada pengalaman wisata di pura ini.
            </p>
            <p className="content-description">
              Tari Kecak adalah pertunjukan seni yang sangat populer di Bali yang menggunakan vokal "cak" dari sekelompok pria sebagai musik pengiring. Tarian ini sering kali mengangkat cerita dari epik Ramayana dan menampilkan gerakan yang dinamis dan dramatis.
            </p>
          </div>

          <h2 className="content-title"><br />Lokasi</h2>
          <div className="map-container">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1971.2692200157053!2d115.08388463838975!3d-8.829356647806048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd24ffc20cb8191%3A0xcb98d1ba7db0495!2sUluwatu%20Temple!5e0!3m2!1sen!2sid!4v1716040089349!5m2!1sen!2sid"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UluwatuDetail;
