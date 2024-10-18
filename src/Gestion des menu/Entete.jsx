// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      style={{
        background: 'linear-gradient(190deg, #000000, #685F4C, #CFBD97)',          
      }}>
      <div className="container-fluid">
        <button className="navbar-toggler btn btn-light" type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls='navbarNav' aria-expanded="false" aria-label="Toggle navigation"
          style={{ background: '#cfbd97' }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img src={process.env.PUBLIC_URL + "/assets/logo.jpg"} alt="Logo" className="img-fluid" style={{ width: "50px" }} />
        </a>
        <div className="collapse navbar-collapse" id='navbarNav'>
          <ul className="navbar-nav " style={{ width: '100%', justifyContent: 'space-between', fontFamily: 'Times New Roman' }}>
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" 
    style={{
      textAlign: 'center', // Utilise textAlign au lieu de text-align
      color: '#ffffff',
      flexGrow: 1, // Utilise flexGrow au lieu de flex-grow
      fontSize: '2rem' // Utilise fontSize au lieu de font-size
    }} href="#">
    Gestion du Menu
  </a> 
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: '#ffffff' }} href="#">Gestion des employes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: '#ffffff' }} href="#">Statistiques</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: '#ffffff' }} href="#">Promotions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: '#ffffff' }} href="#">Réclamation</a>
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
