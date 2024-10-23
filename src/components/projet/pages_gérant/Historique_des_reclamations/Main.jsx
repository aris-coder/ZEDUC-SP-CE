import React, { useState } from "react";

const Main = () => {
    const pageStyle = {
        background: "linear-gradient(to bottom, #69604D, #CFBD97)",
        minHeight: '60vh',
        width: '100%',
    }
    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Recherche pour : $(searchTerm)');
    };
    const circleStyleValidee = {
        width: '10px',
        height: '10px',
        borderRadius : '50%',
        backgroundColor : 'green',
    }
    const circleStyleRejetee = {
        width: '10px',
        height: '10px',
        borderRadius : '50%',
        backgroundColor : 'red',
    }
    const circleStyleEnCour = {
        width: '10px',
        height: '10px',
        borderRadius : '50%',
        backgroundColor : 'orange',
    }
    const circleStyleNonRepondu = {
        width: '10px',
        height: '10px',
        borderRadius : '50%',
        backgroundColor : 'gray',
    }
    const menuStyle = {
        position: 'absolute',
        top: '50px',
        left : '100px',
        border : '1px solid #ccc',
        backgroundColor : '#fff',
        padding : '10px',
        boxshadow: '0 4px 8px rgba(0, 0, 0, 0,1)',
    }
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <body>
            <div style={pageStyle}>


                <div className="container header-container position-relative"
                    style={{
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        maxWidth: "1200px",
                        margin: "0 auto",
                        position: "relative",
                        padding: "30px",
                    }}>
                    <img src="./assets/images/dg.png" className="rounded-circle" alt="dg" style={{position:"absolute", width:"200px", height:"200px", borderRadius:"50%", left:"-130px", bottom:"-100px"}} />
                    <div className="header-text text-center" style={{flexGrow:"0", padding:"0 120px", zIndex: "1"}}>
                        <h1 className="header-title" style={{fontFamily:"Milonga, sans-serif", fontSize:"3rem", marginBottom:"25px", color:"white",}}>ZeDuc Sp@ce</h1>
                        <h2 className="header-subtitle" style={{fontFamily:"Milonga, sans-serif", fontSize:"1.5rem", marginBottom:"20px", color:"white",}}>Inventaire des réclamations</h2>
                    </div>
                    <img src="./assets/images/pouletpanee1.png" className="rounded-circle" alt="poulet" style={{position:"absolute", width:"200px", height:"200px", borderRadius:"50%", right:"-130px", top:"-10px" }} />
                </div>


                    <div className="col-md-4 col-12 text-center" style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                        <form onSubmit={handleSubmit} style={{ alignItems:"center"}}>
                            <input
                                type="text"
                                placeholder="Recherche..."
                                value={searchTerm}
                                onChange={handleChange}
                                style={{
                                    padding: '10px',
                                    fontSize: '16px',
                                    borderRadius: '5px',
                                    border : '1px solid #ccc',
                                    width:'300px',
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    padding: '10px',
                                    marginLeft: '10px',
                                    backgroundColor: '#69604D',
                                    color:'white',
                                    border:'none',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}>
                                    Rechercher
                                </button>
                        </form>
                        <div><p></p></div>
                        <table border="1" style={{margin:"auto"}}>
                            <thead>
                                <tr>
                                    <th>Identifiant reclamation</th>
                                    <th>Identifiant employé</th>
                                    <th>Réclamation</th>
                                    <th>Réponse employé</th>
                                    <th>Statut</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{backgroundColor:"#69604D"}}>
                                    <td>CL0000001</td>
                                    <td>EMP0000001</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
                                        <div style={circleStyleValidee}></div>
                                        <div>validée</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CL0000001</td>
                                    <td>EMP0000001</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
                                        <button style={circleStyleEnCour}></button>
                                        <div>En attente</div>
                                    </td>
                                </tr>
                                <tr style={{backgroundColor:"#69604D"}}>
                                    <td>CL0000001</td>
                                    <td>EMP0000001</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
                                        <div style={circleStyleRejetee}></div>
                                        <div>Rejetée</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CL0000001</td>
                                    <td>EMP0000001</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
                                        <div style={circleStyleRejetee}></div>
                                        <div>Rejetée</div>
                                    </td>
                                </tr>
                                <tr style={{backgroundColor:"#69604D"}}>
                                    <td>CL0000001</td>
                                    <td>EMP0000001</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
                                        <div style={circleStyleValidee}></div>
                                        <div>validée</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CL0000001</td>
                                    <td>EMP0000001</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
                                        <div style={circleStyleValidee}></div>
                                        <div>validée</div>
                                    </td>
                                </tr>
                                <tr style={{backgroundColor:"#69604D",}}>
                                    <td>CL0000001</td>
                                    <td>EMP0000001</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
                                        <button style={circleStyleEnCour}></button>
                                        <div>En attente</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CL0000001</td>
                                    <td>EMP0000001</td>
                                    <td>N/A</td>
                                    <td>N/A</td>
                                    <td style={{display:'flex', alignItems: 'center', justifyContent:'center'}}>
                                        <button style={circleStyleEnCour}></button>
                                        <div>En attente</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4 col-12 text-center">
                    </div>
                </div>
            
        </body>
    );
}

export default Main;