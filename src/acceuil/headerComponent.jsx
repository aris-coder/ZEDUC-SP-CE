import React from 'react';
import Style from './style';

const HeaderComponent = () => {
  return (
    <>
        <Style/>
        <header className="header-custom">
            <h1>Bienvenue sur Mon Miam Miam!</h1>
            <p>Un lieu où saveurs et détente se mêlent pour des expériences culinaires uniques, rien que pour vous.</p>
        </header>
    </>
  );
}

export default HeaderComponent;
