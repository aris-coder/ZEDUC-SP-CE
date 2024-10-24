import React, { useState } from 'react';
import ReclamationTable from './Tableau3'; // Tableau des Reclamations
import PopoverForm from './Formulaire3'; // Formulaire en popover
import FooterComponent from '../acceuil/footerComponent';
import NavbarEtudiant from '../gestionpromotion/navbarEtudiant';


function GestionReclamation() {
  // Tableau des reclamations initial
  const [reclamations, setReclamations] = useState([
    {
      id: 1,
      nom: 'Mabou',
      commande: 'Eru',
      date: '10/10/2024',
      statut: 'important',
    },
    {
      id: 2,
      nom: 'Doe',
      commande: 'Poulet Pane',
      date: '12/09/2024',
      statut: 'Faible',
    },
    {
      id: 3,
      nom: 'Curie',
      commande: 'Okok Sale',
      date: '11/10/2024',
      statut: 'Negligeable',
    },
  ]);

  const [selectedReclamation, setSelectedReclamation] = useState(null); // La réclamation à modifier

  const handleAddOrUpdate = (reclamation) => {
    if (selectedReclamation) {
      // Modification d'une réclamation
      setReclamations((prevReclamations) =>
        prevReclamations.map((recl) =>
          recl.id === selectedReclamation.id ? { ...reclamation, id: recl.id } : recl
        )
      );
    } else {
      // Ajout d'une nouvelle réclamation
      setReclamations((prevReclamations) => [
        ...prevReclamations,
        { ...reclamation, id: prevReclamations.length + 1 },
      ]);
    }

    setSelectedReclamation(null); // Réinitialise la réclamation sélectionnée après modification/ajout
  };

  const modifyReclamation = (reclamation) => {
    setSelectedReclamation(reclamation); // Sélectionne la réclamation à modifier
  };

  const deleteReclamation = (id) => {
    setReclamations(reclamations.filter((reclamation) => reclamation.id !== id)); // Supprime la réclamation
  };

  return (
    <div>
      <NavbarEtudiant />
      <div
        style={{
          background: 'linear-gradient(180deg, #685F4C, #CFBD97)',
          minHeight: '100vh',
          padding: '20px',
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h1
            className="text-left"
            style={{ color: '#EDEDED', fontFamily: 'Times New Roman' }}
          >
            Liste des Réclamations
          </h1>

          <div className="text-end">
            {/* Le popover s'ouvre ici pour ajouter ou modifier */}
            <PopoverForm
              onAdd={handleAddOrUpdate}
              selectedReclamation={selectedReclamation} // Passe la réclamation sélectionnée au formulaire
            />
          </div>
        </div>

        {/* Tableau des réclamations */}
        <ReclamationTable
          reclamations={reclamations}
          onDelete={deleteReclamation}
          onModify={modifyReclamation} // Gère la modification
        />
      </div>
      <FooterComponent />
    </div>
  );
}

export default GestionReclamation;
