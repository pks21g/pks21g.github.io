import React from "react";
import "../App.css";
import bannerImage from "../assets/disco-fighter.jpg";
export const Banner = () => {
  return (
    <>
      <section className="banner-section">
        <div className="banner">
          <div className="buy-listen">
            <h1>Disco</h1>
            <h1>Fighter</h1>
            <button className="buy-listen-btn">Buy/Listen</button>
          </div>
          <div className="banner-image">
            <img src={bannerImage} alt="Disco Fighter new album" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
