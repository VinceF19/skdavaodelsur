import React, { useEffect } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="contact-us-container">
      {/* Left Content */}
      <div className="left-content fade-in">
        <h2 className="contact-title">CONTACT US</h2>
        <div className="contact-info">
          <h5 className="section-title text-white">Inquiries & Complaints</h5>
          <p className="section-description">
            If you have any inquiries or complaints, feel free to reach out!
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
              SKFederationOfDavaoDelSur
            </a>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="form-container fade-in">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdxNxylkWp2ISA4zY8-0uWz1Xz6haBs6ronPcUDoJTOI4Ax_g/viewform?embedded=true"
          title="Contact Form"
          className="contact-form"
        >
          Loading Form...
        </iframe>
      </div>
    </div>
  );
};

export default ContactUs;
