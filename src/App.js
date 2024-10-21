import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inscription from './authentification/inscription.jsx';
import Connexion from './authentification/connexion.jsx';
import MotDePasseOublie from './authentification/mot_de_passe_oubli.jsx';
import HomePage from './acceuil/homePage.jsx';
import AboutPage from './informations/aPropos.jsx';
import HelpPage from './informations/aide.jsx';
import AcceuilEtudiant from './pagesEtudiant/acceuilEtudiant.jsx';
// import NavbarEtudiant from './pagesEtudiant/navbarEtudiant.jsx';
// import HeaderEtudiant from './pagesEtudiant/headerEtudiant.jsx';
// import FooterComponent from './acceuil/footerComponent.jsx';
// import MenuDuJour from './pagesEtudiant/menuJour.jsx';

function App() {
  return (
    // <>
    //   <AcceuilEtudiant/>
    // </>
    <Router>
      <Routes>
        
        <Route path='/' element={<HomePage />} />
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/mot_de_passe_oubli' element={<MotDePasseOublie />} />
        <Route path='/about' element={<AboutPage />}/>
        <Route path='/help' element={<HelpPage />}/>
        
        <Route path='/acceuilEtudiant' element={<AcceuilEtudiant />} />
      </Routes>
    </Router>
  );
}

export default App;
