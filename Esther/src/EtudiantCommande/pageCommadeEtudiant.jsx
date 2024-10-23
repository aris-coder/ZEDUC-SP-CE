import React from 'react';
import NavbarEtudiant from '../pagesEtudiant/navbarEtudiant';
import HistoriqueCommande from './componentCommadeEtudiant';
import FooterComponent from '../acceuil/footerComponent';

const CommandeEtudiantPage = () => {
  return (
    <>
      <NavbarEtudiant/>
      <HistoriqueCommande/>
      <FooterComponent/>
    </>
  );
};

export default CommandeEtudiantPage;
