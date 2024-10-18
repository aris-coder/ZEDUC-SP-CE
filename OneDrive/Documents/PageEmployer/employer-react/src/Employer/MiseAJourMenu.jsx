import React from "react";
import Header from "./HeaderEmployer";
import Footers from "./FooterEmployer";
import Style from "./Style";
import PlatI from '../Images/PlatI.png';
import PlatII from '../Images/PlatII.png';

const MiseJourM = () =>{
    return(
        <div>
            <Style/>
            <header>
                <Header/>
            </header>
            <main>
                <img src={PlatI} class="img-fluid" className='PLATI'/>
                <img src={PlatII} class="img-fluid" className='PLATII'/>
                <div className="bienvenue_message_employé">
                ZEDUC SP@CE <br/><p style={{marginLeft:'-20px'}}>Mise à jour des plats</p> 
                </div>
                <div className="Modifier" style={{marginTop:'-10px'}}> 
                    <p className="fw-bold" style={{paddingTop:'5px',paddingLeft:'40px',fontSize:'17px',fontFamily:'Milonga, serif'}}>Modifier</p>
                </div>
                <p className="fw-bold" style={{paddingLeft:'25px',paddingTop:'500px',fontSize:'20px',fontFamily:'Milonga, serif',color:'white'}}>Menu du jour</p>
                <div className="container  menujour">
                    <br/>
                    <div className="row">
                        <div className="col">
                            <div style={{display: 'flex', justifyContent:'space-between' ,alignItems:'center',paddingLeft:'65px'}}>
                                <p style={{fontFamily:'Milonga, serif'}}>OKOK SALE</p>
                                <p style={{fontFamily:'Be Vietnam Pro, serif', paddingRight:'150px',fontSize:'18px'}}>1000/1500</p>
                            </div>
                        <div className='ligne' style={{ borderBottom: '2px solid black'}}></div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <div style={{display: 'flex', justifyContent:'space-between' ,alignItems:'center',paddingLeft:'65px'}}>
                                <p style={{fontFamily:'Milonga, serif'}}>OKOK SALE</p>
                                <p style={{fontFamily:'Be Vietnam Pro, serif', paddingRight:'150px',fontSize:'18px'}}>1000/1500</p>
                            </div>
                        <div className='ligne' style={{ borderBottom: '2px solid black'}}></div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <div style={{display: 'flex', justifyContent:'space-between' ,alignItems:'center',paddingLeft:'65px'}}>
                                <p style={{fontFamily:'Milonga, serif'}}>OKOK SALE</p>
                                <p style={{fontFamily:'Be Vietnam Pro, serif', paddingRight:'150px',fontSize:'18px'}}>1000/1500</p>
                            </div>
                        <div className='ligne' style={{ borderBottom: '2px solid black'}}></div>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <div style={{display: 'flex', justifyContent:'space-between' ,alignItems:'center',paddingLeft:'65px'}}>
                                <p style={{fontFamily:'Milonga, serif'}}>OKOK SALE</p>
                                <p style={{fontFamily:'Be Vietnam Pro, serif', paddingRight:'150px',fontSize:'18px'}}>1000/1500</p>
                            </div>
                        <div className='ligne' style={{ borderBottom: '2px solid black'}}></div>
                        </div>
                    </div>
                    <br/>
                    <div  className="row">
                        <div className="col">
                        <div style={{display: 'flex', justifyContent:'space-between' ,alignItems:'center',paddingLeft:'65px'}}>
                            <p style={{fontFamily:'Milonga, serif'}}>OKOK SALE</p>
                            <p style={{fontFamily:'Be Vietnam Pro, serif', paddingRight:'150px',fontSize:'18px'}}>1000/1500</p>
                        </div>
                        <div className='ligne' style={{ borderBottom: '2px solid black'}}></div>
                        </div>
                    </div>
                </div>
            </main>
            <footer style={{position:'absolute', top:'100%'}}>
                <Footers/>
            </footer>
        </div>
    );
}
export default MiseJourM;