import React, { useState } from 'react';
import MenuTable from './Tableau1';
import HeaderSection from './Section.';
import Footer from './Pied de page 1';
import PopoverForm from './Formulaire.'; // Assurez-vous que vous utilisez CombinedPopoverForm

function GestionMenus() {
  const [Menus, setMenus] = useState([
    {
      id: 1,
      nom: 'Okok',
      Description: 'Okok sucre avec du manioc ou baton',
      Prix: '1500',
      Statut: 'Meilleur',
      Type: 'Sud',
      // Ajoute un champ "details" pour les informations employé
    },
    {
      id: 2,
      nom: 'Pile Plantain',
      Description: 'Banane-plantain;huile rouge;sel',
      Prix: '1000',
      Statut: 'Prenium',
      Type: 'Bamilike',
       // Champ détails vide
    },
    {
      id: 3,
      nom: 'Eru',
      Description: 'Beaucoup d obstacles',
      Prix: '1500',
      Statut: 'Standard',
      Type: 'Bassa a',
     
    },
  ]);

  const [selectedMenu, setSelectedMenu] = useState(null); // Menu sélectionné

  const handleAddOrUpdate = (Menu, details) => {
    if (selectedMenu) {
      // Si c'est une modification
      setMenus((prevMenus) =>
        prevMenus.map((menu) =>
          menu.id === Menu.id ? { ...Menu, details } : menu
        )
      );
    } else {
      // Si c'est un ajout
      setMenus([...Menus, { ...Menu, details, id: Menus.length + 1 }]);
    }
    setSelectedMenu(null);
  };

  const modifyMenu = (Menu) => {
    setSelectedMenu(Menu);
  };

  const deleteMenu = (id) => {
    setMenus(Menus.filter((Menu) => Menu.id !== id));
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
            Menus
          </h1>

          <div className="text-end">
            {/* Popover pour ajouter ou modifier */}
            <PopoverForm
              onAdd={handleAddOrUpdate}
              selectedMenu={selectedMenu} // Passe le menu sélectionné
            />
          </div>
        </div>

        {/* Tableau des menus */}
        <MenuTable
          Menus={Menus}
          onDelete={deleteMenu}
          onModify={modifyMenu} // Gère la modification
        />
      </div>
      <Footer />
    </div>
  );
}

export default GestionMenus;
