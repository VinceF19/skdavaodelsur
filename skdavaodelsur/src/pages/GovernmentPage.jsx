import React from "react";
import HeroSection from "../components/HeroSection";
import InfoBar from "../components/InfoBar";
import Footer from "../components/Footer";

const GovernmentPage = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{
        height: "100vh",
        margin: 0,
      }}
    >
      {/* Main Content */}
      <div
        style={{ flex: "1 0 auto", display: "flex", flexDirection: "column" }}
      >
        <div style={{ flex: 2 }}>
          <HeroSection />
        </div>
        <div style={{ flex: 1 }}>
          <InfoBar />
        </div>
      </div>

      {/* Footer */}
      <div style={{ flex: "0 0 auto" }}>
        <Footer />
      </div>
    </div>
  );
};

export default GovernmentPage;
