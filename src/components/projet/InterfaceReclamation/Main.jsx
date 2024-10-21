// src/interface_commande/Main.jsx
import React, { useState } from 'react';

const Main = () => {
    const styles = {
        main: {
            background: 'linear-gradient(to top, #69604D, #69604D)',
            display: 'grid',
            placeItems: 'center',
            minHeight: '100vh',
        },
        box: {
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            minWidth: '1000px',
        },
        buttonContainer: {
            display: 'flex',
            gap: '10px',
            justifyContent: 'center',
        },
        buttonPrimary: {
            padding: '10px 90px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#A49474',
            color: 'white',
            cursor: 'pointer',
        },
        buttonSecondary: {
            padding: '10px 90px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#000000',
            color: 'white',
            cursor: 'pointer',
        },
    };
        const [message, setMessage] = useState('');
    
        const handleChange = (event) => {
            setMessage(event.target.value);
        };

    return (
        <main style={styles.main}>
            <hr />
            <div className="mb-4">
                <div style={styles.box} className="shadow-sm text-center">
                    <h1>Informations générales</h1>
                    <hr />
                    <p>ID Reclamation : REC000001</p>
                    <p>Date d'envoi : 12/10/2024</p>
                    <p>ID Commande : COM000001</p>
                    <p>Statut : En cours de traitement</p>
                    <p>texte réclamation : mon plat de Eru est petit</p>
                </div>
            </div>
            <hr />
            <div className="mb-4">
                <div style={styles.box} className="shadow-sm text-center">
                    <h1>Détails de l'utilisateur</h1>
                    <hr />
                    <p>Nom : Tchakokam Reine</p>
                    <p>Email : tchakokam.reine@gmail.com</p>
                    <p>Téléphone : XXXX</p>
                </div>
            </div>
            <hr />
            <div className="mb-4">
                <h2>Veuillez entrer la réponse</h2>
            </div>
            <hr />
            <div className="mb-4">
                <div style={styles.box} className="shadow-sm text-center">
                    <input
                        type="text"
                        value={message}
                        onChange={handleChange}
                        placeholder="Entrer la réponse à la réclamation"
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc"
                        }}
                    />
                </div>
            </div>
            <hr />
            <div className="mb-4">
                <div style={styles.box} className="shadow-sm text-center">
                    <div style={styles.buttonContainer}>
                        <button style={styles.buttonPrimary}>Soumettre la reponse</button>
                        <button style={styles.buttonSecondary}>Rejéter la reclamation</button>
                    </div>
                </div>
            </div>
            <hr />
        </main>
    );
};

export default Main;
