import React from 'react';
import image1 from '../images/dg.png';
import image2 from '../images/pouletpanee1.png';
import './styles/styleEtudiant';

const HeaderEtudiant = () => {
  return (
    <header className="header-etudiant"  >
      <div className="container header-container position-relative">
        <img src={image1} alt="Dish 1" className="header-image rounded-circle image1 position-absolute" />

        <div className="header-text text-center">
          <h1 className="header-title">ZeDuc Sp@ce</h1>
          <h2 className="header-subtitle">Votre espace de goût et de détente</h2>
          <p className="header-description">
            Savourez chaque moment, plongez dans des délices uniques avec une vue imprenable sur la Dibamba et une ambiance à savourer.
          </p>
        </div>
        <img src={image2} alt="Dish 2" className="header-image rounded-circle image2 position-absolute" />
      </div>
    </header>
  );
};

export default HeaderEtudiant;
