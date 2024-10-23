// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GestionEmployes from './components/Gestion des employes/Gestion';
import GestionMenu from './components/Gestion des Menu/Gestion1';
import GestionPromotion from './components/Promotions/Gestion2';
import GestionReclamations from './components/Reclamations/Gestion3';
import Navbar from './components/Gestion des employes/Entete';
// Si tu veux utiliser la barre de navigation d'un autre fichier :
// import Navbar from './components/Gestion empl gerant/Barre navigation';

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* Définition des routes */}
        <Routes>
          <Route path="/employes" element={<GestionEmployes />} />
          <Route path="/menu" element={<GestionMenu />} />
          <Route path="/reclamations" element={<GestionReclamations />} />
          <Route path="/promotions" element={<GestionPromotion />} />
          {/* Ajoute d'autres routes si nécessaire */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
