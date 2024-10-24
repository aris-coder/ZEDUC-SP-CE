import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Sidebar from './partienoir';
import Style from './style';
import pouletpanee from '../images/pouletpanee1.png';
import FormMotDePasseOublie from './mot_de_passe_oublieValidation'; 

const MotDePasseOublie = () => {
    return (
        <div className="container-fluid">
            <Style />

            <div className="row">
                <Sidebar />

                <div className="col-md-8 bg-white d-flex flex-column justify-content-center align-items-center py-4" style={{ fontFamily: 'Milonga, sans-serif', position: 'relative', overflow: 'hidden' }}>
                    <div className="text-center mb-5">
                        <h1 style={{ color: '#c2a87f' }}>Réinitialisez votre mot de passe</h1>
                        <p>Remplissez les informations ci-dessous pour la réinitialisation de votre mot de passe.</p>
                    </div>
                    <FormMotDePasseOublie /> 
                    <div className="text-center">
                        <p>Retour à la page de <Link to='/connexion' className="text custom-link">Connexion</Link></p>
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
