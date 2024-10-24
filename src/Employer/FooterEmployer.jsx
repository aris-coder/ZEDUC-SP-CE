import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Logo_Zeduc_Foot from '../Images/Logo ZEDUC FOOT.png';
import Whatsapp from '../Images/WhatsAppIcon.svg';

const Footers = () => {
    return(
        <div className='container-fluid d-flex align-items-center p-3 customFoot'>
            <img src={Logo_Zeduc_Foot} alt="Logo Zeduc Foot" className='LogoFoot'/>
            <div className=' aide'>Informations<br/><br/>
                <a href='#' class='link-dark link-underline-dark'><p>Aide<br/>A propos</p></a>
            </div>
            <div className="eventI">Commandes<br/><br/>
                <a href='#' class='link-dark link-underline-dark'><p>Se connecter <br/> S'inscrire</p></a>
            </div>
            <div className="eventII">Localisation<br/><br/>
                <a href='#' class='link-dark link-underline-dark'> <p>Cite la Terasse,<br/>Yansoki, Douala</p></a>
            </div>
                <a href="https://web.whatsapp.com/">
            <img src={Whatsapp} className="Whatsapp"/>
        </a>
        </div>
    );
}

export default Footers