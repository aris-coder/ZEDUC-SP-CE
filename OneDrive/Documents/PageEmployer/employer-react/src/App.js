import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AcceuilE from './Employer/AcceuilEmployer';
import Stats from './Employer/Statistiques';
import Consult from './Employer/ConsulterCommande';
import MiseJourM from './Employer/MiseAJourMenu';
import HistoriqueReclamation from './Employer/HistoriqueReclamations';
import AcceuilAdmin from './Administrateur/AcceuilAdmin';


function App() {
  return (
    
    <Router>
      <Routes>
        {/* <Route path='/AcceuilE' element={<AcceuilE/>}/>
        <Route path='/Stats' element={<Stats/>}/>
        <Route path='/Consult' element={<Consult/>}/>
        <Route path='/HistoriqueReclamation' element={<HistoriqueReclamation/>}/>
        <Route path='/MiseJourM' element={<MiseJourM/>}/> */}
        <Route path='/' element={<AcceuilAdmin/>} /> 

      </Routes>
    </Router>
  );
}

export default App;
