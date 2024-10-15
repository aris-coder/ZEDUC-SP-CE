import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Inscription from './autentification/inscription.jsx';
import Connexion from './autentification/connexion.jsx';
import MotDePasseOublie from './autentification/mot_de_passe_oubli.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/inscription' element={<Inscription/>}/>
        <Route path='/connexion' element={<Connexion/>}/>
        <Route path='/mot_de_passe_oubli' element={<MotDePasseOublie/>}/>
        <Route path='/' element={<Inscription/>}/>
      </Routes>
    </Router>
  );
}

export default App;
