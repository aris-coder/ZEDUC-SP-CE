import React from 'react';
import NavbarEtudiant from '../pagesEtudiant/navbarEtudiant';
import Clients from './client';
import FooterComponent from '../acceuil/footerComponent';

const MeilleursClientsPage = () => {
  return (
    <>
      <NavbarEtudiant/>
      <Clients/>
      <FooterComponent/>
    </>
  );
};

export default MeilleursClientsPage;
