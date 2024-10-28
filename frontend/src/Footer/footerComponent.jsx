import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Style from '../Styles/styleAcceuil';
import logo from '../images/Logo ZEDUC FOOT.png'


const FooterComponent = () => {
  return (
    <>
      <Style />
      <footer className=" text-light py-4" style={{ background: 'linear-gradient(180deg, rgba(14, 14, 14, 1) 15%, rgba(207, 189, 151, 1) 100%)' }}>
        <Container>
          <Row style={{ fontFamily: 'Milonga, sans-serif', color: 'white' }}>
            <Col md={1} className="text-center">
              <img src={logo} alt="Logo" style={{ width: '100px'}} />
            </Col>

            <Col md={3} className="text-center">
              <h3>Informations</h3>
              <ul className="list-unstyled">
                <li><Link to="/help" className="text-light">Aide</Link></li>
                <li><Link to="/about" className="text-light">À propos</Link></li>
              </ul>
            </Col>

            <Col md={3} className="text-center">
              <h3>Accès utilisateur</h3>
              <ul className="list-unstyled">
              
                <li><a href="./connexion" className="text-light">Se connecter</a></li>
                <li><a href="./inscription" className="text-light">S'inscrire</a></li>
              </ul>
            </Col>

            <Col md={3} className="text-center">
              <h3>Localisation</h3>
              <address className="text-light">
                Cité la Terrasse,<br />
                Yansoki, Douala
              </address>
            </Col>

            <Col md={1} className="text-center">
              <h3>Watsapp</h3>
              <a href="https://chat.whatsapp.com/EwyQJF4B1Ag7BWuNtGA4Fk" className="text-light">
                <i className="fab fa-whatsapp" style={{ fontSize: '35px' }}></i>
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default FooterComponent;
