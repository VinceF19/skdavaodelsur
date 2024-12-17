import React from "react";

const HeroSection = () => {
  return (
    <div
      className="hero-section d-flex align-items-center justify-content-center text-white"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        position: "relative",
      }}
    >
      <div
        className="hero-overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      ></div>

      <div className="container text-center" style={{ zIndex: 1 }}>
        <h1 className="display-4 fw-bold">Hon. Vince Fernandez</h1>
        <p className="lead fs-4">Mayor, City of Matanao</p>
        <p className="lead fs-4 pt-3">
          <b>Date of Birth: </b> December 19, 2002
        </p>
        <p className="lead fs-4 pt-3">
          <b>Office Address:</b> Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Cumque esse veritatis quod quia, explicabo expedita.
          Illum, error nemo porro sapiente nostrum nihil aspernatur. Vero
          suscipit cum ipsum? Ipsum, modi labore?
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
