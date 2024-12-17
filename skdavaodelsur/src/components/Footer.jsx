import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white"
      style={{
        backgroundColor: "#8B0000",
        padding: "2rem 1rem",
      }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">SK PROVINCIAL FEDERATION</h5>
            <p className="text-uppercase">Davao del Sur</p>
            <p>For Inquiries / Complaints</p>
            <p className="mb-1">
              <b>Contact Us</b>
            </p>
            <p>skdavaodelsur@gmail.com</p>
            <p>
              <a
                href="https://www.facebook.com/SKFederationOfDavaoDelSur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                facebook.com/SKFederationOfDavaoDelSur
              </a>
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.27991401665!2d-74.25986472923103!3d40.69714942257381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSK%20Federation%20Office!5e0!3m2!1sen!2sph!4v1699887631234"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="mt-2">
              Davao-Cotabato Road, Digos-Sultan Kudarat Road, Mati, Digos,
              Philippines, 8002
            </p>
          </div>
        </div>

        <div
          className="text-center mt-4 pt-3"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            fontSize: "0.875rem",
          }}
        >
          <a href="#" className="text-white text-decoration-none me-3">
            Privacy Policy
          </a>
          <a href="#" className="text-white text-decoration-none me-3">
            Terms of Use
          </a>
          <a href="#" className="text-white text-decoration-none">
            Accessibility Statement
          </a>
          <p className="mt-2 mb-0">
            &copy; 2024 Sangguniang Kabataan Federation, Davao del Sur. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
