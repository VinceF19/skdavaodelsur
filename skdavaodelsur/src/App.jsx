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
          height: "100vh",
          margin: 0,
        }}
      >
        {/* Navbar Section */}
        <Navbar style={{ flex: "0 0 auto" }} />

        {/* Main Content Section */}
        <div
          style={{
            flex: "1 1 auto",
            overflow: "auto",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/government" element={<GovernmentPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
