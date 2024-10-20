import React from "react";
import Header from "./HeaderEmployer";
import Footers from "./FooterEmployer";
import Style from "./Style";
import PlatI from '../Images/PlatI.png';
import PlatII from '../Images/PlatII.png';
import Rectangle from '../Images/Rectangle.png';

const Consult = () =>{
    const data = [
        {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>,col5:  <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button  className="btn-circle" style={{backgroundColor: '#F86D43',width:'25px',height:'25px',borderRadius:'50%'}}></button>En cour de traitement</p> },  
        {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button  className="btn-circle" style={{backgroundColor: 'green',width:'25px',height:'25px',borderRadius:'50%'}}></button>Servie</p>  },
        {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button  className="btn-circle" style={{backgroundColor: 'green',width:'25px',height:'25px',borderRadius:'50%'}}></button>Servie</p> },
        {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button  className="btn-circle" style={{backgroundColor: '#F86D43',width:'25px',height:'25px',borderRadius:'50%'}}></button>En cour de traitement</p> },
        {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button  className="btn-circle" style={{backgroundColor: 'green',width:'25px',height:'25px',borderRadius:'50%'}}></button>Servie</p> },
        {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button  className="btn-circle" style={{backgroundColor: '#F86D43',width:'25px',height:'25px',borderRadius:'50%'}}></button>En cour de traitement</p> },
        {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button  className="btn-circle" style={{backgroundColor: 'green',width:'25px',height:'25px',borderRadius:'50%'}}></button>Servie</p> },
        {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button  className="btn-circle" style={{backgroundColor: 'green',width:'25px',height:'25px',borderRadius:'50%'}}></button>Servie</p> },
        {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button  className="btn-circle" style={{backgroundColor: 'green',width:'25px',height:'25px',borderRadius:'50%'}}></button>Servie</p> },
        {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button  className="btn-circle" style={{backgroundColor: '#F86D43',width:'25px',height:'25px',borderRadius:'50%'}}></button>En cour de traitement</p> },
        {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button  className="btn-circle" style={{backgroundColor: 'green',width:'25px',height:'25px',borderRadius:'50%'}}></button>Servie</p> },
        {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button  className="btn-circle" style={{backgroundColor: 'green',width:'25px',height:'25px',borderRadius:'50%'}}></button>Servie</p> },
        {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button  className="btn-circle" style={{backgroundColor: '#F86D43',width:'25px',height:'25px',borderRadius:'50%'}}></button>En cour de traitement</p> },
        {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>13/10/2024</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button  className="btn-circle" style={{backgroundColor: 'green',width:'25px',height:'25px',borderRadius:'50%'}}></button>Servie</p> },
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
                ZEDUC SP@CE <br/><p style={{marginLeft:'-120px'}}>Inventaire des commandes</p> 
                </div>

                <table className="Tableau">
                    <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' , color:'black'}}>Identifiant commande</th>
                        <th style={{ border: '1px solid black', padding: '8px' , color:'black'}}>Date commande</th>
                        <th style={{ border: '1px solid black', padding: '8px' , color:'black'}}>Identifiant client</th>
                        <th style={{ border: '1px solid black', padding: '8px' , color:'black'}}>Etat de la commande</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
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