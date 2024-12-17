import React from "react";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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

      <div style={{ flex: "0 0 40%", minHeight: "50%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default App;
