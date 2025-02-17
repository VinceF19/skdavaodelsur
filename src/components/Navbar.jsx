import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  // On scroll, if navbar is open, close it
  useEffect(() => {
    const handleScroll = () => {
      if (expanded) {
        setExpanded(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [expanded]);

  return (
    <Navbar
      expanded={expanded}
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          HOME
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/government"
              onClick={() => setExpanded(false)}
            >
              GOVERNMENT
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/newsandevents"
              onClick={() => setExpanded(false)}
            >
              NEWS AND EVENTS
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact-us"
              onClick={() => setExpanded(false)}
            >
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
