import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sidebar from './partienoir';
import Style from './style';
import pouletpanee from '../images/pouletpanee1.png';
import FormConnexion from './connexionVerification'; 

const Connexion = () => {
    return (
        <div className="container-fluid">
            <Style />
            <div className="row">
                <Sidebar />
                <div className="col-md-8 bg-white d-flex flex-column justify-content-center align-items-center py-4" style={{ fontFamily: 'Milonga, sans-serif', position: 'relative', overflow: 'hidden' }}>
                    <div className="text-center mb-5">
                        <h1 className="mb-10" style={{ color: '#c2a87f' }}>De retour pour plus de délices à Zeduc-Sp@ce?</h1>
                        <p className="mb-10">Savourez des moments gourmands à chaque connexion</p>
                    </div>
                    <FormConnexion /> 
                    <div className="text-center">
                        <p>
                            Découvrez des saveurs inoubliables !!
                            <Link to='/inscription' className="text custom-link">Inscrivez-vous</Link>
                        </p>
                    </div>
                    <div className="circle-img">
                        <img src={pouletpanee} alt="cercle bas" className="rounded-circle" style={{ position: 'absolute', top: '477px', left: '675px', width: '180px', height: '180px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connexion;
