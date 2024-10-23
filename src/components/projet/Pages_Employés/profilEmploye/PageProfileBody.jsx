// PageProfileBody.jsx
import React from "react";

const PageProfileBody = () => {
    return (
        <div className='container-fluid d-flex justify-content-center align-items-center'
            style={{
                background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), #CFBD97)",
                minHeight: "100vh", // Prend toute la hauteur de la fenêtre
                color: "#fff",
                padding: "40px 20px",
                justifyContent: "center",
            }}>
            <div className='d-flex flex-column justify-content-center align-items-center'
                style={{
                    background: "linear-gradient(to bottom, #CFBD97, #69604D)",
                    borderRadius: "15px",
                    width: "500px",
                    margin: "0 auto",
                    padding: "20px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)", // Ombre pour un effet de profondeur
                    maxWidth: "600px",
                }}>
                <h2 style={{ fontFamily: 'milonga', fontSize: '30px', marginBottom: '20px' }}>Profil</h2>
                <div className="d-flex justify-content-center align-items-center mb-4" style={{textAlign: "center"}}>
                    <img src="./assets/Profil_Utilisateur.png" alt="Profil_Utilisateur" style={{ width: "200px", height: "150px", borderRadius: "10px", marginRight: "15px", }} />
                </div>

                <div className="d-flex justify-content-start mb-3" style={{textAlign: "center"}}>
                    <label className="h5 mb-0" style={{ color: "#cfbd97", fontFamily: 'milonga' }}>T. ESTHER</label>
                </div>

                <div className="container-fluid">
                    <h5 style={{ color: "#cfbd97", fontWeight: "bold", fontFamily: 'milonga' }}>Paramètres du profil</h5>
                    {["Nom", "Prénom", "Numéro de téléphone", "Adresse Email"].map((field) => (
                        <div className="row mb-3" key={field}>
                            <div className="col d-flex justify-content-between" style={{ display:'flex', borderBottom: '1px solid white', justifyContent: "space-between", alignItems: "center" }}>
                                <label style={{ fontFamily: 'milonga'}}>{field}</label>
                                <button className="btn btn-outline-light" style={{ backgroundColor: '#7D735C', borderColor: '#7D735C', textAlign: "right"}}>Modifier</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <p></p>
                </div>
                <div className="d-flex justify-content-center mb-3" style={{textAlign : "center"}}>
                    <button className="btn btn-danger" style={{backgroundColor:'red',}}>Déconnexion</button>
                </div>
            </div>
        </div>
    );
}

export default PageProfileBody;
