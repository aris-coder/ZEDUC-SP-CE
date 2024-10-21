// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InterfaceCommande from './components/projet/InterfaceCommande/InterfaceCommande';
import InterfaceReclamation from './components/projet/InterfaceReclamation/InterfaceReclamation';
import PageProfil from './components/projet/profilEmploye/pageProfile'; // Importez le composant principal

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<InterfaceReclamation />} />
                <Route path="/profil" element={<PageProfil />} /> {/* Utilisez PageProfil ici */}
            </Routes>
        </Router>
    );
};

export default App;
