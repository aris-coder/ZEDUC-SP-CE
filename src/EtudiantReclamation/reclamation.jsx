// import React from "react";
// import HeaderEtudiant from "../pagesEtudiant/headerEtudiant";

// function Reclamation() {
//     const pageStyle = {
//         background: 'linear-gradient(to top, #CFBD97, #69604D)',
//         minHeight: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'
//     };

//     return (
//         <div style={pageStyle}>
//             <HeaderEtudiant/>
//             <div className="container" style={{ background: "linear-gradient(to bottom, #CFBD97, #69604D)", padding: '30px', borderRadius: '10px', maxWidth: '600px', marginBottom: '15px', marginTop: '15px', width: '100%' }}>
//                 <div className="text-center mb-4">
//                     <label style={{ fontWeight: 'bold', fontSize: '24px', color: 'black' }}>Faire une Réclamation</label>
//                 </div>

//                 <div className="row mb-3">
//                     <div className="col-12 d-flex justify-content-between align-items-center">
//                         <label style={{ color: 'black', fontWeight: 'bold', flex: '1' }}>ID commande</label>
//                         <input placeholder='Veillez entrer le ID de votre commande' type="text" className="form-control" style={{ flex: '2', minWidth: '200px' }} />
//                     </div>
//                 </div>

//                 <div className="row mb-3">
//                     <div className="col-12 d-flex justify-content-between align-items-center">
//                         <label style={{ color: 'black', fontWeight: 'bold', flex: '1' }}>Type</label>
//                         <select className="form-control" style={{ flex: '2', minWidth: '200px' }}>
//                             <option value="">Nourriture</option>
//                             <option value="option1">Mange</option>
//                             <option value="option2">Dors</option>
//                             <option value="option3">Nourriture</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div className="row mb-4">
//                     <div className="col-12">
//                         <label style={{ color: 'black', fontWeight: 'bold' }}>Commentaire</label>
//                         <textarea placeholder='veillez entrer un commentaire' className="form-control" style={{ height: '150px', width: '100%' }} />
//                     </div>
//                 </div>

//                 <div className="row">
//                     <div className="col-12 d-flex justify-content-between">
//                         <button className="btn btn-success" style={{ width: '48%' }}>Soumettre</button>
//                         <button className="btn btn-danger" style={{ width: '48%' }}>Annuler</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Reclamation;

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
        background: 'linear-gradient(to top, #CFBD97, #69604D)',
        minHeight: '100vh', // Pour que le dégradé s'applique à toute la page
        display: 'flex',
        flexDirection: 'column', // Organiser les éléments verticalement
        justifyContent: 'space-between', // Séparer le contenu et le footer
        alignItems: 'center',
        
    };

    const tableContainerStyle = {
        maxWidth: '1000px',
        margin: '20px auto', 
        paddingBottom: '40px', 
        width: '100%'
        
    };
    // const customRow={
    //     .custom-row {
    //         background-color: #B9A986; /* Couleur personnalisée */
    //       }
          
    // }

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
