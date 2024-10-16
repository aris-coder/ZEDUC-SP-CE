import React, { useEffect, useState } from 'react';
import Style from './style';

const HeaderComponent = () => {
  const [fontSizeWelcome, setFontSizeWelcome] = useState('50px');
  const [fontSizeDescription, setFontSizeDescription] = useState('25px');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { 
        setFontSizeWelcome('40px');
        setFontSizeDescription('20px');
      } else {
        setFontSizeWelcome('50px');
        setFontSizeDescription('25px');
      }
    };

    handleResize(); // Appel initial
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize); // Nettoyage
  }, []);

  return (
    <>
      <Style />
      <header className="header-custom">
        <div className="container mt-5" style={{ fontFamily: 'Milonga, sans-serif', color: 'white' }}>
          <div className="row">
            <div className="col-6 text-center"> 
              <h1 style={{ fontSize: fontSizeWelcome, margin: 0 }}>Bienvenue sur Mon Miam Miam !!</h1>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6 text-center"> 
              <p style={{ fontSize: fontSizeDescription, margin: 0 }}>Un lieu où saveurs et détente se mêlent pour des expériences culinaires uniques, rien que pour vous.</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderComponent;
