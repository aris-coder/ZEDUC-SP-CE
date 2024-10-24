import React from 'react';
import NavbarEtudiant from '../pagesEtudiant/navbarEtudiant';
import HeaderEtudiant from '../pagesEtudiant/headerEtudiant';
import HistoriqueReclamation from './reclamation';
import FooterComponent from '../acceuil/footerComponent';

const ReclamationEtudiantPage = () => {
  return (
    <>
      <NavbarEtudiant/>
      <HistoriqueReclamation/>
      <FooterComponent/>
    </>
  );
};

export default ReclamationEtudiantPage;
