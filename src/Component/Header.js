import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar expand="md" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <i className="bi bi-r-circle fs-3"></i>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar"
            style={{ border: "none", boxShadow: "none", fontSize: "20px" }}
          >
            <i className="bi bi-three-dots-vertical"></i>
          </Navbar.Toggle>
          <Navbar.Offcanvas
            className="sidemenu"
            id="responsive-navbar"
            aria-labelledby="Navbar-expand"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="Navbar-expand">
                <Navbar.Brand href="/">
                  <i className="bi bi-r-circle fs-3"></i>
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="align-items-center">
              <Nav className="ms-auto">
                <NavLink className="nav-link" to="/about">
                  ABOUT
                </NavLink>
                <NavLink className="nav-link" to="/project">
                  PROJECT
                </NavLink>
                {/* <NavLink className="nav-link" to='/resume'>RESUME</NavLink> */}
                <NavLink className="nav-link" to="/contact">
                  CONTACT
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
