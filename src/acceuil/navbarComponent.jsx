import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Style from "./styleAcceuil";
import logotransparent from "../images/logotransparent.png";

const NavbarComponent = () => {
  return (
    <>
        <Style />
        <Navbar className="navbar-custom" expand="lg" style={{ fontFamily: "Milonga, sans-serif" }}>
            <Navbar.Brand href="#home" className="d-flex align-items-center">
                <img src={logotransparent} alt="Logo" className="navbar-logo" />
                <span className="brand-name">Mon Miam Miam</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="jsutify-content-end">
                <Nav className="ms-auto d-flex align-items-center">
                    <Link to='./connexion'>
                        <Button variant="outline-light" className="rounded-btn mx-3"> Se connecter </Button>
                    </Link>
                    <Link to='./inscription'>
                        <Button variant="outline-light" className="rounded-btn mx-3"> S'inscrire </Button>
                    </Link>
                    
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
  );
};

export default NavbarComponent;
