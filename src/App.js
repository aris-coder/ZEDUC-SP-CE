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

import AcceuilE from './Employer/AcceuilEmployer';
import Stats from './Employer/Statistiques';
import Consult from './Employer/ConsulterCommande';
import MiseJourM from './Employer/MiseAJourMenu';
import HistoriqueReclamation from './Employer/HistoriqueReclamations';
import AcceuilG from './Gerant/AcceuilGerant.jsx';
import GestionEmployes from './Gerant/Gestion.jsx';



function App() {
  return (

    <Router>
      <Routes>
        
        <Route path='/' element={<HomePage />} />
        
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/mot_de_passe_oubli' element={<MotDePasseOublie />} />
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/help' element={<HelpPage />}/>
        
        {/* <Route path='/' element={<AcceuilEtudiant />} /> */}
        <Route path='/acceuil_etudiant' element={<AcceuilEtudiant />} />
        <Route path='/reclamation' element={<ReclamationEtudiantPage />} />
        <Route path='/panier_etudiant_page' element={<PanierEtudiantPage />} />
        <Route path='/command_etudiant_page' element={<CommandeEtudiantPage />} />
        <Route path='/meilleurs_clients' element={<MeilleursClientsPage />} />
        <Route path='/profil_etudiant' element={<Profil />} />

        
        <Route path='/acceuil_employe' element={<AcceuilE/>}/>
        <Route path='/Stats' element={<Stats/>}/>
        <Route path='/Consult' element={<Consult/>}/>
        <Route path='/HistoriqueReclamation' element={<HistoriqueReclamation/>}/>
        <Route path='/MiseJourM' element={<MiseJourM/>}/>
        {/* <Route path='/' element={<AcceuilAdmin/>} />   */}

        {/* <Route path='/' element={<AcceuilG />} /> */}
        <Route path='/acceuil_gerant' element={<AcceuilG />} />
        <Route path='/gestion_employe' element={<GestionEmployes />} />

        <Route path='/acceuil_administrateur' element={<AcceuilG />} />
        <Route path='/gestion_administrateur' element={<GestionEmployes />} />
      
      </Routes>
    </Router>
  );
}

export default App;
