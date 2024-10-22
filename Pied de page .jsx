import React from 'react';
import { Link } from 'react-router-dom';
import './Pied de page.css'; // On va utiliser ce fichier pour les styles personnalisés
const Footer = () => {
  return (
    <footer className="footer text-light py-4" style={{ background: 'linear-gradient(180deg, #0E0E0E 15%, #CFBD97 100%)' }}>
      <div className="container">
        <div className="row" style={{ fontFamily: 'Milonga, sans-serif', color: 'white' }}>
          {/* Logo */}
          <div className="col-md-2 text-center">
            <img src={process.env.PUBLIC_URL + "/assets/logo.jpg"} alt="Logo" style={{ width: '80px', marginBottom: '10px' }} />
          </div>

          {/* Informations */}
          <div className="col-md-3 text-center">
            <h4>Informations</h4>
            <ul className="list-unstyled">
              <li><Link to="/help" className="text-light" style={{ textDecoration: 'none' }}>Aide</Link></li>
              <li><Link to="/about" className="text-light" style={{ textDecoration: 'none' }}>À propos</Link></li>
            </ul>
          </div>

          {/* Accès utilisateur */}
          <div className="col-md-3 text-center">
            <h4>Accès utilisateur</h4>
            <ul className="list-unstyled">
              <li><a href="/connexion" className="text-light" style={{ textDecoration: 'none' }}>Se connecter</a></li>
              <li><a href="/inscription" className="text-light" style={{ textDecoration: 'none' }}>S'inscrire</a></li>
            </ul>
          </div>

          {/* Localisation */}
          <div className="col-md-3 text-center">
            <h4>Localisation</h4>
            <address className="text-light">
              Cité la Terrasse, <br />
              Yansoki, Douala
            </address>
          </div>

          {/* WhatsApp */}
          <div className="col-md-1 text-center">
            <h4>WhatsApp</h4>
            <a href="https://wa.me/659474520" target="_blank" rel="noopener noreferrer" className="text-light">
              <img src={process.env.PUBLIC_URL + "/assets/WhatsApp.png"} alt="WhatsApp" style={{ width: '40px' }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
