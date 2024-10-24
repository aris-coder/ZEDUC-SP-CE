import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import HeaderEtudiant from '../pagesEtudiant/headerEtudiant';

const HistoriqueCommande = () => {
  const [showVoirReponse, setShowVoirReponse] = useState(false);
  const [selectedReclamation, setSelectedReclamation] = useState(null);

  // Réclamations avec les plats inclus et détails de livraison
  const reclamations = [
    {
      Qt: 3,
      idCommande: "CMD001",
      type: "emporter",
      dateCommande: "2024-10-22",
      statut: "en attente",
      paiement: "points de fidélité",
      plats: [
        { nom: "dg", prix: 2500, quantite: 2 },
        { nom: "kok", prix: 1000, quantite: 1 }
      ]
    },
    {
      Qt: 5,
      idCommande: "CMD003",
      type: "livré",
      dateCommande: "2024-10-22",
      statut: "validé",
      paiement: "orange money",
      dateLivraison: "2024-10-23",
      heureLivraison: "14:00",
      adresseLivraison: "123 rue Exemple, Ville, Pays",
      plats: [
        { nom: "ndole", prix: 1000, quantite: 1 },
        { nom: "eru", prix: 1500, quantite: 2 }
      ]
    },
    {
      Qt: 3,
      idCommande: "CMD007",
      type: "emporter",
      dateCommande: "2024-10-22",
      statut: "expiré",
      paiement: "paypal",
      plats: [
        { nom: "poulet pané", prix: 2000, quantite: 2 },
        { nom: "pilé pomme", prix: 100, quantite: 1 }
      ]
    }
  ];

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
    width: '100%',
  };

  return (
    <div style={pageStyle}>
      <HeaderEtudiant />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '140px', marginBottom: '20px', maxWidth: '1000px', width: '100%', margin: '0 auto', color: 'white' }}>
        <h2>Historique de mes commandes</h2>
      </div>

      <div style={tableContainerStyle}>
        <Table striped bordered hover style={{ Width: '100%' }}>
          <thead>
            <tr>
              <th>ID de la commande</th>
              <th>Type de la commande</th>
              <th>Date de la commande</th>
              <th>Statut de la commande</th>
              <th>Mode de paiement</th>
              <th>Quantité</th>
            </tr>
          </thead>
          <tbody>
            {reclamations.map((reclamation) => (
              <tr key={reclamation.idCommande} onClick={() => handleShowVoirReponse(reclamation)}>
                <td>{reclamation.idCommande}</td>
                <td>{reclamation.type}</td>
                <td>{reclamation.dateCommande}</td>
                <td>{reclamation.statut}</td>
                <td>{reclamation.paiement}</td>
                <td>{reclamation.Qt}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={showVoirReponse} onHide={handleCloseVoirReponse}>
        <Modal.Header closeButton>
          <Modal.Title>Détail de la commande</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedReclamation && (
            <>
              <p><strong>ID de la commande:</strong> {selectedReclamation.idCommande}</p>
              <p><strong>Date:</strong> {selectedReclamation.dateCommande}</p>
              <p><strong>Statut:</strong> {selectedReclamation.statut}</p>
              <p><strong>Mode de paiement:</strong> {selectedReclamation.paiement}</p>
              <p><strong>Quantité totale:</strong> {selectedReclamation.Qt}</p>

              {/* Affichage des plats commandés */}
              <h5>Liste des plats commandés :</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Nom du plat</th>
                    <th>Prix unitaire</th>
                    <th>Quantité</th>
                    <th>Prix total</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedReclamation.plats.map((plat, index) => (
                    <tr key={index}>
                      <td>{plat.nom}</td>
                      <td>{plat.prix} FCFA</td>
                      <td>{plat.quantite}</td>
                      <td>{plat.prix * plat.quantite} FCFA</td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              {/* Calcul du montant total */}
              <p><strong>Montant total de la commande:</strong> {
                selectedReclamation.plats.reduce((total, plat) => total + (plat.prix * plat.quantite), 0)
              } FCFA</p>

              {/* Affichage des détails de livraison si la commande est livrée */}
              {selectedReclamation.type === "livré" && (
                <>
                  <h5>Détails de livraison :</h5>
                  <p><strong>Date de livraison:</strong> {selectedReclamation.dateLivraison}</p>
                  <p><strong>Heure de livraison:</strong> {selectedReclamation.heureLivraison}</p>
                  <p><strong>Adresse de livraison:</strong> {selectedReclamation.adresseLivraison}</p>
                </>
              )}
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

export default HistoriqueCommande;
