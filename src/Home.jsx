import React, { useState } from "react";
import "./styles.css";
import homebg from "./video/hom-bg.mov";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({ title: "", description: "" });
  const places = [
    { title: "Denpasar", img: "assets/img/home-denpasar.jpg", description: "Denpasar adalah ibu kota dan sekaligus menjadi pusat pemerintahan dan perekonomian dari provinsi Bali, Indonesia. Denpasar adalah kota terbesar di Kepulauan Nusa Tenggara dan kota terbesar kedua di wilayah Indonesia Timur setelah Kota Makassar." },
    { title: "Nusa Penida", img: "assets/img/home-penida.jpg", description: "Terletak di sebelah timur Bali, Nusa Penida adalah surga bagi pecinta alam. Pantai-pantai seperti Kelingking Beach dan Crystal Bay menawarkan pemandangan spektakuler dan keindahan bawah laut yang luar biasa." },
    { title: "Ubud", img: "assets/img/home-ubud.jpg", description: "Ubud dikenal sebagai pusat seni dan budaya di Bali. Terletak di daerah pegunungan, Ubud menawarkan hamparan sawah hijau yang indah, galeri seni, pertunjukan tari, dan pasar tradisional yang ramai. Pelukisan, patung, dan kerajinan tangan dari seniman lokal dapat ditemukan di sini." },
    { title: "Canggu", img: "assets/img/home-canggu.jpg", description: "Canggu adalah desa di kecamatan Kuta Utara, Kabupaten Badung, Bali, Indonesia. Canggu mulai terkenal setelah dibukanya Deus ex Machina. Pantainya membentang antara Kerobokan dan Pantai Echo Beach yang sejuk penuh dengan bar tepi pantai yang berwarna-warni, ombak selancar, kafe makanan lengkap, hipsters, dan gadis pantai." },
    { title: "Seminyak", img: "assets/img/home-seminyak.jpg", description: "Seminyak adalah tempat terbaik untuk menikmati kehidupan malam, restoran mewah, dan pusat perbelanjaan di Bali. Pantai Seminyak juga terkenal dengan ombaknya yang ideal untuk berselancar." },
    { title: "Uluwatu", img: "assets/img/home-uluwatu.jpg", description: "Terletak di ujung selatan Bali, Pura Luhur Uluwatu menawarkan pemandangan laut yang menakjubkan. Kuil ini adalah salah satu dari enam pura penting yang dianggap menjaga pulau dari arah barat daya." },
    { title: "Kuta", img: "assets/img/home-kuta.jpg", description: "Pantai Kuta adalah salah satu pantai paling terkenal di Bali. Dikenal dengan ombaknya yang cocok untuk berselancar, pantai ini juga menawarkan pemandangan matahari terbenam yang menakjubkan. Di sekitar pantai, terdapat berbagai bar, restoran, dan pusat perbelanjaan yang menambah daya tariknya." },
    { title: "Sanur", img: "assets/img/home-sanur.jpg", description: "Pantai Sanur adalah tempat yang sempurna untuk menikmati matahari terbit. Dengan suasana yang lebih tenang dibandingkan dengan Kuta, pantai ini adalah tempat yang ideal untuk bersantai, berenang atau berjalan-jalan di sepanjang tepi pantai." },
  ];

  const handleClick = (title, description) => {
    setPopupContent({ title, description });
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <section className="home section" id="home">
      <video src={homebg} alt="home" className="home__bg" autoPlay loop muted playsInline />
      <div className="home__shadow"></div>

      <div className="home__container container grid">
        <div className="home__data">
          <h3 className="home__subtitle">Welcome To Bali Wonders</h3>
          <h1 className="home__title">
            Rasakan <br />
            Keindahan <br />
            Bali
          </h1>
          <p className="home__description">
            Nikmati petualangan tak terlupakan di Bali, temukan surga tersembunyi, pulau eksotis,
            pegunungan megah, dan banyak lagi. Mulailah perjalanan impianmu sekarang!
          </p>
          <a href="/about" className="button">
            Start Your Journey <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        <div className="home__cards grid">
          {places.map((place, index) => (
            <article className="home__card" key={index} onClick={() => handleClick(place.title, place.description)}>
              <img src={place.img} alt={place.title} className="home__card-img" />
              <h3 className="home__card-title">{place.title}</h3>
              <div className="home__card-shadow"></div>
            </article>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>{popupContent.title}</h2>
            <p>{popupContent.description}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;