// src/App.js
import React from 'react';
import './App.css';
import Navbar from './Getion des employes/Entete'; 
import GestionEmployes from './Getion des employes/Gestion'; 
import Footer from './Getion des employes/Pied de page'; 


function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Navbar />
      <div style={{ marginTop: '80px', flex: '1' }}>
        <GestionEmployes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
