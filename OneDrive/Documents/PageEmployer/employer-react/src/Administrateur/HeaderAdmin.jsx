// modifier impérativement ce fichier
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Logo_Zeduc from '../Images/Logo_Zeduc.svg';
import Profile from '../Images/Profile.svg';
import Menu from '../Images/Menu.png';
import { Link, useLocation } from 'react-router-dom';

const HeaderAdmin = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };
  
  const location = useLocation();

  return (
    <div className='container-fluid d-flex align-items-center p-3 custom-header'>
      <img src={Logo_Zeduc} alt="Logo Zeduc" style={{ height: '130px' }} />
      <div className="d-flex gap-md-5 ms-2 ms-md-5" style={{position:'relative'}}>
        <Link 
          to="/AcceuilE" 
          className='btn btn-outline-secondary fw-bold A' 
          style={{
            backgroundColor: location.pathname === '/AcceuilE' ? '#CFBD97' : 'initial'
          }}>
          Accueil
        </Link>
        <p className="fw-bold Message">
          Mon Bon Miam-Miam
        </p>
        <Link 
          to="/Consult" 
          className='btn btn-outline-secondary fw-bold C' 
          style={{
            backgroundColor: location.pathname === '/Consult' ? '#CFBD97' : 'initial'
          }}>
          Commandes
        </Link>
        <a href="#" className="btn btn-outline-secondary fw-bold R">
          Réclamations
        </a>
        <Link 
          to="/MiseJourM" 
          className='btn btn-outline-secondary fw-bold M' 
          style={{
            backgroundColor: location.pathname === '/MiseJourM' ? '#CFBD97' : 'initial'
          }}>
          Gestion de comptes
        </Link>
        <Link 
          to="/Stats" 
          className='btn btn-outline-secondary fw-bold S' 
          style={{
            backgroundColor: location.pathname === '/Stats' ? '#CFBD97' : 'initial'
          }}>
          Statistiques
        </Link>
      </div>
      <button className='btn mb-3 Img-button' onClick={handleButtonClick}>
        <img src={Menu} alt="Menu déroulant" className='Img-menu'/>
        {showMenu ? '':''}
      </button>
      {showMenu &&(
        <div className='menu-floating'>
          <div className='row'>
            <div className='col'>
            <Link to="/AcceuilE" className="fw-bold btn btn-outline-secondary text-light LienMenu">
              Acceuil
            </Link>
            </div>
          </div>
          <div className='row '>
            <div className='col'>
            <Link to={"/Consult"} className='fw-bold btn btn-outline-secondary text-light LienMenu'>
              Commandes en Attente
            </Link>
            </div>
          </div>
          <div className='row '>
            <div className='col'><a href='#' className='fw-bold btn btn-outline-secondary text-light LienMenu'>Réclamations</a></div>
          </div>
          <div className='row '>
            <div className='col'>
              <Link to={'/MiseJourM'} className='fw-bold btn btn-outline-secondary text-light LienMenu'>
                Mise à jour Menu
              </Link>
            </div>
          </div>
          <div className='row '>
            <div className='col'>
            <Link to="/Stats" className="fw-bold btn btn-outline-secondary text-light LienMenu">
              Statistiques
            </Link>
            </div>
          </div>
        </div>
      )}
      <img src={Profile} alt="Profil" className="img-fluid custom-image"/>
      <div className='Ligne'></div>
    </div>
  );
}

export default HeaderAdmin;
