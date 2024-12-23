import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeBackground from "../assets/HomeBackground.png";

const HomePage = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{
        height: "100vh",
        margin: 0,
      }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          flex: "1 0 auto",
          backgroundImage: `url(${HomeBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          color: "white",
        }}
      >
        <h1>SK Provincial Federation</h1>
        <p>Davao del Sur</p>
      </div>
    </div>
  );
};

export default HomePage;
