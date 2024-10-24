import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap'; 
import { useNavigate } from 'react-router-dom'; 

const AboutPage = () => {
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
          <Modal.Title>À propos de Mon Miam Miam</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ maxHeight: 'calc(100vh - 210px)', overflowY: 'auto' }}>
          <p>Bienvenue chez Mon Miam Miam, le restaurant préféré des étudiants de l’institut UCAC-ICAM à Yansoki !</p>

          <h2>Notre Histoire</h2>
          <p>Situé au sommet de la Résidence la Terrasse, Mon Miam Miam est bien plus qu’un simple restaurant...</p>

          <h2>Pourquoi nous choisir ?</h2>
          <ul>
            <li><strong>Cuisine savoureuse</strong> : Nos plats sont préparés avec soin et passion...</li>
            <li><strong>Ambiance décontractée</strong> : Détendez-vous après une journée de cours avec un bon repas...</li>
            <li><strong>Lieu de rencontre et de partage</strong> : Mon Miam Miam est devenu le lieu incontournable...</li>
          </ul>

          <h2>Notre Mission</h2>
          <p>Notre mission est de fournir à nos clients non seulement un repas délicieux, mais aussi un moment de détente...</p>

          <h2>Un service moderne</h2>
          <ul>
            <li>Commander vos plats en ligne</li>
            <li>Suivre l’état de votre commande en temps réel</li>
            <li>Profiter de nos programmes de fidélité et de parrainage</li>
            <li>Découvrir nos promotions et événements exclusifs</li>
          </ul>

          <h2>Nous rejoindre</h2>
          <p>Que vous soyez étudiant, habitant ou simplement de passage, Mon Miam Miam vous ouvre ses portes pour un voyage culinaire...</p>
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

export default AboutPage;
