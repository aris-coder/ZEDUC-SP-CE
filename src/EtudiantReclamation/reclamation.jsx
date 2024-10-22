import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import AddPropertie from '../images/Add_properties.png'
import HeaderEtudiant from '../pagesEtudiant/headerEtudiant';

const HistoriqueReclamation = () => {
  const [showAddReclamation, setShowAddReclamation] = useState(false);
  const [showVoirReponse, setShowVoirReponse] = useState(false);
  const [selectedReclamation, setSelectedReclamation] = useState(null);

  const reclamations = [
    { id: 10, status: 'Répondu', date: '14/10/2024', texte: 'Texte de la réclamation' },
    { id: 5, status: 'En attente', date: '15/12/2024', texte: 'Texte de la réclamation' },
    { id: 1, status: 'Répondu', date: '14/10/2024', texte: 'Texte de la réclamation' },
    { id: 2, status: 'En attente', date: '15/12/2024', texte: 'Texte de la réclamation' },
    { id: 7, status: 'En attente', date: '15/12/2024', texte: 'Texte de la réclamation' },
    { id: 4, status: 'En attente', date: '15/12/2024', texte: 'Texte de la réclamation' },
    
  ];

  const handleShowAddReclamation = () => setShowAddReclamation(true);
  const handleCloseAddReclamation = () => setShowAddReclamation(false);

  const handleShowVoirReponse = (reclamation) => {
    setSelectedReclamation(reclamation);
    setShowVoirReponse(true);
  };
  const handleCloseVoirReponse = () => setShowVoirReponse(false);


    const pageStyle = {
      background: 'linear-gradient(180deg, rgba(14, 14, 14, 1) 0%, rgba(207, 189, 151, 1) 100%)',
        minHeight: '100vh', 
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'space-between',
        alignItems: 'center',
        
    };

    const tableContainerStyle = {
        maxWidth: '1000px',
        margin: '20px auto', 
        paddingBottom: '40px', 
        width: '100%'
        
    };

  return (
    <div style={pageStyle}>

      <HeaderEtudiant/>
      
        {/* Conteneur pour aligner h2 et le bouton sur la même ligne */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  marginTop:'120px',marginBottom:'20px', maxWidth: '1000px', width: '100%', margin: '0 auto', color: 'white'}}>
            <h2>Historique des réclamations</h2>
            <Button onClick={handleShowAddReclamation}  style={{ backgroundColor: 'transparent', border: 'none' }}>
                <img src={AddPropertie} alt="Add Icon" style={{ width: '50px', height: '50px' }} />
            </Button>
        </div>

        
        {/* Tableau historique des réclamations */}
        <div style={tableContainerStyle}>
            <Table striped bordered hover style={{ Width: '100%' }}>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Date d'envoie</th>
                        <th>Texte réclamation</th>
                    </tr>
                </thead>
                <tbody>
                {reclamations.map((reclamation) => (
                    <tr key={reclamation.id} onClick={() => handleShowVoirReponse(reclamation)} >
                    <td>{reclamation.status}</td>
                    <td>{reclamation.date}</td>
                    <td>{reclamation.texte}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
        

      {/* Modal pour ajouter une réclamation */}
      <Modal show={showAddReclamation} onHide={handleCloseAddReclamation}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter une réclamation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="idCommande">
              <Form.Label>ID Commande</Form.Label>
              <Form.Control type="text" placeholder="Entrez l'ID de commande" />
            </Form.Group>

            <Form.Group controlId="typeCommande" className="mt-3">
              <Form.Label>Type de commande</Form.Label>
              <Form.Control as="select">
                <option>Type 1</option>
                <option>Type 2</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="commentaire" className="mt-3">
              <Form.Label>Commentaire</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Entrez un commentaire" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseAddReclamation}>Soumettre</Button>
          <Button variant="danger" onClick={handleCloseAddReclamation}>Annuler</Button>
        </Modal.Footer>
      </Modal>

      {/* Modal pour voir la réponse */}
      <Modal show={showVoirReponse} onHide={handleCloseVoirReponse}>
        <Modal.Header closeButton>
          <Modal.Title>Réponse à la réclamation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedReclamation && (
            <>
              <p><strong>Date:</strong> {selectedReclamation.date}</p>
              <p><strong>Réponse:</strong> Réponse à la réclamation pour {selectedReclamation.texte}</p>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseVoirReponse}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HistoriqueReclamation;
