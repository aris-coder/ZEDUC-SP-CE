import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AcceuilE from './Employer/AcceuilEmployer';
import Stats from './Employer/Statistiques';
import Consult from './Employer/ConsulterCommande';
import MiseJourM from './Employer/MiseAJourMenu';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/AcceuilE' element={<AcceuilE/>}/>
        <Route path='/Stats' element={<Stats/>}/>
        <Route path='/Consult' element={<Consult/>}/>
        <Route path='/MiseJourM' element={<MiseJourM/>}/>
        <Route path='/' element={<AcceuilE />} />
      </Routes>
    </Router>
  );
}

export default App;
