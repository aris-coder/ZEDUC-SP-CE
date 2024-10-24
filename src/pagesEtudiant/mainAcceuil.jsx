import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Col, Row, Button } from 'react-bootstrap'; 
import MenuJour from './menuJour';
import HeaderEtudiant from './headerEtudiant';
import dg from '../images/dg.png';
import kok from '../images/kok.png';
import jeuxImage from '../images/jeu.jpeg';  

const MainComponent = () => {
  // État pour les plats du menu du jour
  const [menuDuJour, setMenuDuJour] = useState([]);

  // Fonction pour récupérer le menu du jour
  const fetchMenuDuJour = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/api/menu_du_jour');
      setMenuDuJour(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération du menu du jour:", error);
    }
  };

  // Appel fetchMenuDuJour lors du chargement du composant
  useEffect(() => {
    fetchMenuDuJour();
  }, []);

  // Exemple de données pour les promotions
  const promotionsData = [
    { id: 1, title: "Boisson offerte", description: "-20% à partir de 3 plats", image: dg, validUntil: "18/10/2024" },
    { id: 2, title: "Dessert gratuit", description: "-20% à partir de 3 plats", image: dg, validUntil: "18/10/2024" },
    { id: 3, title: "Plat gratuit", description: "-30% sur le 4ème plat", image: kok, validUntil: "20/10/2024" },
  ];

  // Exemple de données pour les jeux et événements
  const jeuxData = [
    { id: 1, title: "Jeu de billard", description: "1 pièce de 3 parties à 1000 XAF", image: jeuxImage, hours: "12h00 - 22h00" },
    { id: 2, title: "Jeu de fléchettes", description: "1 partie gratuite après 3", image: jeuxImage, hours: "12h00 - 22h00" },
    { id: 3, title: "Jeu de cartes", description: "2 parties achetées, 1 partie offerte", image: jeuxImage, hours: "12h00 - 22h00" },
  ];

  return (
    <>
      <main className="main-content">
        <HeaderEtudiant />

        {/* Menu du jour */}
        <div className="row mt-5">
          <MenuJour />
        </div>

        {/* Section Ajouter les plats du menu */}
        <div className="row mt-5" style={{ paddingTop: '50px', paddingLeft: '20px' }}>
          <h2>Ajoutez les plats du menu à votre panier</h2>
          <div className="atouts-list">
            <Row>
              {menuDuJour.map((plat) => (
                <Col key={plat.id} xs={12} sm={6} md={6} lg={4}>
                  <Card className="atout-item" style={{ height: '400px', marginBottom: '20px' }}>
                    <Card.Img
                      variant="top"
                      src={dg}
                      className="image1"
                      alt='dg'
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title>
                        {plat.nom}
                        <span style={{ paddingLeft: '15px', fontWeight: 'normal', fontSize: '0.9rem' }}>{plat.prix}</span>
                      </Card.Title>
                      <Card.Text>{plat.description}</Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button className="btn-panier" variant="outline-primary" style={{ color: 'white', width: '100px', borderColor: '#EAC26E' }} 
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#EAC26E'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                          <i className="fa fa-shopping-cart" /> Panier
                        </Button>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span
                            style={{
                              width: '12px',
                              height: '12px',
                              borderRadius: '50%',
                              backgroundColor: plat.statut ? 'green' : 'red',
                              display: 'inline-block',
                              marginRight: '8px',
                            }}
                          ></span>
                          <span>{plat.statut ? 'Disponible' : 'Épuisé'}</span>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Section Promotions du moment */}
        <div className="row mt-5" style={{ paddingTop: '50px', paddingLeft: '20px' }}>
          <h2>Promotions du moment</h2>
          <Row>
            {promotionsData.map((promo) => (
              <Col key={promo.id} xs={12} sm={6} md={6} lg={4}>
                <Card className="atout-item" style={{ height: '400px', marginBottom: '20px' }}>
                  <Card.Img
                    variant="top"
                    src={promo.image}
                    className="image1"
                    alt={promo.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{promo.title}</Card.Title>
                    <Card.Text>{promo.description}</Card.Text>
                    <Button className="btn-offer" variant="outline-warning" style={{ color: 'white', width: '200px', borderColor: '#EAC26E' }} 
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#EAC26E'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>Profiter de l'offre</Button>
                    <p style={{ fontSize: '0.8rem', color: 'gray', marginTop: '10px' }}>
                      Valable jusqu'au {promo.validUntil}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Section Jeux et Événements */}
        <div className="row mt-5" style={{ paddingTop: '50px', paddingLeft: '20px' }}>
          <h2>Jeux et Événements</h2>
          <p style={{ color: 'black' }}>
            Participez à nos jeux interactifs et événements spéciaux pour cumuler des points de fidélité !
            Chaque participation vous rapproche de récompenses exclusives comme des réductions, des repas gratuits et plus encore.
          </p>
          <Row>
            {jeuxData.map((jeu) => (
              <Col key={jeu.id} xs={12} sm={6} md={6} lg={4}>
                <Card className="atout-item" style={{ height: '400px', marginBottom: '20px' }}>
                  <Card.Img
                    variant="top"
                    src={jeu.image}
                    alt={jeu.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{jeu.title}</Card.Title>
                    <Card.Text>{jeu.description}</Card.Text>
                    <Button variant="outline-primary" style={{ color: 'white', width: '100px', borderColor: '#EAC26E' }} 
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#EAC26E'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>Participer</Button>
                    <p style={{ fontSize: '0.8rem', color: 'gray', marginTop: '10px' }}>Horaires : {jeu.hours}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </main>

      {/* Styles avec media queries */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Milonga&display=swap');

        /* Style général pour le contenu principal */
        .main-content {
          background: linear-gradient(180deg, rgba(14, 14, 14, 1) 0%, rgba(207, 189, 151, 1) 100%);
          padding: 1px;
          z-index: 1;
          position: relative;
          color: white;
          font-family: 'Milonga', serif;
          width: 100vw;
        }

        .btn-panier, .btn-offer {
          width: 100%;
        }

        @media (max-width: 576px) {
          .main-content {
            padding: 10px;
          }
        }

        @media (min-width: 576px) and (max-width: 768px) {
          .main-content {
            padding: 15px;
          }
        }

        @media (min-width: 768px) {
          .main-content {
            padding: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default MainComponent;
