import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./MyNavbar.css";

const NAV_LINKS = [
  { to: "/newsandevents", label: "News & Events" },
  { to: "/government",    label: "Government"    },
  { to: "/contact-us",    label: "Contact Us"    },
];

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled,  setScrolled]  = useState(false);
  const location = useLocation();

  // Collapse on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (expanded) setExpanded(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [expanded]);

  // Collapse on route change
  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      className={`site-navbar${scrolled ? " scrolled" : ""}`}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="nav-brand" onClick={() => setExpanded(false)}>
          <span className="nav-brand-title">SK</span>
          <span className="nav-brand-sub">Davao del Sur</span>
        </Navbar.Brand>

        {/* Mobile toggle */}
        <Navbar.Toggle
          aria-controls="main-nav"
          className="nav-toggle"
          onClick={() => setExpanded(!expanded)}
        />

        {/* Links */}
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto nav-links-list">
            {NAV_LINKS.map(({ to, label }) => (
              <Nav.Link
                key={to}
                as={Link}
                to={to}
                className={`nav-link-item${location.pathname === to ? " active" : ""}`}
                onClick={() => setExpanded(false)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
