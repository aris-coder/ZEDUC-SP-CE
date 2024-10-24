import React, { useState } from 'react';  
import { Modal, Button } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom'; 

const HelpPage = () => {
  const [show, setShow] = useState(true); 
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate(-1); 
  };

  return (
    <>

      <Modal show={show} onHide={handleClose} centered size="lg" style={{ background: 'linear-gradient(180deg, rgba(14, 14, 14, 1) 15%, rgba(207, 189, 151, 1) 100%)' }}>
        <Modal.Header closeButton>
          <Modal.Title>Centre d'Aide</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ maxHeight: 'calc(100vh - 210px)', overflowY: 'auto' }}>
            <h2>Questions Fréquemment Posées (FAQ)</h2>

            <h3>Comment puis-je commander en ligne ?</h3>
            <p>
            Pour commander en ligne, il vous suffit de vous inscrire ou de vous connecter à votre compte. Une fois connecté, vous pouvez parcourir notre menu, sélectionner les plats que vous souhaitez et passer votre commande.
            </p>

            <h3>Comment suivre ma commande ?</h3>
            <p>
            Après avoir passé une commande, vous pouvez suivre l’état de votre commande en temps réel dans la section "Mes commandes"
            </p>

            <h3>Quels sont les moyens de paiement acceptés ?</h3>
            <p>
            Nous acceptons les paiements par carte bancaire, les portefeuilles électroniques et les paiements en espèces à la livraison.
            </p>

            <h3>Comment puis-je annuler ou modifier ma commande ?</h3>
            <p>
            Vous pouvez annuler ou modifier votre commande tant qu’elle n’a pas encore été préparée. Pour ce faire, rendez-vous dans "Mes commandes" et sélectionnez l'option "Modifier" ou "Annuler".
            </p>

            <h3>Quelles sont vos heures d'ouverture ?</h3>
            <p>
            Nous sommes ouverts tous les jours (Lun-Ven: 16h et Sam-Dim: 13h). Vous pouvez passer vos commandes en ligne à tout moment pendant ces heures.
            </p>

            <h2>Assistance Client</h2>
            <p>
            Si vous rencontrez des problèmes avec votre commande ou si vous avez d'autres questions, n'hésitez pas à nous contacter via notre chat en ligne ou à appeler notre service client au +237 652690210.
            </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HelpPage;