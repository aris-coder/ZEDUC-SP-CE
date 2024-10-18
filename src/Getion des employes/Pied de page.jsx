// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark  text-white text-center p-3"
      style={{display: 'flex', height:'100px', position: 'relative', textAlign:'center',
        alignItems:'center', background: 'linear-gradient(180deg, #BAAA88  #69604D )'
      }}>
          <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo à gauche */}
        <div className="col-md-2 text-center">
            <img src={process.env.PUBLIC_URL + "/assets/logo.jpg"} alt="Logo" className="img-fluid" style={{ width: "50px" }} />
</div>
            <div className="col-md-2 text-center">
            <div className="d-flex justify-content-center">
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><a href="#" className="text-light " style={{ textDecoration: 'none' }}> Informations</a></li> </ul> </div>
              <li><a href='#' className='text-light mx-2'>Aide</a></li>
              <li><a href="#" className="text-light mx-2">À propos</a></li>
              
           
          </div>
          <div className="col-md-2 text-center">
          <div className="d-flex justify-content-center">
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        
          <li><a href="#" className="text-light " style={{ textDecoration: 'none' }}>Acces utilisateur</a></li> </ul> </div>
              <li><a href="#" className="text-light mx-2">Se connecter</a></li>
              <li><a href="#" className="text-light mx-2">S'inscrire</a></li>
              </div>
              <div className="col-md-2 text-center">
              <div className="d-flex justify-content-center">
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li><a href="#" className="text-light" style={{ textDecoration: 'none' }}>Localisation</a></li> </ul> </div>
          <div style={{ textAlign: 'center' }}>
        <p className="mb-1">Cite la Terasse, Yansoki, Douala</p>
      </div>    
      </div>  
      <div className="col-md-2 text-center">
             <a href="https://wa.me/659474520" target="_blank" rel="noopener noreferrer">
        <img src={process.env.PUBLIC_URL + "/assets/WhatsApp.png"} alt="Contact" className="img-fluid" style={{ width: "50px" }} />
        </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
