import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap'; 
import MenuJour from './menuJour';
import HeaderEtudiant from './headerEtudiant';
import dg from '../images/dg.png';
import kok from '../images/kok.png';
import jeuxImage from '../images/jeu.jpeg';  

// Exemple de données pour les plats
const platsData = [
  { id: 1, title: "Ndolé", price: "1000f", description: "A: Riz, Miondo, Frites de plantain", image: kok, available: true },
  { id: 2, title: "Poulet DG", price: "1500f", description: "A: Riz, Miondo, Frites de banane", image: kok, available: false },
  { id: 3, title: "Okok", price: "1200f", description: "A: Baton de manioc, Plantains", image: kok, available: true },
];

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

const MainComponent = () => {
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
              {platsData.map((plat) => (
                <Col key={plat.id} xs={12} sm={6} md={6} lg={4}>
                  <Card className="atout-item" style={{ height: '400px', marginBottom: '20px' }}>
                    <Card.Img
                      variant="top"
                      src={plat.image}
                      className="image1"
                      alt={plat.title}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                    <Card.Body>
                      <Card.Title>
                        {plat.title}
                        <span style={{ paddingLeft: '15px', fontWeight: 'normal', fontSize: '0.9rem' }}>{plat.price}</span>
                      </Card.Title>
                      <Card.Text>{plat.description}</Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button className="btn-panier" variant="outline-primary" style={{ color: 'white',width: '100px', borderColor: '#EAC26E'}} 
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
                              backgroundColor: plat.available ? 'green' : 'red',
                              display: 'inline-block',
                              marginRight: '8px',
                            }}
                          ></span>
                          <span>{plat.available ? 'Disponible' : 'Épuisé'}</span>
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
                    <Button className="btn-offer" variant="outline-warning" style={{ color: 'white',width: '200px', borderColor: '#EAC26E'}} 
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#EAC26E'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>Profiter de l'offre</Button>
                    <p style={{ fontSize: '0.8rem', color: 'gray', marginTop: '10px' }} >
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
          <p style={{color:'black'}}>
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
                    <Button variant="outline-primary" style={{ color: 'white',width: '100px', borderColor: '#EAC26E'}} 
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
          // background: linear-gradient(180deg, rgba(14, 14, 14, 1) 1%, rgba(207, 189, 151, 1) 0%);
          padding: 1px ;
          z-index: 1;
          position: relative;
          color: white;
          font-family: 'Milonga', serif;
          width: 100vw;
        }

        .btn-panier, .btn-offer {
          width: 100%;
        }

        @media (max-width: 768px) {
          .btn-panier, .btn-offer {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }
        }

        @media (max-width: 576px) {
          .btn-panier, .btn-offer {
            font-size: 0.7rem;
            padding: 0.3rem 0.6rem;
          }
        }
      `}</style>
    </>
  );
};

export default MainComponent;
