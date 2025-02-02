import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-white"
      style={{
        backgroundColor: "#001540",
        padding: "0.5rem 1rem", // Reduced padding
      }}
    >
      <div className="container-fluid" style={{ padding: "0.5rem" }}> {/* Reduced padding */}
        <div className="row justify-content-between">
          {/* Left Section */}
          <div className="col-md-4 mb-2"> {/* Reduced margin-bottom */}
            <h5 className="fw-bold" style={{ fontSize: "1rem" }}>SK PROVINCIAL FEDERATION</h5> {/* Reduced font size */}
            <p className="fw-lighter lh-1" style={{ fontSize: "0.875rem" }}>Davao del Sur</p> {/* Reduced font size */}
            <div className="d-flex align-items-center mb-1"> {/* Reduced margin-bottom */}
              {/* Logo */}
              <i
                className="fas fa-landmark"
                style={{
                  fontSize: "24px", // Reduced icon size
                  color: "white",
                  marginRight: "8px", // Reduced margin
                }}
              ></i>
              <p className="fw-lighter m-0" style={{ fontSize: "0.875rem" }}> {/* Reduced font size */}
                Davao-Cotabato Road, Digos-Sultan Kudarat Road, Mati, Digos,
                Philippines, 8002
              </p>
            </div>
            <div className="d-flex justify-content-evenly align-items-center mb-2"></div> {/* Reduced margin-bottom */}
            <p className="fw-lighter lh-1" style={{ fontSize: "0.875rem" }}> {/* Reduced font size */}
              2024 Sangguniang Kabataan Federation, Davao del Sur, All rights
              reserved.
            </p>
          </div>

          {/* Middle Section */}
          <div className="col-md-4 mb-2"> {/* Reduced margin-bottom */}
            <h5 className="fw-bold" style={{ fontSize: "1rem" }}>Inquiries & Complaints</h5> {/* Reduced font size */}
            <p className="lh-1 fw-lighter" style={{ fontSize: "0.875rem" }}> {/* Reduced font size */}
              If you have any inquiries or complaints:
            </p>
            <p className="mb-1">
              <b className="text-uppercase fw-bold" style={{ fontSize: "0.875rem" }}>Contact Us</b> {/* Reduced font size */}
            </p>
            <p className="fw-lighter lh-1" style={{ fontSize: "0.875rem" }}> {/* Reduced font size */}
              <i
                className="fas fa-envelope"
                style={{
                  fontSize: "24px", // Reduced icon size
                  color: "white",
                  marginRight: "8px", // Reduced margin
                }}
              ></i>{" "}
              skdavaodelsur@gmail.com
            </p>
            <p className="fw-lighter lh-1" style={{ fontSize: "0.875rem" }}> {/* Reduced font size */}
              <i
                className="fas fa-phone"
                style={{
                  fontSize: "24px", // Reduced icon size
                  color: "white",
                  marginRight: "8px", // Reduced margin
                }}
              ></i>{" "}
              +63 992 883 7721
            </p>
            <p className="fw-lighter lh-1">
              <p className="lh-1 fw-lighter" style={{ fontSize: "0.875rem" }}> {/* Reduced font size */}
                <a
                  href="https://www.facebook.com/SKFederationOfDavaoDelSur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <i
                    className="fab fa-facebook-f"
                    style={{
                      fontSize: "24px", // Reduced icon size
                      color: "white",
                      marginRight: "8px", // Reduced margin
                    }}
                  ></i>{" "}
                  facebook.com/SKFederationOfDavaoDelSur
                </a>
              </p>
            </p>
          </div>

          {/* Right Section */}
          <div className="col-md-4 mb-2"> {/* Reduced margin-bottom */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d18846.731910029488!2d125.29961003156636!3d6.76530354091518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sDavao-Cotabato%20Road%2C%20Digos-Sultan%20Kudarat%20Road%2C%20Mati%2C%20Digos%2C%20Philippines%2C%208002!5e0!3m2!1sen!2sus!4v1734457220068!5m2!1sen!2sus"
              width="100%"
              height="150" // Reduced height
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;