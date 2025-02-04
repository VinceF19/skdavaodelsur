import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark px-5 justify-content-center"
        style={{ backgroundColor: "#001540" }}
      >
        <div className="container-fluid align">
          <Link className="navbar-brand" to="/">
            HOME
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav w-100 d-flex justify-content-around">
              <li className="nav-item flex-grow-1 text-center">
                <Link className="nav-link" to="/government">
                  GOVERNMENT
                </Link>
              </li>
              <li className="nav-item flex-grow-1 text-center">
                <Link className="nav-link" to="/newsandevents">
                  NEWS AND EVENTS
                </Link>
              </li>
              {/* <li className="nav-item flex-grow-1 text-center">
                <Link className="nav-link" to="/about-us">
                  ABOUT US
                </Link>
              </li> */}
              <li className="nav-item dropdown flex-grow-1 text-center">
                <Link className="nav-link dropdown-toggle" to="/contact-us">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
