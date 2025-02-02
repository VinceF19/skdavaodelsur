import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HomePage from "./pages/HomePage";
import GovernmentPage from "./pages/GovernmentPage";
import NewsEvents from "./pages/NewsEvent";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";

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
            <Route path="/newsandevents" element={<NewsEvents />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
