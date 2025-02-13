import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

const MyNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  // Close the navbar on scroll if it is open.
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
      expand="lg" // Collapsed on screens below "lg"
      variant="dark"
      style={{ backgroundColor: "#001540" }}
      className="justify-content-center"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          HOME
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* 
            Use w-100 to take full width and justify-content-evenly to space items equally
          */}
          <Nav className="w-100 justify-content-evenly">
          <Nav.Link
              as={Link}
              to="/newsandevents"
              onClick={() => setExpanded(false)}
            >
              NEWS AND EVENTS
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/government"
              onClick={() => setExpanded(false)}
            >
              GOVERNMENT
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
