import React from "react";
import Header from "./HeaderEmployer";
import Footers from "./FooterEmployer";
import Style from "./Style";
import PlatI from '../Images/PlatI.png';
import PlatII from '../Images/PlatII.png';

const Stats = () =>{
    return(
        <div>
            <Style/>
            <header>
                <Header/>
            </header>
            <main >
                <img src={PlatI} class="img-fluid" className='PLATI'/>
                <img src={PlatII} class="img-fluid" className='PLATII'/>
                <div className="bienvenue_message_employé" style={{fontSize:'35px'}}>
                    <p>ZEDUC SP@CE</p><p style={{marginLeft:'-40px'}}>Statistiques de ventes</p><p>Hebdomadaire</p>
                </div>
                <div className="Semaine_trierpar"> 
                    <p style={{paddingTop:'5px',paddingLeft:'5px',fontSize:'17px',fontFamily:'Milonga, sans-serif'}}>Semaine 1</p>
                </div>
                <div className="date-range"> 
                    <p style={{paddingTop:'5px',paddingLeft:'5px',fontSize:'17px',fontFamily:'Milonga, sans-serif'}}>Du:<span style={{ marginLeft: '10px' }}>XX<span style={{ marginLeft: '10px' }}></span>/XX<span style={{ marginLeft: '10px' }}></span>/XXXX</span> <span style={{ marginLeft: '25px' }}></span> AU: <span style={{ marginLeft: '10px' }}>XX<span style={{ marginLeft: '10px' }}></span>/XX<span style={{ marginLeft: '10px' }}></span>/XXXX</span></p>
                </div>
                <div className="total-ventes"> 
                    <p style={{paddingTop:'10px',fontSize:'20px',fontFamily:'Milonga, sans-serif'}}>TOTAL DES VENTES:</p>
                </div>
                <div className="white-box">

                </div>
            </main>
            <footer style={{position:'absolute', top:'100%'}}>
                <Footers/>
            </footer>
        </div>
    );

};
export default Stats;