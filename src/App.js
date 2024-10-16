import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inscription from './authentification/inscription.jsx';
import Connexion from './authentification/connexion.jsx';
import MotDePasseOublie from './authentification/mot_de_passe_oubli.jsx';
import NavbarComponent from './acceuil/navbarComponent.jsx';
import HomePage from './acceuil/homePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/inscription' element={<Inscription />} />
        <Route path='/connexion' element={<Connexion />} />
        <Route path='/mot_de_passe_oubli' element={<MotDePasseOublie />} />
      </Routes>
    </Router>
  );
}

export default App;
