import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inscription from './authentification/inscription.jsx';
import Connexion from './authentification/connexion.jsx';
import MotDePasseOublie from './authentification/mot_de_passe_oubli.jsx';
import AboutPage from './informations/aPropos.jsx';
import HelpPage from './informations/aide.jsx';
import AcceuilEtudiant from './pagesEtudiant/acceuilEtudiant.jsx';
import ReclamationEtudiantPage from './EtudiantReclamation/pageReclamationEtudiant.jsx';
import PanierEtudiantPage from './panier/panierEtudiantPage.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (

    <Router>
      <Routes>
        
        {/* <Route path='/' element={<HomePage />} />
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/mot_de_passe_oubli' element={<MotDePasseOublie />} />
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/help' element={<HelpPage />}/>
        
        <Route path='/acceuil_etudiant' element={<AcceuilEtudiant />} />
        <Route path='/Reclamation' element={<ReclamationEtudiantPage />} /> */}
        <Route path='/' element={<PanierEtudiantPage />} />

      </Routes>
    </Router>
  );
}

export default App;
