import React, { useState } from 'react';
import PromotionTable from './Tableau2'; // Tableau desa promotions
import HeaderSection from './Section'; // Section d'en-tête
import Footer from './Pied de page 2'; // Pied de page
import PopoverForm from './Formulaire2'; // Formulaire en popover

function GestionPromotion() {
  // Tableau da promotions initial
  const [Promotion, setPromotion] = useState([
    {
      id: 1,
      nom: 'Mabou',
      Commande: 'Eru',
      Date: '10/10/2024',
      Promotion: 'Informatique',
    },
    {
      id: 2,
      nom: 'Doe',
      Commande: 'Poulet Pane',
      Date: '12/09/2024',
      Promotion: 'Generaliste',
    },
    {
      id: 3,
      nom: 'Curie',
      Commande: 'Okok Sale',
      Date: '11/10/2024',
      Promotion: 'Parcours Ouvert',
    },
  ]);

  const [selectedPromotion, setSelectedPromotion] = useState(null); // La promotion à modifier

  const handleAddOrUpdate = (promotion) => {
    if (selectedPromotion) {
      // Modification d'una promotion
      setPromotion((prevPromotion) =>
        prevPromotion.map((prom) => (prom.id === Promotion.id ? Promotion : prom))
      );
    } else {
      // Ajout d'un nouvela promotion
      setPromotion([...promotion, { ...promotion, id: promotion.length + 1 }]);

    }
    setSelectedPromotion(null); // Réinitialise la promotion sélectionné après modification/ajout
  };

  const modifyPromotion = (promotion) => {
    setSelectedPromotion(promotion); // Sélectionne la promotion à modifier
  };

  const deletePromotion = (id) => {
    setPromotion(Promotion.filter((promotion) => promotion.id !== id)); // Supprime la promotion
  };

  return (
    <div>
      <HeaderSection />
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
            Liste des Promotionnaires
          </h1>

          <div className="text-end">
            {/* Le popover s'ouvre ici pour ajouter ou modifier */}
            <PopoverForm
              onAdd={handleAddOrUpdate}
              selectedPromotion={selectedPromotion} // Passe la promotion sélectionné au formulaire
            />
          </div>
        </div>

        {/* Tableau desa promotions */}
        <PromotionTable
          promotions={Promotion}
          onDelete={deletePromotion}
          onModify={modifyPromotion} // Gère la modification
        />
      </div>
      <Footer />
    </div>
  );
}

export default GestionPromotion;
