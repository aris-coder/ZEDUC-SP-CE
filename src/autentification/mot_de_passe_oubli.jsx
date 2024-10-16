import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Sidebar from './partienoir';
import Style from './style';
import pouletpanee from '../images/pouletpanee1.png';

const MotDePasseOublie = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-fluid">
      <Style/>

      <div className="row">
        <Sidebar/>

        <div className="col-md-8 bg-white d-flex flex-column justify-content-center align-items-center py-4" style={{ fontFamily: 'Milonga, sans-serif', position: 'relative', overflow: 'hidden'}}>
          <div className="text-center mb-5">
            <h1  style={{ color: '#c2a87f' }}>Réinitialisez votre mot de passe</h1>
            <p >Remplissez les informationms ci-dessous pour la réinitialisation de votre mot de passe.</p>
          </div>
          <form className="w-75 mx-auto mb-4">
            <div className="row justify-content-center mb-5">
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Adresse e-mail</label>
                <input id="email" type="email" className="form-control rounded-pill" placeholder="" />
              </div>
            </div>
            <div className="row justify-content-center mb-2">
              <p className="mb-3">Utilisez au moins 8 caractères(lettres, chiffres, majuscules) *</p>
            </div>
            <div className="row mb-5">
              <div className="col-md-6 mb-3 position-relative">
                <label htmlFor="password" className="form-label">Mot de passe</label>
                <input id="password" type={showPassword ? "text" : "password"} className="form-control rounded-pill" placeholder=""/>
                <i className={showPassword ? 'fas fa-eye-slash password-eye' : 'fas fa-eye password-eye'} onClick={togglePasswordVisibility} style={{ cursor: 'pointer', position: 'absolute', right: '20px', top: '45px', zIndex: 2 }}></i>
              </div>
              <div className="col-md-6 mb-3 position-relative">
                <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
                <input id="password" type={showPassword ? "text" : "password"} className="form-control rounded-pill" placeholder=""/>
                <i className={showPassword ? 'fas fa-eye-slash password-eye' : 'fas fa-eye password-eye'} onClick={togglePasswordVisibility} style={{ cursor: 'pointer', position: 'absolute', right: '20px', top: '45px', zIndex: 2 }}></i>
              </div>
            </div>
            <div className="text-center mb-4">
              <button type="submit" className="btn btn-dark rounded-pill px-5">Envoyer</button>
            </div>
          </form>

          <div className="text-center" >
            <p>Retour a la page de  <Link to='/connexion' className="text custom-link " >Connexion</Link></p>
          </div>
          <div className="circle-img">
            <img src={pouletpanee} alt="cercle bas" className="rounded-circle" style={{ position: 'absolute', top: '477px', left: '675px', width: '180px', height: '180px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotDePasseOublie;