import { useState } from 'react';
import { Card, Col, Row, Button, Form, Modal } from 'react-bootstrap';
import dg from '../images/dg.png';
import kok from '../images/kok.png';
import jeuxImage from '../images/jeu.jpeg';
import HeaderEtudiant from './headerEtudiant';
import add from '../images/Add_properties.png';

// Exemple de données pour les promotions
const promotionData = [
  { id_promotion: 1, en_tete: '-20% de réduction', titre: "Ndolé de gaby bryan", price: "1000f", description: "A: Riz, Miondo, Frites de plantain", image: kok, date_debut: '20/10/2024', date_fin: '22/10/2024' },
  { id_promotion: 2, en_tete: '-20% de réduction', titre: "Poulet DG", price: "1500f", description: "A: Riz, Miondo, Frites de banane", image: kok, date_debut: '20/10/2024', date_fin: '22/10/2024' },
  { id_promotion: 3, en_tete: '-20% de réduction', titre: "Okok", price: "1200f", description: "A: Baton de manioc, Plantains", image: kok, date_debut: '20/10/2024', date_fin: '22/10/2024' },
  { id_promotion: 4, en_tete: '-20% de réduction', titre: "Okok", price: "1200f", description: "A: Baton de manioc, Plantains", image: kok, date_debut: '20/10/2024', date_fin: '22/10/2024' },
];

// Exemple de données pour les jeux et événements
const jeuxData = [
  { id_evenement: 1, titre: "Jeu de billard", description: "1 pièce de 3 parties à 1000 XAF", image: jeuxImage, date_debut: '20/10/2024', date_fin: '22/10/2024' },
  { id_evenement: 2, titre: "Jeu de fléchettes", description: "1 partie gratuite après 3", image: jeuxImage, date_debut: '20/10/2024', date_fin: '22/10/2024' },
  { id_evenement: 3, titre: "Jeu de cartes", description: "2 parties achetées, 1 partie offerte", image: jeuxImage, date_debut: '20/10/2024', date_fin: '22/10/2024' },
];

const MainComponent = () => {
  const [promotions, setPromotions] = useState(promotionData);
  const [showForm, setShowForm] = useState(false);
  const [newPromo, setNewPromo] = useState({
    en_tete: '',
    titre: '',
    price: '',
    description: '',
    image: kok,
    date_debut: '',
    date_fin: ''
  });

  const handleInputChange = (e) => {
    setNewPromo({
      ...newPromo,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const updatedPromotions = [...promotions, { ...newPromo, id_promotion: promotions.length + 1 }];
    setPromotions(updatedPromotions);
    setShowForm(false);
  };

  return (
    <>
      <main className="main-content">
        <div>
          <HeaderEtudiant />
        </div>

        {/* Section Promotions du moment */}
        <div className="row mt-5" style={{ paddingTop: '50px', paddingLeft: '20px', marginBottom: '20px' }}>
          <div className='row d-flex'>
            <div className='col'><h2> <a href='#' style={{ color: 'white' }}>Promotions du moment</a></h2></div>
            <div className='col d-flex justify-content-end'>
              <button
                style={{ backgroundColor: 'black', borderRadius: '20px' }}
                onClick={() => setShowForm(true)}
              >
                <img src={add} alt="" />
              </button>
            </div>
          </div>
          <Row>
            {promotions.map((promo) => (
              <Col key={promo.id_promotion} xs={12} sm={6} md={6} lg={4} style={{ marginBottom: '20px' }}>
                <Card className="atout-item" style={{ height: '470px', position: 'relative' }}>
                  {/* En-tête de la promotion */}
                  <p className="promo-header" style={{
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    zIndex: '10',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#000'
                  }}>
                    {promo.en_tete}
                  </p>
                  {/* Image de la promotion */}
                  <Card.Img
                    variant="top"
                    src={promo.image}
                    className="image1"
                    alt={promo.titre}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{promo.titre}</Card.Title>
                    <Card.Text>{promo.description}</Card.Text>
                    {/* Affichage du prix et des dates */}
                    <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>Prix : {promo.price}</p>
                    <p style={{ fontSize: '0.9rem' }}>Début : {promo.date_debut} - Fin : {promo.date_fin}</p>
                    <Button className="btn-offer" variant="outline-warning" style={{ color: 'white', width: '200px', borderColor: '#EAC26E', marginBottom: '25px', borderRadius: '20px' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#EAC26E'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>Profiter de l'offre</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Section Jeux et Événements */}
        <div className="row mt-5" style={{ paddingTop: '50px', paddingLeft: '20px' }}>
          <div className='row'>
            <div className='col'><h2><a href='#' style={{ color: 'white' }}>Jeux et Événements</a></h2></div>
            <div className='col d-flex justify-content-end'><button style={{ backgroundColor: 'black', borderRadius: '20px' }}> <img src={add} alt="" /></button></div>
          </div>
          <p style={{ color: 'black' }}>
            Participez à nos jeux interactifs et événements spéciaux pour cumuler des points de fidélité !
            Chaque participation vous rapproche de récompenses exclusives comme des réductions, des repas gratuits et plus encore.
          </p>
          <Row>
            {jeuxData.map((jeu) => (
              <Col key={jeu.id_evenement} xs={12} sm={6} md={6} lg={4}>
                <Card className="atout-item" style={{ height: '400px', marginBottom: '20px' }}>
                  <Card.Img
                    variant="top"
                    src={jeu.image}
                    alt={jeu.titre}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <Card.Body>
                    <Card.Title>{jeu.titre}</Card.Title>
                    <Card.Text>{jeu.description}</Card.Text>
                    <Button variant="outline-primary" style={{ color: 'white', width: '100px', borderColor: '#EAC26E' }}
                      onMouseEnter={(e) => e.target.style.backgroundColor = '#EAC26E'}
                      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>Participer</Button>
                    <p style={{ fontSize: '0.8rem', color: 'gray', marginTop: '10px' }}>Date : {jeu.date_debut} - {jeu.date_fin}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </main>

      {/* Formulaire Modal pour ajouter une promotion */}
      <Modal show={showForm} onHide={() => setShowForm(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une Promotion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="formPromoHeader">
              <Form.Label>En-tête</Form.Label>
              <Form.Control
                type="text"
                name="en_tete"
                value={newPromo.en_tete}
                onChange={handleInputChange}
                placeholder="Entrez l'en-tête de la promotion"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPromoTitle">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                name="titre"
                value={newPromo.titre}
                onChange={handleInputChange}
                placeholder="Entrez le titre de la promotion"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPromoPrice">
              <Form.Label>Prix</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={newPromo.price}
                onChange={handleInputChange}
                placeholder="Entrez le prix"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPromoDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                name="description"
                value={newPromo.description}
                onChange={handleInputChange}
                placeholder="Entrez la description"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPromoStartDate">
              <Form.Label>Date de début</Form.Label>
              <Form.Control
                type="date"
                name="date_debut"
                value={newPromo.date_debut}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPromoEndDate">
              <Form.Label>Date de fin</Form.Label>
              <Form.Control
                type="date"
                name="date_fin"
                value={newPromo.date_fin}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Valider
            </Button>
            <Button variant="secondary" onClick={() => setShowForm(false)}>
              Annuler
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MainComponent;