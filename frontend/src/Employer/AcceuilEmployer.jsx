import React from 'react';
import Header from './HeaderEmployer';
import Style from '../Styles/StyleEmployer';
import PlatI from '../images/PlatI.png';
import PlatII from '../images/PlatII.png';
import FooterComponent from '../Footer/footerComponent';

const AcceuilE = () => {
  return (
    <div>
      <Style/>
      <header style={{marginTop:'-20px'}}>
        <Header/>
      </header>
      <main>
        <img src={PlatI} class="img-fluid" className='PLATI'/>
        <img src={PlatII} class="img-fluid" className='PLATII'/>
        <div className="bienvenue_Acceuil">
          ZEDUC SP@CE <br/> <br/>Bienvenue NOM 
        </div>
        <div className="container  menujour">
          <br/>
          <div className="row">
            <div className="col">
              <div style={{display: 'flex', justifyContent:'space-between' ,alignItems:'center',paddingLeft:'65px'}}>
                <p style={{fontFamily:'Milonga, serif'}}>POULET PANET</p>
                <p className='fw-bold' style={{fontFamily:'Be Vietnam Pro, serif',paddingRight:'58px',fontSize:'18px'}}>1000/1500</p>
              </div>
              <div className='ligne' style={{ borderBottom: '2px solid black'}}></div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div style={{display: 'flex', justifyContent:'space-between' ,alignItems:'center',paddingLeft:'65px'}}>
                <p style={{fontFamily:'Milonga, serif'}}>OKOK SUCRER</p>
                <p className='fw-bold' style={{fontFamily:'Be Vietnam Pro, serif',paddingRight:'58px',fontSize:'18px'}}>1500</p>
              </div>
              <div className='ligne' style={{ borderBottom: '2px solid black'}}></div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div style={{display: 'flex', justifyContent:'space-between' ,alignItems:'center',paddingLeft:'65px'}}>
                <p style={{fontFamily:'Milonga, serif'}}>OKOK SALE</p>
                <p className='fw-bold' style={{fontFamily:'Be Vietnam Pro, serif',paddingRight:'58px',fontSize:'18px'}}>1000/1500</p>
              </div>
              <div className='ligne' style={{ borderBottom: '2px solid black'}}></div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div style={{display: 'flex', justifyContent:'space-between' ,alignItems:'center',paddingLeft:'65px'}}>
                <p style={{fontFamily:'Milonga, serif'}}>SAUCE JAUNE</p>
                <p className='fw-bold' style={{fontFamily:'Be Vietnam Pro, serif',paddingRight:'58px',fontSize:'18px'}}>2000</p>
              </div>
              <div className='ligne' style={{ borderBottom: '2px solid black'}}></div>
            </div>
          </div>
          <div  className="row">
            <div className="col">
              <div style={{display: 'flex', justifyContent:'space-between' ,alignItems:'center',paddingLeft:'65px'}}>
                <p style={{fontFamily:'Milonga, serif'}}>ERU</p>
                <p className='fw-bold' style={{fontFamily:'Be Vietnam Pro, serif',paddingRight:'58px',fontSize:'18px'}}>1000</p>
              </div>
              <div className='ligne' style={{ borderBottom: '2px solid black'}}></div>
            </div>
          </div>
        </div>
        <div class="commande_attente_info"></div>
        <div class="commande_attente">
          Commandes en attente
        <button class="voir_plus_employé">Voir plus</button>
        </div><br/><br/> 
        <div class="réclamations_info"></div>
        <div class="réclamation_en_attente">
          Réclamation en attente
        <button class="voir_plusréclamation_employé">Voir plus</button>
        </div>
      </main>
      <footer style={{marginTop:'1000px'}}>
        <FooterComponent/>
      </footer>
    </div>
  );
}

export default AcceuilE;