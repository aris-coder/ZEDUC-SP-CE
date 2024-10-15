import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import logo from '../images/logo.png';
import kok from '../images/kok.png';
import dg from '../images/dg.png';
import pouletpanee from '../images/pouletpanee1.png';

const MotDePasseOublie = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="container-fluid">
      <style>
        {`
            @import url('https://fonts.googleapis.com/css2?family=Milonga&display=swap');
            .form-label {
                margin-bottom: 1px;
            }
            .form-control {
                margin-top: 10px;
            }
            .password-eye {
                cursor: pointer;
                position: absolute;
                right: 20px;
                top: 40px;
                z-index: 2;
            }
            .custom-link {
                color: #c2a87f;
            }
            @media (max-width: 768px) {
                .responsive-div {
                    height: 20vh !important;
                    }
                .responsive-div img {
                    width: 100px !important; 
                    height: 100px !important;
                }
                .circle-img.kok {
                    display: none;
                }
                .circle-img.dg {
                    display: none;
                }
            }
            .custom-link {
                color: #c2a87f;
            }
        `}
      </style>

      <div className="row">
        <div className="col-md-4 responsive-div bg-black d-flex flex-column justify-content-between align-items-center py-4" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
          <div className="circle-img kok">
            <img src={kok} alt="cercle haut" className="rounded-circle" style={{ position: 'absolute', top: '-50px', left: '270px', width: '180px', height: '180px' }} />
          </div>
          <div>
            <img src={logo} alt="logo" className="img-fluid mb-4" style={{ width: '200px' }} />
          </div>
          <div className="circle-img dg">
            <img src={dg} alt="cercle bas" className="rounded-circle" style={{ position: 'absolute', top: '470px', left: '-20px', width: '180px', height: '180px' }} />
          </div>
        </div>

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
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="form-control rounded-pill"
                  placeholder=""
                />
                <span className="password-eye" onClick={togglePasswordVisibility}>
                  <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                </span>
              </div>
              <div className="col-md-6 mb-3 position-relative">
                <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
                <input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  className="form-control rounded-pill"
                  placeholder=""
                />
                <span className="password-eye" onClick={toggleConfirmPasswordVisibility}>
                  <i className={showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                </span>
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