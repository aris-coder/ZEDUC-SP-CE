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

  const gradientStyle = {
    background: 'linear-gradient(0deg, rgba(14, 14, 14, 1) 10%, rgba(15, 14, 14, 0) 100%)',
    position: 'absolute',
    width: '100%',
    height: '150px',
    bottom: 0, 
    zIndex: 10, 
  };

  return (
    <div style={heroSectionStyle}>
      <NavbarComponent />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <HeaderComponent />
      </div>
      <div style={gradientStyle} /> 
    </div>
  );
};

export default HeroSection;
