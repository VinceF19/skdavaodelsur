import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
        <div style={{ flex: "0 0 auto" }}>
          <Navbar />
        </div>

        <div style={{ flex: "1 0 auto" }}>
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
