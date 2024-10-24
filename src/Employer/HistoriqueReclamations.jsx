import React, { useEffect, useState } from "react";
import FooterComponent from "../acceuil/footerComponent";
import Style from "../Styles/StyleEmployer";
import PlatI from '../images/PlatI.png';
import PlatII from '../images/PlatII.png';
import SearchII from '../images/SearchII.png'
import InterfaceReclamations from "./InterfaceReclamations";
import close from '../images/Close.png';
import Header from "./HeaderEmployer";

const HistoriqueReclamation = () => {

    const data = [
        {
            col2: <p style={{ fontFamily: 'Milonga, serif', color: 'white' }}>REC000001</p>,
            col3: <p style={{ fontFamily: 'Milonga, serif', color: 'white' }}>12/10/2024</p>,
            col4: <p style={{ fontFamily: 'Milonga, serif', color: 'white' }}>CL000000001</p>,
            col5: <p style={{ fontFamily: 'Milonga, serif', display: 'flex', alignItems: 'center', gap: '10px', color: 'white' }}>
                <button className="btn-circle" style={{ backgroundColor: '#32CD32', width: '25px', height: '25px', borderRadius: '50%' }}></button>
                Réponse acceptée
            </p>,
        },
        {
            col2: <p style={{ fontFamily: 'Milonga, serif', color: 'white' }}>REC000002</p>,
            col3: <p style={{ fontFamily: 'Milonga, serif', color: 'white' }}>12/10/2024</p>,
            col4: <p style={{ fontFamily: 'Milonga, serif', color: 'white' }}>CL000000002</p>,
            col5: <p style={{ fontFamily: 'Milonga, serif', display: 'flex', alignItems: 'center', gap: '10px', color: 'white' }}>
                <button className="btn-circle" style={{ backgroundColor: 'red', width: '25px', height: '25px', borderRadius: '50%' }}></button>
                Réponse rejetée
            </p>,
        },
        {
            col2: <p style={{ fontFamily: 'Milonga, serif', color: 'white' }}>REC000003</p>,
            col3: <p style={{ fontFamily: 'Milonga, serif', color: 'white' }}>12/10/2024</p>,
            col4: <p style={{ fontFamily: 'Milonga, serif', color: 'white' }}>CL000000003</p>,
            col5: <p style={{ fontFamily: 'Milonga, serif', display: 'flex', alignItems: 'center', gap: '10px', color: 'white' }}>
                <button className="btn-circle" style={{ backgroundColor: '#D3D3D3', width: '25px', height: '25px', borderRadius: '50%' }}></button>
                Non répondu
            </p>,
        },
        {
            col2: <p style={{ fontFamily: 'Milonga, serif', color: 'white' }}>REC000004</p>,
            col3: <p style={{ fontFamily: 'Milonga, serif', color: 'white' }}>12/10/2024</p>,
            col4: <p style={{ fontFamily: 'Milonga, serif', color: 'white' }}>CL000000004</p>,
            col5: <p style={{ fontFamily: 'Milonga, serif', display: 'flex', alignItems: 'center', gap: '10px', color: 'white' }}>
                <button className="btn-circle" style={{ backgroundColor: '#32CD32', width: '25px', height: '25px', borderRadius: '50%' }}></button>
                En cours de traitement
            </p>,
        },
    ];




    const [showPopup, setShowPopup] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    useEffect(() => {
        if (showPopup) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showPopup]);

    const handleRowClick = (row) => {
        setSelectedRow(row);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const [searchTerm, setSearchTerm] = useState('');
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Recherche pour : $(searchTerm)');
    };

    return (
        <div>
            <Style />
            <header style={{ position: 'relative', zIndex: 10 }}>
                <Header />
            </header>
            <main>
                <div style={{ minHeight: '200vh' }}>
                    <div className="container header-container position-relative"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            maxWidth: "1200px",
                            margin: "0 auto",
                            position: "relative",
                            padding: "30px",
                        }}>
                        <img src={PlatII} alt="dg" className="PlatII2" />
                        <div className="header-text text-center" style={{ flexGrow: "0", padding: "0 120px", zIndex: "1" }}>
                            <h1 className="header-title" style={{ fontFamily: "Milonga, sans-serif", fontSize: "4rem", marginTop: "90px", color: "white", }}>ZeDuc Sp@ce</h1>
                            <h2 className="header-subtitle" style={{ fontFamily: "Milonga, sans-serif", fontSize: "2rem", marginTop: "20px", color: "white", }}>Inventaire des réclamations</h2>
                        </div>
                        <img src={PlatI} className="PLATI2" alt="poulet" />
                    </div>

                    <div className="col-md-4 col-12 text-center" style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                        <form onSubmit={handleSubmit} style={{ alignItems: "center" }}>
                            <input
                                className="recherche"
                                type="text"
                                placeholder="Faire une recherche par identifiant d’utilisateur"
                                value={searchTerm}
                                onChange={handleChange}
                            />
                            <button
                                type="submit"
                                className="iconrecherche">
                                <img src={SearchII} style={{ width: '20px' }} />
                            </button>
                        </form>
                        <div><p></p></div>
                        <table className="TableauIV" style={{ left: '25px' }}>
                            <thead>
                                <tr>
                                    <th style={{ border: '1px solid black', padding: '8px', color: 'black' }}>Identifiant réclamation</th>
                                    <th style={{ border: '1px solid black', padding: '8px', color: 'black' }}>Date envoi</th>
                                    <th style={{ border: '1px solid black', padding: '8px', color: 'black' }}>Identifiant utilisateur</th>
                                    <th style={{ border: '1px solid black', padding: '8px', color: 'black' }}>État de la réclamation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, rowIndex) => (
                                    <tr key={rowIndex} onClick={() => handleRowClick(row)} style={{ cursor: 'pointer' }}>
                                        <td style={{ border: '1px solid black', padding: '8px' }}>{row.col2}</td>
                                        <td style={{ border: '1px solid black', padding: '8px' }}>{row.col3}</td>
                                        <td style={{ border: '1px solid black', padding: '8px' }}>{row.col4}</td>
                                        <td style={{ border: '1px solid black', padding: '8px' }}>{row.col5}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {showPopup && (
                <div className="popup-design">
                    <div className="popup-content">
                        <InterfaceReclamations />
                    </div>
                    <button onClick={closePopup} className="Croix"><img src={close} style={{ width: '60px' }} /></button>
                </div>
            )}

            <footer>
                <FooterComponent />
            </footer>
        </div>
    );
}

export default HistoriqueReclamation;