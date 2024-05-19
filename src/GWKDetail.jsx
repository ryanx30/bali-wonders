import React, { useEffect } from "react";
import Header from "./Header";
import "./styles.css";

function GWKDetail() {
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
          <h1 className="section__title">Garuda Wisnu Kencana (GWK)</h1>
          <div className="image-container">
            <img
              src="assets/img/detail-gwk.jpg"
              alt="Garuda Wisnu Kencana Statue"
              className="content-image"
            />
          </div>

          <p className="section-description">
            Garuda Wisnu Kencana, disingkat GWK, adalah sebuah kompleks wisata budaya yang terletak di Bali, Indonesia. Kompleks ini terkenal karena patung Garuda Wisnu Kencana yang megah, salah satu ikon Bali yang mencerminkan nilai-nilai keagamaan dan kebudayaan Hindu.
          </p>

          <div className="section-content">
            <h2 className="content-title">Sejarah Garuda Wisnu Kencana</h2>
            <p className="content-description">
              Proyek pembangunan GWK dimulai pada tahun 1997 dan masih terus berlangsung hingga saat ini. GWK diharapkan akan menjadi salah satu objek wisata utama di Bali, menarik wisatawan dari seluruh dunia untuk mengagumi patung Garuda Wisnu Kencana yang monumental.
            </p>

            <h2 className="content-title">Patung Garuda Wisnu Kencana</h2>
            <p className="content-description">
              Patung Garuda Wisnu Kencana, yang dikerjakan oleh seniman Indonesia I Nyoman Nuarta, menggambarkan dewa Wisnu yang menunggangi burung Garuda. Patung ini memiliki tinggi mencapai 121 meter (397 kaki) dan ditempatkan di atas bukit yang menjulang tinggi, memberikan pemandangan yang spektakuler.
            </p>

            <h2 className="content-title">Atraksi dan Aktivitas</h2>
            <p className="content-description">
              Selain patung utama, kompleks GWK juga menawarkan berbagai atraksi dan aktivitas bagi pengunjung, termasuk pertunjukan budaya, galeri seni, taman-taman, dan wahana permainan. Pengunjung dapat menikmati pemandangan alam yang memukau, belajar tentang sejarah dan budaya Bali, serta berpartisipasi dalam berbagai kegiatan rekreasi.
            </p>
          </div>

          <h2 className="content-title"><br />Lokasi</h2>
          <div className="map-container">
            <iframe
              title="Google Maps"
              src="ttps://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.7405992437534!2d115.16502367421255!3d-8.810422791242466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd244cf54e1dec7%3A0x1988663e064f5a51!2sGaruda%20Wisnu%20Kencana%20Cultural%20Park!5e0!3m2!1sen!2sid!4v1716034796456!5m2!1sen!2sid"
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

export default GWKDetail;
