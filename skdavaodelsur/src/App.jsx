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

      <div>
        <HeroSection />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
