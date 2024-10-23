import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const PopoverForm = ({ onAdd, selectedPromotion }) => {
  const [showModal, setShowModal] = useState(false);  // Variable d'état pour contrôler le modal
  const [Nom, setNom] = useState('');
  const [Commande, setCommande] = useState('');
  const [Date, setDate] = useState('');
  const [Promotion, setPromotion] = useState('Informatique'); // Valeur par défaut

  // Utilisation d'un effet pour pré-remplir les champs si un employé est sélectionné
  useEffect(() => {
    if (selectedPromotion) {
      setNom(selectedPromotion.nom);
      setCommande(selectedPromotion.Commande);
      setDate(selectedPromotion.Date);
      setPromotion(selectedPromotion.Promotion);
      setShowModal(true);  // Ouvre le modal en mode modification
    }
  }, [selectedPromotion]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Création d'un objet employé
    const promotion = {
      Nom,
      Commande,
      Date,
      Promotion,
      id: selectedPromotion ? selectedPromotion.id : Date.now() // Utilise l'ID existant si modification
    };

    // Appelle la fonction onAdd pour ajouter ou modifier l'employé
    if (onAdd) {
      onAdd(promotion);
    }

    // Réinitialise le formulaire après soumission
    resetForm();
    setShowModal(false);  // Ferme le modal après l'ajout ou la modification
  };

  const resetForm = () => {
    setNom('');
    setCommande('');
    setDate('');
    setPromotion('informatique');
  };

  const handleCancel = () => {
    resetForm();            // Réinitialise le formulaire
    setShowModal(false);    // Ferme le modal lorsque l'utilisateur clique sur "Annuler"
  };

  return (
    <>
      {/* Image déclenchant l'ouverture du modal */}
      <img
        src={process.env.PUBLIC_URL + "/assets/Male User.png"}
        alt="Add"
        style={{ width: '40px', cursor: 'pointer' }}
        onClick={() => setShowModal(true)}  // Ouvre le modal au clic
      />

      {/* Modal pour ajouter ou modifier un employé */}
      <Modal show={showModal} onHide={handleCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPromotion ? 'Modifier une Promotion' : 'Ajouter une Promotion'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                value={Nom}
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Commande</Form.Label>
              <Form.Control
                type="text"
                value={Commande}
                onChange={(e) => setCommande(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="Date"
                value={Date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Promotion</Form.Label>
              <Form.Select
                value={Promotion}
                onChange={(e) => setPromotion(e.target.value)}
               >
                <option value="X">Informatique</option>
                <option value="O">Parcours Ouvert</option>
                <option value="I & A">Generalistes</option>
              </Form.Select>
            </Form.Group>
            <div className="d-flex justify-content-between">
              <Button variant="secondary" onClick={handleCancel}>
                Retour
              </Button>
              <div>
                <Button variant="light" onClick={handleCancel} style={{ marginRight: '10px' }}>
                  Annuler
                </Button>
                <Button variant="success" type="submit">
                  {selectedPromotion ? 'Modifier' : 'Ajouter'}
                </Button>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PopoverForm;
