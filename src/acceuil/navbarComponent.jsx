import React from "react";
import {Navbar, Nav, Button} from 'react-bootstrap';
import Style from "./style";
import logotransparent from '../images/logotransparent.png';

const NavbarComponent = () => {
    return(
        <>
            <Style/>
            <Navbar className="navbar-custom" expand="lg" style={{fontFamily: 'Milonga, sans-serif'}}>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img src={logotransparent} alt="Mon Miam Miam Logo" className="navbar-logo" />
                    <span className="brand-name">Mon Miam Miam!</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Button variant="outline-light" className="mx-2"> Se connecter</Button>
                        <Button variant="light">S'inscrire</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
        
    );
}

export default NavbarComponent;