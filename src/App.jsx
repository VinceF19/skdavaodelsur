import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Pages
import HomePage from "./pages/HomePage";
import GovernmentPage from "./pages/GovernmentPage";
import NewsEvents from "./pages/NewsEvent";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      <Navbar />

      {/* OFFSET FOR FIXED NAVBAR */}
      <main className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/government" element={<GovernmentPage />} />
          <Route path="/newsandevents" element={<NewsEvents />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
