import React from 'react';
import FooterComponent from '../Footer/footerComponent';
import PlatI from '../Images/PlatI.png';
import PlatII from '../Images/PlatII.png';
import StyleG from '../Styles/StyleGerant';

const AcceuilAdmin = () =>{
        const data = [
            {col1: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>,col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white' }}>Nom_PLat</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>Livraison</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>2500 frs</p>,col5:  <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}>En cour</p> },  
            {col1: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>,col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>Nom_PLat</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>Livraison</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>1000 frs</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}>Achevée</p>  },
            {col1: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>,col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>Nom_PLat</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>Consommer sur place</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>1000 frs</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}>En attente de validation</p> },
            {col1: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>,col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>Nom_PLat</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>Emporter</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>1500 frs</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}>En attente de validation</p> },
            {col1: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>,col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>Nom_PLat</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>Emporter</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>1000 frs</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}>Achevée</p> },
            {col1: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>,col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>Nom_PLat</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>Livraison</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>2500 frs</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}>En attente de validation</p> },
            {col1: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>,col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>Nom_PLat</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>Consommer sur place</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>1000 frs</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}>En cour</p> },
            {col1: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>,col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>Nom_PLat</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>Livraison</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>1200 frs</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}>En cour</p> },
            {col1: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>,col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>Nom_PLat</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>Consommer sur place</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>1000 frs</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}>Achevée</p> },
            {col1: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>,col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>Nom_PLat</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>Emporter</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>1200 frs</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}>Achevée</p> },
            {col1: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>,col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>Nom_PLat</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>Emporter</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>1500 frs</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}>En attente de validation</p> },
            {col1: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>,col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>Nom_PLat</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>Livraison</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>2500 frs</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}>En cour</p> },
            {col1: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>,col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>Nom_PLat</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>Consommer sur place</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>2500 frs</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}>Achevée</p> },
            {col1: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'0px',color:'white' }}>ID</p>,col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>Nom_PLat</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>Livraison</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>1500 frs</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}>En attente de validation</p> },
        ];

        const data2 = [
                {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white' }}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>N/A</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>N/A</p>,col5:  <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button  className="btn-circle" style={{backgroundColor: '#F86D43',width:'25px',height:'25px',borderRadius:'50%'}}></button>En cour de traitement </p> },  
                {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>N/A</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>N/A</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button style={{color:'white',backgroundColor:'green',borderRadius:'10px',width:'70px'}}>Valider</button> <button style={{color:'white',backgroundColor:'red',borderRadius:'10px',width:'70px'}}>Rejeter</button></p>  },
                {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>N/A</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>N/A</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button style={{color:'white',backgroundColor:'green',borderRadius:'10px',width:'70px'}}>Valider</button> <button style={{color:'white',backgroundColor:'red',borderRadius:'10px',width:'70px'}}>Rejeter</button></p> },
                {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>N/A</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>N/A</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button style={{color:'white',backgroundColor:'green',borderRadius:'10px',width:'70px'}}>Valider</button> <button style={{color:'white',backgroundColor:'red',borderRadius:'10px',width:'70px'}}>Rejeter</button></p> },
                {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>N/A</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>N/A</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button style={{color:'white',backgroundColor:'green',borderRadius:'10px',width:'70px'}}>Valider</button> <button style={{color:'white',backgroundColor:'red',borderRadius:'10px',width:'70px'}}>Rejeter</button></p> },
                {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>N/A</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>N/A</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button style={{color:'white',backgroundColor:'green',borderRadius:'10px',width:'70px'}}>Valider</button> <button style={{color:'white',backgroundColor:'red',borderRadius:'10px',width:'70px'}}>Rejeter</button></p> },
                {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>N/A</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>N/A</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button style={{color:'white',backgroundColor:'green',borderRadius:'10px',width:'70px'}}>Valider</button> <button style={{color:'white',backgroundColor:'red',borderRadius:'10px',width:'70px'}}>Rejeter</button></p> },
                {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>N/A</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>N/A</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button style={{color:'white',backgroundColor:'green',borderRadius:'10px',width:'70px'}}>Valider</button> <button style={{color:'white',backgroundColor:'red',borderRadius:'10px',width:'70px'}}>Rejeter</button></p> },
                {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>N/A</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>N/A</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button style={{color:'white',backgroundColor:'green',borderRadius:'10px',width:'70px'}}>Valider</button> <button style={{color:'white',backgroundColor:'red',borderRadius:'10px',width:'70px'}}>Rejeter</button></p> },
                {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>N/A</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>N/A</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button style={{color:'white',backgroundColor:'green',borderRadius:'10px',width:'70px'}}>Valider</button> <button style={{color:'white',backgroundColor:'red',borderRadius:'10px',width:'70px'}}>Rejeter</button></p> },
                {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>N/A</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>N/A</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button style={{color:'white',backgroundColor:'green',borderRadius:'10px',width:'70px'}}>Valider</button> <button style={{color:'white',backgroundColor:'red',borderRadius:'10px',width:'70px'}}>Rejeter</button></p> },
                {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>N/A</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>N/A</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button style={{color:'white',backgroundColor:'green',borderRadius:'10px',width:'70px'}}>Valider</button> <button style={{color:'white',backgroundColor:'red',borderRadius:'10px',width:'70px'}}>Rejeter</button></p> },
                {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>N/A</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>N/A</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button style={{color:'white',backgroundColor:'green',borderRadius:'10px',width:'70px'}}>Valider</button> <button style={{color:'white',backgroundColor:'red',borderRadius:'10px',width:'70px'}}>Rejeter</button></p> },
                {col2: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'120px',color:'white'}}>ID</p>, col3: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'200px',color:'white' }}>N/A</p>, col4: <p style={{fontFamily:'Milonga, serif',height:'0px',width:'80px',color:'white' }}>N/A</p>, col5: <p style={{fontFamily:'Milonga, serif',display:'flex',alignItems:'center',gap:'10px',color:'white'}}><button style={{color:'white',backgroundColor:'green',borderRadius:'10px',width:'70px'}}>Valider</button> <button style={{color:'white',backgroundColor:'red',borderRadius:'10px',width:'70px'}}>Rejeter</button></p> },
        ];


    return (
        <div>
            <StyleG/>
            <header style={{marginTop:'-5px'}}>
                
            </header>
            <main>
                <img src={PlatI} class="img-fluid" className='PLATI'/>
                <img src={PlatII} class="img-fluid" className='PLATII'/>
                <div className="MessageAcceuilGérant">
                ZEDUC SP@CE <br/><p style={{marginLeft:'20px',marginTop:'20px',fontSize:'38px'}}>Espace administrateur</p>
                </div>
                <p style={{marginLeft:'250px',paddingTop:'390px',fontSize:'22px',color:'white',fontFamily: 'Milonga, serif'}}>Menu du jour</p>
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
                <p className='TexteAcceuil_gerant'>Suivie des commandes <button className='btn BouttonAcceuil_gerant'>Voir plus</button> </p>

                <table className="Tableau">
                    <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' , color:'black'}}>Identifiant utilisateur</th>
                        <th style={{ border: '1px solid black', padding: '8px' , color:'black'}}>Commande</th>
                        <th style={{ border: '1px solid black', padding: '8px' , color:'black'}}>Type de commande</th>
                        <th style={{ border: '1px solid black', padding: '8px' , color:'black'}}>Valeur</th>
                        <th style={{ border: '1px solid black', padding: '8px' , color:'black'}}>Etat de la commande</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{row.col1}</td>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{row.col2}</td>
                        <td style={{ border: '1px solid black', padding: '8px'}}>{row.col3}</td>
                        <td style={{ border: '1px solid black', padding: '8px'}}>{row.col4}</td>
                        <td style={{ border: '1px solid black', padding: '8px'}}>{row.col5}</td>
                        </tr>
                    ))}
                    </tbody>
                    
                </table>

                <p className='TexteAcceuil_gerant' style={{marginTop:'-250px'}}>Suivie des réclamations <button className='btn BouttonAcceuil_gerant'>Voir plus</button> </p>

                <table className="Tableau">
                    <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' , color:'black'}}>Identifiant utilisateur</th>
                        <th style={{ border: '1px solid black', padding: '8px' , color:'black'}}>Réclamation</th>
                        <th style={{ border: '1px solid black', padding: '8px' , color:'black'}}>Réponse employé</th>
                        <th style={{ border: '1px solid black', padding: '8px' , color:'black'}}>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data2.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                        <td style={{ border: '1px solid black', padding: '8px' }}>{row.col2}</td>
                        <td style={{ border: '1px solid black', padding: '8px'}}>{row.col3}</td>
                        <td style={{ border: '1px solid black', padding: '8px'}}>{row.col4}</td>
                        <td style={{ border: '1px solid black', padding: '8px'}}>{row.col5}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </main>
            <footer>
                <br/><br/><br/><br/>
                <FooterComponent/>
            </footer>
        </div>
    );
}

export default AcceuilAdmin;