import React from "react";
import HeroSection from "../components/HeroSection";
import HomeBackground from "../assets/HomeBackground.png";
import InfoBar from "../components/InfoBar";
import Footer from "../components/Footer";

const GovernmentPage = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{
        height: "100vh",
        margin: 0,
        backgroundImage: `url(${HomeBackground})`,
      }}
    >
      {/* Main Content */}
      <div
        style={{
          flex: "1 0 auto",
          display: "flex",
          flexDirection: "column",
          margin: 0,
          padding: 0,
        }}
      >
        <div style={{ flex: 2, marginBottom: 0 }}>
          <HeroSection />
        </div>
        <div style={{ flex: 1, marginBottom: 0 }}>
          <InfoBar />
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          flex: "0 0 auto",
          margin: 0,
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default GovernmentPage;
