import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


const PopoverForm = ({ onAdd, selectedMenu }) => {
  const [showMenuModal, setShowMenuModal] = useState(false);  // État pour le modal (menu)

  // États pour le menu
  const [nomMenu, setNomMenu] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');
  const [statut, setStatut] = useState('');
  const [type, setType] = useState('');

  // Utilisation d'un effet pour pré-remplir les champs du menu si un menu est sélectionné
  useEffect(() => {
    if (selectedMenu) {
      setNomMenu(selectedMenu.nom);
      setDescription(selectedMenu.description);
      setPrix(selectedMenu.prix);
      setStatut(selectedMenu.statut);
      setType(selectedMenu.type);
      setShowMenuModal(true);  // Ouvre le modal en mode modification pour les menus
    }
  }, [selectedMenu]);

  const handleMenuSubmit = (e) => {
    e.preventDefault();

    // Création d'un objet Menu
    const menu = {
      nom: nomMenu,
      description,
      prix,
      statut,
      type,
      id: selectedMenu ? selectedMenu.id : Date.now() // Utilise l'ID existant si modification
    };

    // Appelle la fonction onAdd pour ajouter ou modifier le menu
    if (onAdd) {
      onAdd(menu);
    }

    // Réinitialise le formulaire après soumission
    resetMenuForm();
    setShowMenuModal(false);  // Ferme le modal après l'ajout ou la modification
  };

  const resetMenuForm = () => {
    setNomMenu('');
    setDescription('');
    setPrix('');
    setStatut('');
    setType('');
  };

  const handleMenuCancel = () => {
    resetMenuForm();             // Réinitialise le formulaire du menu
    setShowMenuModal(false);     // Ferme le modal du menu
  };

  return (
    <>
      {/* Image déclenchant l'ouverture du modal Menu */}
      <img
        src={process.env.PUBLIC_URL + "/assets/Male User.png"}
        alt="Add"
        style={{ width: '40px', cursor: 'pointer' }}
        onClick={() => setShowMenuModal(true)}  // Ouvre le modal Menu au clic
      />

      {/* Modal pour ajouter ou modifier un menu */}
      <Modal show={showMenuModal} onHide={handleMenuCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedMenu ? 'Modifier un Menu' : 'Ajouter un Menu'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleMenuSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                value={nomMenu}
                onChange={(e) => setNomMenu(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Prix</Form.Label>
              <Form.Control
                type="number"
                value={prix}
                onChange={(e) => setPrix(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Statut</Form.Label>
              <Form.Control
                type="text"
                value={statut}
                onChange={(e) => setStatut(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              />
            </Form.Group>        
            <div className="d-flex justify-content-between">
              <Button variant="secondary" onClick={handleMenuCancel}>
                Retour
              </Button>
              <div>
                <Button variant="light" onClick={handleMenuCancel} style={{ marginRight: '10px' }}>
                  Annuler
                </Button>
                <Button variant="success" type="submit">
                  {selectedMenu ? 'Modifier' : 'Ajouter'}
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
