import React from "react";
import "./styles.css"; // Import CSS file

function Explore() {
  return (
    <section className="explore section" id="explore">
      <div className="explore__container">
        <div className="explore__image">
          <img
            src="assets/img/explore-beach.jpg"
            alt="explore"
            className="explore__img"
          />
          <div className="explore__shadow"></div>
        </div>

        <div className="explore__content container grid">
          <div className="explore__data">
            <h2 className="section__title">
              Explore The <br />
              Best Paradises
            </h2>

            <p className="explore__description">
            Discovering Bali's paradises, from enchanting islands to picturesque valleys, is an unparalleled adventure.
             Immerse yourself in serenity and tranquility, experiencing the world's wonders with unparalleled comfort.
              Bali beckons you to embrace its beauty and find solace amidst its breathtaking landscapes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
