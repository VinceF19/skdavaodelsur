import React from "react";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import InfoBar from "./components/InfoBar";

const App = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{
        height: "100vh",
        margin: 0,
        overflow: "hidden",
      }}
    >
      <Navbar />

      <div style={{ flex: "1", minHeight: "50%" }}>
        <HeroSection />
      </div>
      <div className="d-flex p-2">
        <InfoBar />
      </div>
      <div style={{ flex: "0 0 40%", minHeight: "50%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
