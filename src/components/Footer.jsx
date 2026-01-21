import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="gov-footer text-white">
      <div className="container-fluid footer-inner">
        <div className="row">

          {/* LEFT */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">SK PROVINCIAL FEDERATION</h5>
            <p className="footer-subtitle">Davao del Sur</p>

            <div className="footer-item">
              <i className="fas fa-landmark footer-icon" />
              <span>
                Davao-Cotabato Road, Digos-Sultan Kudarat Road, Mati, Digos,
                Philippines, 8002
              </span>
            </div>

            <p className="footer-copy">
              © 2024 Sangguniang Kabataan Federation, Davao del Sur. All rights reserved.
            </p>
          </div>

          {/* MIDDLE */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Inquiries & Complaints</h5>
            <p className="footer-text">
              For inquiries or complaints, you may contact us through:
            </p>

            <div className="footer-item">
              <i className="fas fa-envelope footer-icon" />
              <span>skdavaodelsur@gmail.com</span>
            </div>

            <div className="footer-item">
              <i className="fas fa-phone footer-icon" />
              <span>+63 992 883 7721</span>
            </div>

            <a
              href="https://www.facebook.com/SKFederationOfDavaoDelSur"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-item footer-link"
            >
              <i className="fab fa-facebook-f footer-icon" />
              <span>SKFederationOfDavaoDelSur</span>
            </a>
          </div>

          {/* RIGHT */}
          <div className="col-md-4 mb-4">
            <iframe
              title="SK Federation Location"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d18846.731910029488!2d125.29961003156636!3d6.76530354091518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDavao-Cotabato%20Road%2C%20Digos-Sultan%20Kudarat%20Road%2C%20Mati%2C%20Digos%2C%20Philippines%2C%208002!5e0!3m2!1sen!2sus!4v1734457220068!5m2!1sen!2sus"
              className="footer-map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <Link to="/privacy" className="footer-privacy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
