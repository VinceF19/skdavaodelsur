import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="left-content">
        <h2 className="contact-title">CONTACT US</h2>
        <div className="contact-info">
          <h5 className="section-title">Inquiries & Complaints</h5>
          <p className="section-description">
            If you have any inquiries or complaints:
          </p>
          
          <div className="contact-detail">
            <i className="fas fa-envelope contact-icon"></i>
            <span>skdavaodelsur@gmail.com</span>
          </div>
          <div className="contact-detail">
            <i className="fas fa-phone contact-icon"></i>
            <span>+63 992 883 7721</span>
          </div>
          <div className="contact-detail">
            <i className="fab fa-facebook-f contact-icon"></i>
            <a
              href="https://www.facebook.com/SKFederationOfDavaoDelSur"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              facebook.com/SKFederationOfDavaoDelSur
            </a>
          </div>
        </div>

      </div>
      <div className="form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdxNxylkWp2ISA4zY8-0uWz1Xz6haBs6ronPcUDoJTOI4Ax_g/viewform?embedded=true"
          title="Contact Form"
          className="contact-form"
        >
          Loading Form
        </iframe>
      </div>
    </div>
  );
};

export default ContactUs;