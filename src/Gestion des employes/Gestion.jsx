import React, { useState } from 'react';
import EmployeTable from './Tableau'; // Tableau des employés
import PopoverForm from './Formulaire'; // Formulaire en popover
import NavbarEtudiant from '../gestionpromotion/navbarEtudiant';
import Footer from '../acceuil/footerComponent';
import HeaderEmployes from './HeadEmployes';


function GestionEmployes() {
  // Tableau d'employés initial
  const [employes, setEmployes] = useState([
    {
      id: 1,
      prenom: 'Lisa',
      nom: 'Mabou',
      email: 'lisa.mabou@2028.ucac-icam.com',
      telephone: '659474520',
      role: 'Gérant',
    },
    {
      id: 2,
      prenom: 'John',
      nom: 'Doe',
      email: 'john.doe@example.com',
      telephone: '123456789',
      role: 'Développeur',
    },
    {
      id: 3,
      prenom: 'Marie',
      nom: 'Curie',
      email: 'marie.curie@example.com',
      telephone: '987654321',
      role: 'Scientifique',
    },
  ]);

  const [selectedEmploye, setSelectedEmploye] = useState(null); // L'employé à modifier

  const handleAddOrUpdate = (employe) => {
    if (selectedEmploye) {
      // Modification d'un employé
      setEmployes((prevEmployes) =>
        prevEmployes.map((emp) => (emp.id === employe.id ? employe : emp))
      );
    } else {
      // Ajout d'un nouvel employé
      setEmployes([...employes, { ...employe, id: employes.length + 1 }]);
    }
    setSelectedEmploye(null); // Réinitialise l'employé sélectionné après modification/ajout
  };

  const modifyEmploye = (employe) => {
    setSelectedEmploye(employe); // Sélectionne l'employé à modifier
  };

  const deleteEmploye = (id) => {
    setEmployes(employes.filter((employe) => employe.id !== id)); // Supprime l'employé
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

        <div>
          <HeaderEmployes />
        </div>
        <div className="d-flex justify-content-between align-items-center mb-5">


          <h1
            className="text-left"
            style={{ color: '#EDEDED', fontFamily: 'Times New Roman' }}
          >
            Liste des employés
          </h1>

          <div className="text-end">
            {/* Le popover s'ouvre ici pour ajouter ou modifier */}
            <PopoverForm
              onAdd={handleAddOrUpdate}
              selectedEmploye={selectedEmploye} // Passe l'employé sélectionné au formulaire
            />
          </div>
        </div>

        {/* Tableau des employés */}
        <EmployeTable
          employes={employes}
          onDelete={deleteEmploye}
          onModify={modifyEmploye} // Gère la modification
        />
      </div>
      <Footer />
    </div>
  );
}

export default GestionEmployes;
