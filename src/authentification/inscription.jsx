import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Sidebar from './partienoir';
import Style from './style';
import pouletpanee from '../images/pouletpanee1.png';
import FormInscription from './inscriptionVerification'; 

const Inscription = () => {

  return (
    <div className="container-fluid">
      <Style />
      <div className="row">
        <Sidebar />
        <div className="col-md-8 bg-white d-flex flex-column justify-content-center align-items-center py-4" style={{ fontFamily: 'Milonga, sans-serif', position: 'relative', overflow: 'hidden' }}>
          <div className="text-center mb-5">
            <h1 className="mb-200" style={{ color: '#c2a87f' }}>Bienvenu à Zeduc-Sp@ce</h1>
            <p className="mb-100">Prenez un bon miam miam pour aiguayer votre journée</p>
          </div>
          <FormInscription /> 
          <div className="text-center">
            <p>Vous profitez déjà des miam miam ? <Link to='/connexion' className="text custom-link">Connectez-vous</Link></p>
          </div>
          <div className="circle-img">
            <img src={pouletpanee} alt="cercle bas" className="rounded-circle" style={{ position: 'absolute', top: '477px', left: '675px', width: '180px', height: '180px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscription;