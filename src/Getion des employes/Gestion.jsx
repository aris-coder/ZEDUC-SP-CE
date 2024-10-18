// src/components/GestionEmployes.js
import React, { useState } from 'react';
import EmployeForm from './Formulaire';
import EmployeTable from './Tableau';
import HeaderSection from './Section';

function GestionEmployes() {
  const [employes, setEmployes] = useState([]);

  const addEmploye = (newEmploye) => {
    setEmployes([...employes, newEmploye]);
  };

  const ModifyEmploye = (id) => {
    console.log(`Modifier employé avec ID: ${id}`);
  };

  const deleteEmploye = (id) => {
    setEmployes(employes.filter((employe) => employe.id !== id));
  };

  return (
    <div>
    {/* Utilisation du composant HeaderSection */}
    <HeaderSection /> 

<div style={{ background: 'linear-gradient(180deg, #685F4C, #CFBD97)', minHeight: '100vh', padding: '20px' }}>
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-5" style={{ color: '#EDEDED', fontFamily: 'Times New Roman' }}>Gestion des Employés</h1>
      <EmployeForm onAdd={addEmploye} />
      <EmployeTable employes={employes} onDelete={deleteEmploye} onModify={ModifyEmploye} />
    </div>
    </div>
    </div>
  );
}

export default GestionEmployes;
