import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import logo from '../images/logo.png';
import basketsee from '../images/basketsee.png';
import user from '../images/user.png';
import Style from './styleEtudiant'; 

const NavbarEtudiant = () => {
  return (
    <>
      <Style />
      <Navbar className='navbar' expand="lg">
        <Navbar.Brand>
          <img src={logo} alt='Logo' style={{ height: '70px', marginRight: '203px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="header-navbar" className='dropdownToggle' />
        <Navbar.Collapse id="header-navbar">
          <Nav className="me-auto">
            <Nav.Link href="#historique" className='navLink'>Historique commande</Nav.Link>
            <Nav.Link href="#reclamations" className='navLink'>Réclamations</Nav.Link>
            <Nav.Link href="#jeux" className='navLink'>Jeux & Événements</Nav.Link>
            <Nav.Link href="#meilleurs-clients" className='navLink'>Meilleurs clients</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={basketsee} alt='basketsee' style={{ height: '40px', marginRight: '10px', cursor: 'pointer' }} />
          <img src={user} alt='user' style={{ height: '40px', cursor: 'pointer' }} />
        </div>

        <Dropdown>
          <Dropdown.Menu>
            <Dropdown.Item href="#historique">Historique commande</Dropdown.Item>
            <Dropdown.Item href="#reclamations">Réclamations</Dropdown.Item>
            <Dropdown.Item href="#jeux">Jeux & Événements</Dropdown.Item>
            <Dropdown.Item href="#meilleurs-clients">Meilleurs clients</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </>
  );
};

export default NavbarEtudiant;
