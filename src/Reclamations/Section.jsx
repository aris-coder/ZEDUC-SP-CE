// src/components/HeaderSection.js
import React from 'react';
import './Section.css'; // Assurez-vous d'inclure ce fichier CSS

function HeaderSection() {
    
  return (
    <div className="header-section ">
      {/* Image de poulet à gauche */}
        <img
          src={process.env.PUBLIC_URL + '/assets/image1.png'}
          alt="Poulet Gauche"/>
          
          <h1 className="text-center mb-5" style={{ color: '#EDEDED', fontFamily: 'Times New Roman' }}>Suivi des Reclamations</h1>


      {/* Image de poulet à droite */}
        <img
          src={process.env.PUBLIC_URL + '/assets/image2.png'}
          alt="Poulet Droite"/>
    </div>
  );
}

export default HeaderSection;
