import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inscription from './authentification/inscription.jsx';
import Connexion from './authentification/connexion.jsx';
import MotDePasseOublie from './authentification/mot_de_passe_oubli.jsx';
import HomePage from './acceuil/homePage.jsx';
import AboutPage from './informations/aPropos.jsx';
import HelpPage from './informations/aide.jsx';
import NavbarEtudiant from './pagesEtudiant/navbarEtudiant.jsx';

function App() {
  return (
    <NavbarEtudiant/>
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<HomePage />} />
    //     <Route path='/inscription' element={<Inscription />} />
    //     <Route path='/connexion' element={<Connexion />} />
    //     <Route path='/mot_de_passe_oubli' element={<MotDePasseOublie />} />
    //     <Route path='/about' element={<AboutPage />}/>
    //     <Route path='/help' element={<HelpPage />}/>
    //   </Routes>
    // </Router>
  );
}

export default App;
