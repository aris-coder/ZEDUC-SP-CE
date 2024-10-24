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
              to="/gestion_menu"
              className={`navLink ${isActive("/gestion_menu") ? 'active-link' : ''}`}
            >
              Gestion menu
            </Link>
            <Link
              to="/gestion_employes"
              className={`navLink ${isActive("/gestion_employes") ? 'active-link' : ''}`}
            >
              Gestion employes
            </Link>
            <Link
              to="/statistiques"
              className={`navLink ${isActive("/statistiques") ? 'active-link' : ''}`}
            >
              Statistiques
            </Link>
            <Link
              to="/promotions"
              className={`navLink ${isActive("/promotions") ? 'active-link' : ''}`}
            >
              Promotions
            </Link>
            <Link
              to="/reclamation"
              className={`navLink ${isActive("/reclamation") ? 'active-link' : ''}`}
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
            <Dropdown.Item as={Link} to="/gestion_menu">Gestion Menu</Dropdown.Item>
            <Dropdown.Item as={Link} to="/gestion_employes">Gestion Employes</Dropdown.Item>
            <Dropdown.Item as={Link} to="/statistiques">Statistiques</Dropdown.Item>
            <Dropdown.Item as={Link} to="/promotions">Promotions</Dropdown.Item>
            <Dropdown.Item as={Link} to="/reclamation">Reclamations</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </>
  );
};

export default NavbarEtudiant;