const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark px-5"
        style={{ backgroundColor: "#960515" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            HOME
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  GOVERNMENT
                </a>
              </li>
              <li className="nav-item flex-grow-1 text-center">
                <a className="nav-link" href="#">
                  NEWS AND EVENTS
                </a>
              </li>
              <li className="nav-item flex-grow-1 text-center">
                <a className="nav-link" href="#">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item dropdown flex-grow-1 text-center">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CONTACT US
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      CONTACT
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      SURVEY
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
