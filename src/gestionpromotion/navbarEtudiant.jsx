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
          <Nav className="me-auto" style={{ margin: '60px', gap: '40px' }}>
            <Link
              to="/acceuil_etudiant"
              className={`navLink ${isActive("/acceuil_etudiant") ? 'active-link' : ''}`}
            >
              Gestion menu
            </Link>
            <Link
              to="/command_etudiant_page"
              className={`navLink ${isActive("/command_etudiant_page") ? 'active-link' : ''}`}
            >
              Gestion employes
            </Link>
            <Link
              to="/reclamation"
              className={`navLink ${isActive("/reclamation") ? 'active-link' : ''}`}
            >
              Statistiques
            </Link>
            <Link
              to="/meilleurs_clients"
              className={`navLink ${isActive("/meilleurs_clients") ? 'active-link' : ''}`}
            >
              Promotions
            </Link>
            <Link
              to="/meilleurs_clients"
              className={`navLink ${isActive("/meilleurs_clients") ? 'active-link' : ''}`}
            >
              Reclamation
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/profil_etudiant">
            <img src={user} alt='user' style={{ height: '40px', cursor: 'pointer' }} />
          </Link>
        </div>

        <Dropdown>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/acceuil_etudiant">Acceuil</Dropdown.Item>
            <Dropdown.Item as={Link} to="/command_etudiant_page">Historique commandes</Dropdown.Item>
            <Dropdown.Item as={Link} to="/reclamation">Réclamations</Dropdown.Item>
            <Dropdown.Item as={Link} to="/meilleurs_clients">Meilleurs clients</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </>
  );
};

export default NavbarEtudiant;