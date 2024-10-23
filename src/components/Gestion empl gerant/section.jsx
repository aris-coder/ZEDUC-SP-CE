// src/components/HeaderSection.js
import React from 'react';
import './section.css'; // Assurez-vous d'inclure ce fichier CSS

function HeaderSection() {
    
  return (
    <div className="header-section  d-flex justify-content-between align-items-center">
      {/* Image de poulet à gauche */}
        <img
          src={process.env.PUBLIC_URL + '/assets/image1.png'}
          alt="Poulet Gauche"
          className="header-image"/>
 <div className="text-center">
 {/* Titre principal */}
          <h1 className=" mb-2" style={{ color: '#EDEDED', fontFamily: 'Milonga' }}>ZeDuc Sp@ce</h1>

{/* Titre secondaire */}
          <h2 className=" mb-5" style={{ color: '#EDEDED', fontFamily: 'Times New Roman' }}>Gestion des Employés</h2>
</div>
      {/* Image de poulet à droite */}
        <img
          src={process.env.PUBLIC_URL + '/assets/image2.png'}
          alt="Poulet Droite"/>
    </div>
  );
}

export default HeaderSection;
