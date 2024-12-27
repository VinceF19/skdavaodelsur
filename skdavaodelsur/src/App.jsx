import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HomePage from "./pages/HomePage";
import GovernmentPage from "./pages/GovernmentPage";

const App = () => {
  return (
    <Router>
      <div
        className="d-flex flex-column"
        style={{
          minHeight: "100vh", // Ensure the body takes at least the full height of the viewport
          margin: 0,
        }}
      >
        {/* Navbar Section */}
        <Navbar />

        {/* Main Content Section */}
        <div style={{ flex: "1 0 auto" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/government" element={<GovernmentPage />} />
          </Routes>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
