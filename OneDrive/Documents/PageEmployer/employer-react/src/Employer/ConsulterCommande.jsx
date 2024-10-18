import React from "react";
import Header from "./HeaderEmployer";
import Footers from "./FooterEmployer";
import Style from "./Style";
import PlatI from '../Images/PlatI.png';
import PlatII from '../Images/PlatII.png';
import Rectangle from '../Images/Rectangle.png';

const Consult = () =>{
    const data = [
        { col1:<img src={Rectangle} style={{marginLeft:'75px'}}/>, col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <button className="btn" style={{backgroundColor: '#F86D43',color: 'white',borderRadius: '10px',fontFamily:'Be Vietnam Pro, serif',width:'100px'}}>Boutton</button>},
        { col1: <img src={Rectangle} style={{marginLeft:'75px'}}/>, col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <button className="btn" style={{backgroundColor: 'green',color: 'white',borderRadius: '10px',fontFamily:'Be Vietnam Pro, serif',width:'100px'}}>Boutton</button> },
        { col1: <img src={Rectangle} style={{marginLeft:'75px'}}/>, col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <button className="btn" style={{backgroundColor: 'green',color: 'white',borderRadius: '10px',fontFamily:'Be Vietnam Pro, serif',width:'100px'}}>Boutton</button>},
        { col1: <img src={Rectangle} style={{marginLeft:'75px'}}/>, col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <button className="btn" style={{backgroundColor: 'red',color: 'white',borderRadius: '10px',fontFamily:'Be Vietnam Pro, serif',width:'100px'}}>Boutton</button> },
        { col1: <img src={Rectangle} style={{marginLeft:'75px'}}/>, col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <button className="btn" style={{backgroundColor: 'green',color: 'white',borderRadius: '10px',fontFamily:'Be Vietnam Pro, serif',width:'100px'}}>Boutton</button> },
        { col1: <img src={Rectangle} style={{marginLeft:'75px'}}/>, col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <button className="btn" style={{backgroundColor: 'green',color: 'white',borderRadius: '10px',fontFamily:'Be Vietnam Pro, serif',width:'100px'}}>Boutton</button> },
        { col1: <img src={Rectangle} style={{marginLeft:'75px'}}/>, col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <button className="btn" style={{backgroundColor: 'red',color: 'white',borderRadius: '10px',fontFamily:'Be Vietnam Pro, serif',width:'100px'}}>Boutton</button> },
        { col1: <img src={Rectangle} style={{marginLeft:'75px'}}/>, col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <button className="btn" style={{backgroundColor: 'green',color: 'white',borderRadius: '10px',fontFamily:'Be Vietnam Pro, serif',width:'100px'}}>Boutton</button>},
        { col1: <img src={Rectangle} style={{marginLeft:'75px'}}/>, col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <button className="btn" style={{backgroundColor: 'green',color: 'white',borderRadius: '10px',fontFamily:'Be Vietnam Pro, serif',width:'100px'}}>Boutton</button> },
        { col1: <img src={Rectangle} style={{marginLeft:'75px'}}/>, col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <button className="btn" style={{backgroundColor: 'red',color: 'white',borderRadius: '10px',fontFamily:'Be Vietnam Pro, serif',width:'100px'}}>Boutton</button> },
        { col1: <img src={Rectangle} style={{marginLeft:'75px'}}/>, col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <button className="btn" style={{backgroundColor: 'green',color: 'white',borderRadius: '10px',fontFamily:'Be Vietnam Pro, serif',width:'100px'}}>Boutton</button> },
        { col1: <img src={Rectangle} style={{marginLeft:'75px'}}/>, col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <button className="btn" style={{backgroundColor: '#F86D43',color: 'white',borderRadius: '10px',fontFamily:'Be Vietnam Pro, serif',width:'100px'}}>Boutton</button> },
        { col1: <img src={Rectangle} style={{marginLeft:'75px'}}/>, col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <button className="btn" style={{backgroundColor: 'green',color: 'white',borderRadius: '10px',fontFamily:'Be Vietnam Pro, serif',width:'100px'}}>Boutton</button> },
        { col1: <img src={Rectangle} style={{marginLeft:'75px'}}/>, col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <button className="btn" style={{backgroundColor: '#F86D43',color: 'white',borderRadius: '10px',fontFamily:'Be Vietnam Pro, serif',width:'100px'}}>Boutton</button> },
    ];

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
                ZEDUC SP@CE <br/><p style={{marginLeft:'-70px'}}>Inventaire des commandes</p> 
                </div>
                <div className="Semaine_trierpar" style={{marginTop:'-70px'}}> 
                    <p className="fw-bold" style={{paddingTop:'5px',paddingLeft:'5px',fontSize:'17px',fontFamily:'Be Vietnam Pro, sans-serif'}}>Trier Par:</p>
                </div>
                <table className="Tableau">
                    <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}></th>
                        <th style={{ border: '1px solid black', padding: '8px' , color:'black'}}>Identifiant commande</th>
                        <th style={{ border: '1px solid black', padding: '8px' , color:'black'}}>Date commande</th>
                        <th style={{ border: '1px solid black', padding: '8px' , color:'black'}}>Identifiant client</th>
                        <th style={{ border: '1px solid black', padding: '8px' , color:'black'}}>Etat de la commande</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{row.col1}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{row.col2}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{row.col3}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{row.col4}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{row.col5}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </main>
            <footer style={{position:'absolute', top:'100%'}}>
                <Footers/>
            </footer>
        </div>
    );
}
export default Consult;