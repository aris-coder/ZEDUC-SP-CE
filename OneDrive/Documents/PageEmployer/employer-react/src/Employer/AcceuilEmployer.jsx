import React from 'react';
import Header from './HeaderEmployer';
import Style from './Style';
import Footers from './FooterEmployer';
import PlatI from '../Images/PlatI.png';
import PlatII from '../Images/PlatII.png';

const AcceuilE = () => {
  return (
    <div>
      <Style/>
      <header>
        <Header/>
      </header>
      <main>
        <img src={PlatI} class="img-fluid" className='PLATI'/>
        <img src={PlatII} class="img-fluid" className='PLATII'/>
        <div className="bienvenue_message_employé">
          ZEDUC SP@CE <br/> <br/>Bienvenue NOM 
        </div>
        <div class="commande_attente_info"></div>
        <div class="commande_attente">
            Commandes en attente
            <button class="voir_plus_employé">Voir plus</button>
        </div><br/><br/> 
        <div class="plat_jour_info"></div>
        <div class="plat_jour">
            Plat du jour
            <button class="voir_plusplat_employé">Voir plus</button>
        </div><br/><br/>
        <div class="réclamations_info"></div>
        <div class="réclamation_en_attente">
            Réclamation en attente
            <button class="voir_plusréclamation_employé">Voir plus</button>
        </div>
      </main>
      <footer style={{position:'absolute', top:'100%'}}>
        <Footers/>
      </footer>
    </div>
  );
}

export default AcceuilE;