import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light "
      style={{
        background: 'linear-gradient(190deg, #000000, #685F4C, #CFBD97)',          
      }}>
      <div className="container-fluid">
        <button className="navbar-toggler btn btn-light" type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls='navbarNav' aria-expanded="false" aria-label="Toggle navigation"
          style={{ background: '#cfbd97' }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          <img src={process.env.PUBLIC_URL + "/assets/logo.jpg"} alt="Logo" className="img-fluid" style={{ width: "50px" }} />
        </Link>
        <div className="collapse navbar-collapse" id='navbarNav'>
          <ul className="navbar-nav" style={{ width: '100%', justifyContent: 'space-between', fontFamily: 'Times New Roman' }}>
            <li className="nav-item">
              <NavLink className="nav-link"  to="/employes" style={({ isActive }) => ({
    color: isActive ? 'white' : '#ffffff'
  })}>
                Gestion des Employés
              </NavLink> 
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={{ color: '#ffffff' }} to="/menu">
                Gestion du Menu
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={{ color: '#ffffff' }} to="/statistics">
                Statistiques
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={{ color: '#ffffff' }} to="/promotions">
                Promotions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" style={{ color: '#ffffff' }} to="/reclamations">
                Réclamation
              </NavLink>
            </li>
          </ul>
          <a href="https://wa.me/+237659474520" target="_blank" rel="noopener noreferrer">
            <img src={process.env.PUBLIC_URL + "/assets/Male User.png"} alt="Contact" className="img-fluid" style={{ width: "40px" }} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
