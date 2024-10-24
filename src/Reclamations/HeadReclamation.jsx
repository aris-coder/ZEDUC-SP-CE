import React from 'react';
import image1 from '../images/dg.png';
import image2 from '../images/pouletpanee1.png';
import './style';

const HeadReclamations = () => {
    return (
        <header className="header-etudiant"  >
            <div className="container header-container position-relative">
                <img src={image1} alt="Dish 1" className="header-image rounded-circle image1 position-absolute" />

                <div className="header-text text-center">
                    <h1 className="header-title">Gestion du Menu</h1>
                </div>
                <img src={image2} alt="Dish 2" className="header-image rounded-circle image2 position-absolute" />
            </div>

        </header>
    );
};

export default HeadReclamations;
