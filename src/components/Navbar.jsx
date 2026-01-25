import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./MyNavbar.css";

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (expanded) setExpanded(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [expanded]);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className={`modern-navbar ${scrolled ? "scrolled" : ""}`}
      fixed="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand">
          <span className="brand-mark">SK</span>
          <span className="brand-text">Provincial Federation</span>
        </Navbar.Brand>

        <Navbar.Toggle
          className="custom-toggler"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse>
          <Nav className="ms-auto nav-links">
            {[
              { name: "Home", path: "/" },
              { name: "Government", path: "/government" },
              { name: "News & Events", path: "/newsandevents" },
              { name: "Contact", path: "/contact-us" }
            ].map((item) => (
              <Nav.Link
                as={Link}
                key={item.path}
                to={item.path}
                onClick={() => setExpanded(false)}
                className={
                  location.pathname === item.path ? "active" : ""
                }
              >
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
