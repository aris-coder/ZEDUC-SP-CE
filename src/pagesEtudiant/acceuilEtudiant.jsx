import React from 'react';
import NavbarEtudiant from './navbarEtudiant';
import HeaderEtudiant from './headerEtudiant';
import MainComponent from './mainAcceuil';
import FooterComponent from '../acceuil/footerComponent';

const AcceuilEtudiant = () => {
  return (
    <>
      <NavbarEtudiant />
      <HeaderEtudiant />
      <MainComponent />
      <FooterComponent />
    </>
  );
};

export default AcceuilEtudiant;
