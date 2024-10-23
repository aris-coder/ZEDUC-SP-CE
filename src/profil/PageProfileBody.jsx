import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MaleUser from '../image/MaleUser.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function Profil() {
    const [editField, setEditField] = useState(null);
    const navigate = useNavigate();

    const handleEdit = (field) => {
        setEditField(field);
        // Logique pour gérer l'édition de chaque élément (Nom, Prénom, etc.)
        console.log(`Édition de ${field}`);
    };

    const handleGoBack = () => {
        navigate(-1); // Revenir en arrière
    };

    // Simuler les points pour l'utilisateur
    const pointsRestant = 230;
    const pointsEpuises = 30;

    return (
        <div className='container-fluid d-flex flex-column justify-content-center align-items-center '
            style={{
                background: "linear-gradient(to bottom, #CFBD97, #69604D)",
                minWidth: "320px",
                maxWidth: "600px",
                color: "#fff", // Texte en blanc pour un meilleur contraste
                borderRadius: "10px", // Arrondi des bordures du conteneur
                padding: "20px", // Ajoute un peu de rembourrage
                overflow: "hidden" // Pour que le contenu ne déborde pas des bords arrondis
            }}>

            <label style={{ fontFamily: 'milonga', fontSize: '30px' }} className="container-fluid">Profil</label>
            <div className="d-flex justify-content-center align-items-center mb-4" style={{ width: "100%" }}>
                <img src={MaleUser} alt="User" style={{ width: "200px", height: "150px", marginRight: "15px" }} />
            </div>

            <div className="d-flex justify-content-start">
                <label className="h5 mb-0" style={{ color: "white", fontFamily: 'milonga' }}>T. ESTHER</label>
            </div>

            <div className="container-fluid">
                <label style={{ color: "#7D735C", fontWeight: "bold", fontFamily: 'milonga' }}>Paramètre du profil</label>
                <div className="row mb-3">
                    <div className="col d-flex justify-content-between" style={{ borderBottom: '1px solid white', borderRadius: "10px" }}>
                        <label style={{ fontFamily: 'milonga' }}>Nom</label>
                        <button className="btn btn-outline-light" onClick={() => handleEdit("Nom")} style={{ fontFamily: 'milonga', backgroundColor: '#7D735C', borderColor: '#7D735C', marginBottom: '5px', borderRadius: "15px" }}>Modifier</button>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col d-flex justify-content-between" style={{ borderBottom: '1px solid white', borderRadius: "10px", fontFamily: 'milonga' }}>
                        <label>Prénom</label>
                        <button className="btn btn-outline-light" onClick={() => handleEdit("Prénom")} style={{ fontFamily: 'milonga', backgroundColor: '#7D735C', borderColor: '#7D735C', marginBottom: '5px', borderRadius: "15px" }}>Modifier</button>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col d-flex justify-content-between" style={{ borderBottom: '1px solid white', borderRadius: "10px", fontFamily: 'milonga' }}>
                        <label>Numéro de téléphone</label>
                        <button className="btn btn-outline-light" onClick={() => handleEdit("Numéro de téléphone")} style={{ fontFamily: 'milonga', backgroundColor: '#7D735C', borderColor: '#7D735C', marginBottom: '5px', borderRadius: "15px" }}>Modifier</button>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col d-flex justify-content-between" style={{ borderBottom: '1px solid white', borderRadius: "10px" }}>
                        <label>Adresse Email</label>
                        <button className="btn btn-outline-light" onClick={() => handleEdit("Adresse Email")} style={{ fontFamily: 'milonga', backgroundColor: '#7D735C', borderColor: '#7D735C', marginBottom: '5px', borderRadius: "15px" }}>Modifier</button>
                    </div>
                </div>
            </div>

            {/* Section des points de fidélité */}
            <div className="container-fluid">
                <div className="row mb-3">
                    <div className="col text-center">
                        <label className="h6" style={{ color: "#cfbd97" }}>Points de fidélité</label>
                    </div>
                </div>
                <div className="row justify-content-around mb-3">
                    <div className="col-5 text-center" style={{ background: 'linear-gradient(to bottom,#cfbd97,#69604D)', borderRadius: "5px" }}>
                        <label style={{ fontFamily: 'milonga' }}>Points restants</label>
                        <div>{pointsRestant} pts</div>
                    </div>
                    <div className="col-5 text-center" style={{ background: 'linear-gradient(to bottom,#cfbd97,#69604D)', borderRadius: "5px" }}>
                        <label style={{ fontFamily: 'milonga' }}>Points épuisés</label>
                        <div>{pointsEpuises} pts</div>
                    </div>
                </div>
            </div>

            {/* Section parrainage */}
            <div className="container-fluid">
                <div className="row mb-3">
                    <div className="col text-center">
                        <label className="h6" style={{ color: "#cfbd97" }}>Parrainage</label>
                    </div>
                </div>
                <div className="row justify-content-center mb-3">
                    <button className="btn col-6" style={{ background: 'linear-gradient(to bottom,#cfbd97,#69604D)', borderRadius: "5px" }}>QCWi34</button>
                </div>

                {/* Étudiants parrainés */}
                <div className="row mb-3">
                    <div className="col text-center">
                        <label className="h6" style={{ color: "#cfbd97" }}>Étudiants parrainés</label>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row mb-2" style={{ borderBottom: '1px solid white', borderRadius: "10px" }}>
                        <div className="col d-flex justify-content-between">
                            <label>Lisa M.</label>
                            <button className="btn btn" style={{ borderRadius: "5px", backgroundColor: '#779D7F', borderRadius: '15px', marginBottom: '10px' }}>Reçu</button>
                        </div>
                    </div>

                    <div className="row mb-2" style={{ borderBottom: '1px solid white', borderRadius: "10px" }}>
                        <div className="col d-flex justify-content-between">
                            <label>André C.</label>
                            <button className="btn " style={{ borderRadius: "5px", backgroundColor: '#B78B8B', borderRadius: '15px', marginBottom: '10px' }}>Non Reçu</button>
                        </div>
                    </div>

                    <div className="row mb-2" style={{ borderBottom: '1px solid white', borderRadius: "10px" }}>
                        <div className="col d-flex justify-content-between">
                            <label>Gabby N.</label>
                            <button className="btn " style={{ borderRadius: "5px", backgroundColor: '#B78B8B', borderRadius: '15px', marginBottom: '10px' }}>Non Reçu</button>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mb-3">
                        <Link to={"/acceuil"}>
                            <button className="btn btn-danger" style={{ borderRadius: "5px" }}>Déconnexion</button>
                        </Link>
                    </div>
                </div>

                {/* Bouton Retour */}
                <div className="d-flex justify-content-center mt-3">
                    <button className="btn btn-secondary" onClick={handleGoBack} style={{ borderRadius: "5px" }}>Retour</button>
                </div>
            </div>
        </div>
    );
}

export default Profil;
