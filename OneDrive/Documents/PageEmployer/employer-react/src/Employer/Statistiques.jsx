import React from "react";
import Header from "./HeaderEmployer";
import FooterComponent from "../Footer/footerComponent";
import Style from "../Styles/StyleEmployer";
import PlatI from '../Images/PlatI.png';
import PlatII from '../Images/PlatII.png';
import Search from '../Images/Search.png';

const Stats = () =>{
    return(
        <div style={{minHeight:'215vh'}}>
            <Style/>
            <header>
                <Header/>
            </header>
            <main >
                <img src={PlatI} class="img-fluid" className='PLATI'/>
                <img src={PlatII} class="img-fluid" className='PLATII'/>
                <div className="bienvenue_message_employé" style={{fontSize:'50px'}}>
                    <p>ZEDUC SP@CE</p><p style={{marginLeft:'-100px',fontSize:'40px'}}>Statistiques de ventes Hebdomadaire</p>
                </div>
                <div className="date-range"> 
                    <p style={{paddingTop:'5px',paddingLeft:'5px',fontSize:'22px',fontFamily:'Milonga, sans-serif'}}>Du: <input type="text" placeholder="La date de DEBUT" style={{border:'1px solid #ccc',borderRadius:'10px', backgroundColor:'#D3D3D3'}}></input>  AU: <input type="text" placeholder="La date de FIN" style={{border:'1px solid #ccc',borderRadius:'10px', backgroundColor:'#D3D3D3'}}></input><img src={Search} style={{width:'45px'}}/></p>
                </div>
                <div className="total-ventes"> 
                    <p style={{paddingTop:'10px',fontSize:'20px',fontFamily:'Milonga, sans-serif'}}>TOTAL DES VENTES:</p>
                </div>
                <div className="white-box">

                </div>
            </main>
            <footer style={{position:'relative', top:'1450px'}}>
                <FooterComponent/>
            </footer>
        </div>
    );

};
export default Stats;