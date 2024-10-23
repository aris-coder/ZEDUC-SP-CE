// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import InterfaceReclamation from './components/projet/Pages_Employés/InterfaceReclamation/InterfaceReclamation';
import PageProfil from './components/projet/Pages_Employés/profilEmploye/pageProfile'; // Importez le composant principal
import HistoriqueReclamation from './components/projet/pages_gérant/Historique_des_reclamations/HistoriqueReclamation';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HistoriqueReclamation />} />
                <Route path="/profil" element={<PageProfil />} /> {/* Utilisez PageProfil ici */}
                <Route path="/InterfaceReclamation" element={<InterfaceReclamation />} />
            </Routes>
        </Router>
    );
};

export default App;
