import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const PopoverForm = ({ onAdd, selectedEmploye }) => {
  const [showModal, setShowModal] = useState(false);  // Variable d'état pour contrôler le modal
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [role, setRole] = useState('Gerant'); // Valeur par défaut

  // Utilisation d'un effet pour pré-remplir les champs si un employé est sélectionné
  useEffect(() => {
    if (selectedEmploye) {
      setPrenom(selectedEmploye.prenom);
      setNom(selectedEmploye.nom);
      setEmail(selectedEmploye.email);
      setTelephone(selectedEmploye.telephone);
      setRole(selectedEmploye.role);
      setShowModal(true);  // Ouvre le modal en mode modification
    }
  }, [selectedEmploye]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Création d'un objet employé
    const employe = {
      prenom,
      nom,
      email,
      telephone,
      role,
      id: selectedEmploye ? selectedEmploye.id : Date.now() // Utilise l'ID existant si modification
    };

    // Appelle la fonction onAdd pour ajouter ou modifier l'employé
    if (onAdd) {
      onAdd(employe);
    }

    // Réinitialise le formulaire après soumission
    resetForm();
    setShowModal(false);  // Ferme le modal après l'ajout ou la modification
  };

  const resetForm = () => {
    setPrenom('');
    setNom('');
    setEmail('');
    setTelephone('');
    setRole('Gerant');
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
          <Modal.Title>{selectedEmploye ? 'Modifier un Employé' : 'Ajouter un Employé'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Rôle</Form.Label>
              <Form.Select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="Gerant">Gérant</option>
                <option value="Employe">Employé</option>
                <option value="Administrateur">Administrateur</option>
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
                  {selectedEmploye ? 'Modifier' : 'Ajouter'}
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
