import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import logo from '../images/logo.png';
import basketsee from '../images/basketsee.png';
import user from '../images/user.png';
import Style from './styles/styleEtudiant'; 

const NavbarEtudiant = () => {
  const location = useLocation(); 
  
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <Style />
      <Navbar className='navbar' expand="lg" >
        <Navbar.Brand>
          <img src={logo} alt='Logo' style={{ height: '70px', marginRight: '203px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="header-navbar" className='dropdownToggle' />
        <Navbar.Collapse id="header-navbar">
          <Nav className="me-auto">
            <Link 
              to="/acceuil_etudiant" 
              className={`navLink ${isActive("/acceuil_etudiant") ? 'active-link' : ''}`}
            >
              Acceuil
            </Link>
            <Link 
              to="/command_etudiant_page" 
              className={`navLink ${isActive("/command_etudiant_page") ? 'active-link' : ''}`}
            >
              Historique commandes
            </Link>
            <Link 
              to="/reclamation" 
              className={`navLink ${isActive("/reclamation") ? 'active-link' : ''}`}
            >
              Réclamations
            </Link>
            <Link 
              to="/meilleurs_clients" 
              className={`navLink ${isActive("/meilleurs_clients") ? 'active-link' : ''}`}
            >
              Meilleurs clients
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/panier_etudiant_page">
            <img src={basketsee} alt='basketsee' style={{ height: '40px', marginRight: '10px', cursor: 'pointer' }} />
          </Link>
          <Link to="#">
            <img src={user} alt='user' style={{ height: '40px', cursor: 'pointer' }} /> 
          </Link>
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