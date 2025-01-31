import React from "react";
import Footer from "../components/Footer";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="left-content">
        <h2 className="contact-title">CONTACT US</h2>
        <div className="map-container">
          {/* Add Google Map link */}
          <img
            src="../assets/map-placeholder.png"
            alt="Map"
            className="map-image"
          />
        </div>
      </div>
      <div className="form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdxNxylkWp2ISA4zY8-0uWz1Xz6haBs6ronPcUDoJTOI4Ax_g/viewform?embedded=true"
          title="Contact Form"
          className="contact-form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default ContactUs;
