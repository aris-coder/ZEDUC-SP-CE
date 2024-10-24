import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './acceuil/homePage.jsx';
import Inscription from './authentification/inscription.jsx';
import Connexion from './authentification/connexion.jsx';
import MotDePasseOublie from './authentification/mot_de_passe_oubli.jsx';
import AboutPage from './informations/aPropos.jsx';
import HelpPage from './informations/aide.jsx';
import AcceuilEtudiant from './pagesEtudiant/acceuilEtudiant.jsx';
import ReclamationEtudiantPage from './EtudiantReclamation/pageReclamationEtudiant.jsx';
import PanierEtudiantPage from './panier/panierEtudiantPage.jsx';
import CommandeEtudiantPage from './EtudiantCommande/pageCommadeEtudiant.jsx';
import MeilleursClientsPage from './meilleurClients/pageMeilleursClients.jsx';
import Profil from './profil/PageProfileBody.jsx';
import GestionEmployes from './Gestion des employes/Gestion.jsx';
import GestionMenus from './Gestion des Menu/Gestion1.jsx';
import Promotion from './gestionpromotion/acceuilPromotions.jsx';
import HeadReclamations from './Reclamations/HeadReclamation.jsx';
import GestionReclamation from './Reclamations/Gestion3.jsx';
import AcceuilE from './Employer/AcceuilEmployer.jsx';
import PageProfileBody from './Employer/PageProfileBody.jsx';
import MiseJourM from './Employer/MiseAJourMenu.jsx';
import Consult from './Employer/ConsulterCommande.jsx';
import InterfaceCommande from './Employer/InterfaceCommande.jsx';
import Stats from './Employer/Statistiques.jsx';
import HistoriqueReclamation from './Employer/HistoriqueReclamations.jsx';
import InterfaceReclamations from './Employer/InterfaceReclamations.jsx';
import AcceuilG from './Gerant/AcceuilGerant.jsx';
import GestionEmployee from './gestionEmploye/gestionEmploye.jsx';



function App() {
  return (

    <Router>
      <Routes>


        {/* Pages gerant */}

        {/* <Route path='/' element={<AcceuilG />} />
        <Route path='/gestion' element={<GestionEmployee />} />
        <Route path='/acceuil' element={<AcceuilG />} />
        <Route path='/stats2' element={<Stats />} />
        <Route path='/historique_reclamations2' element={<HistoriqueReclamation />} />
        <Route path='/consult_commande2' element={<Consult />} /> */}




        {/* Page Admin */}

        {/* <Route path='/' element={<AcceuilE />} />
        <Route path='/acceuil' element={<AcceuilE />} />
        <Route path='/interface_reclamations' element={<InterfaceReclamations />} />
        <Route path='/historique_reclamations' element={<HistoriqueReclamation />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/interface_commande' element={<InterfaceCommande />} />
        <Route path='/consult_commande' element={<Consult />} />
        <Route path='/mise_a_jour' element={<MiseJourM />} />
        <Route path='/page_profil_body' element={<PageProfileBody />} /> */}



        {/* Page employes */}

        {/* <Route path='/' element={<AcceuilAdmin />} />
        <Route path='/gestion_menu' element={<GestionMenus />} />
        <Route path='/reclamation' element={<GestionReclamation />} />
        <Route path='/promotions' element={<Promotion />} />
        <Route path='/gestion_employes' element={<GestionEmployes />} /> */}




        {/* Connexion et inscription */}

        {/* <Route path='/' element={<HomePage />} />
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/mot_de_passe_oublie' element={<MotDePasseOublie />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/help' element={<HelpPage />} /> */}




        {/* Pages Etudiant */}

        {/* 
        <Route path='/' element={<AcceuilEtudiant />} />
        <Route path='/acceuil_etudiant' element={<AcceuilEtudiant />} />
        <Route path='/reclamation' element={<ReclamationEtudiantPage />} />
        <Route path='/panier_etudiant_page' element={<PanierEtudiantPage />} />
        <Route path='/command_etudiant_page' element={<CommandeEtudiantPage />} />
        <Route path='/meilleurs_clients' element={<MeilleursClientsPage />} />
        <Route path='/profil_etudiant' element={<Profil />} /> */}
      </Routes>
    </Router >
  );
}

export default App;
