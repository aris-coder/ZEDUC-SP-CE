// HeroSection.js
import React from 'react';
import NavbarComponent from './navbarComponent';
import HeaderComponent from './headerComponent';
import backgroundImage from '../images/imageacceuil.png';

const HeroSection = () => {
  const heroSectionStyle = {
    background: `url(${backgroundImage}) no-repeat center center fixed`,
    backgroundSize: 'cover',  
    height: '100vh', 
    position: 'relative', 
    display: 'flex',  
    flexDirection: 'column',  
  };

  return (
    <div style={heroSectionStyle}>
      <NavbarComponent />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeaderComponent />
      </div>
    </div>
  );
};

export default HeroSection;
