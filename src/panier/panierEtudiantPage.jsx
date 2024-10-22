import React from 'react';
import NavbarEtudiant from '../pagesEtudiant/navbarEtudiant';
import Panier from './panier';
import FooterComponent from '../acceuil/footerComponent';

const PanierEtudiantPage = () => {
  return (
    <>
      <NavbarEtudiant/>
      <Panier/>
      <FooterComponent/>
    </>
  );
};

export default PanierEtudiantPage;
