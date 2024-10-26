import React, {useEffect ,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo_Zeduc from '../images/Logo_Zeduc.svg';
import Profile from '../images/Profile.svg';
import Menu from '../images/Menu.png';
import PageProfileBody from '../Employer/PageProfileBody';
import { Link, useLocation } from 'react-router-dom';
import close from '../images/Close.png';
import StyleG from '../Styles/StyleGerant';

const HeaderGerant = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleButtonClick = () => {
    setShowMenu(!showMenu);
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleImageClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (showPopup) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}, [showPopup]);

  const location = useLocation();

  return (
    <div className='container-fluid d-flex align-items-center p-3 custom-header'>
      <StyleG/>
      <img src={Logo_Zeduc} alt="Logo Zeduc" style={{ height: '130px' }} />
      <div className="d-flex gap-md-5 ms-2 ms-md-5" style={{ position: 'relative' }}>
        <Link
          to="/acceuil_gerant"
          className='btn btn-outline-secondary fw-bold A'
          style={{
            backgroundColor: location.pathname === '/AcceuilG' ? '#CFBD97' : 'initial'
          }}>
          Accueil
        </Link>
        <p className="fw-bold Message">
          Mon Bon Miam-Miam
        </p>
        <Link
          to="/GestionReclamation"
          className='btn btn-outline-secondary fw-bold C'
          style={{
            backgroundColor: location.pathname === '/GestionReclamation' ? '#CFBD97' : 'initial'
          }}>
          Réclamations
        </Link>
        <Link
          to="/historique_reclamations2"
          className='btn btn-outline-secondary fw-bold C'
          style={{
            backgroundColor: location.pathname === '/historique_reclamations2' ? '#CFBD97' : 'initial'
          }}>
          Commandes
        </Link>
        <Link
          to="/gestion_employe"
          className='btn btn-outline-secondary fw-bold M'
          style={{
            backgroundColor: location.pathname === '/GestionEmployes' ? '#CFBD97' : 'initial'
          }}>
          Gestion de employés
        </Link>
        <Link
          to="/stats2"
          className='btn btn-outline-secondary fw-bold S'
          style={{
            backgroundColor: location.pathname === '/Stats' ? '#CFBD97' : 'initial'
          }}>
          Statistiques
        </Link>
      </div>
      <button className='btn mb-3 Img-button' onClick={handleButtonClick}>
        <img src={Menu} alt="Menu déroulant" className='Img-menu'/>
        {showMenu ? '' : ''}
      </button>
      {showMenu && (
        <div className='menu-floating'>
          <div className='row'>
            <div className='col'>
              <Link to="/AcceuilG" className="fw-bold btn btn-outline-secondary text-light LienMenu">
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
              <Link to={"/GestionReclamation"} className='fw-bold btn btn-outline-secondary text-light LienMenu' style={{marginLeft:'12px'}}>
                Réclamations
              </Link>
          </div>
          <div className='row '>
            <div className='col'>
              <Link to={'/GestionEmployes'} className='fw-bold btn btn-outline-secondary text-light LienMenu'>
                Gestion employes
              </Link>
            </div>
          </div>
          <div className='row '>
            <div className='col'>
              <Link to="/stats2" className="fw-bold btn btn-outline-secondary text-light LienMenu">
                Statistiques
              </Link>
            </div>
          </div>
        </div>
      )}
      <img src={Profile} alt="Profil" className="img-fluid custom-image" onClick={handleImageClick}/>

      {showPopup && (
        <div className="popup-design">
          <PageProfileBody />
          <button onClick={closePopup} className="Croix"><img src={close} style={{ width:'60px'}} /></button>
        </div>
      )}

      <div className='Ligne'></div>
    </div>
  );
}

export default HeaderGerant;
