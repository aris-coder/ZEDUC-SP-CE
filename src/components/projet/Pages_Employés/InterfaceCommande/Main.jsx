// src/interface_commande/Main.jsx
import React from 'react';

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

    return (
        <main style={styles.main}>
            <hr />
            <div className="mb-4">
                <div style={styles.box} className="shadow-sm text-center">
                    <h1>Informations générales</h1>
                    <hr />
                    <p>ID Commande : COM000001</p>
                    <p>Date Commande : 12/10/2024</p>
                    <p>Type : Livraison</p>
                    <p>Adresse de livraison : Palace</p>
                    <p>Montant : XXX</p>
                    <p>Statut : En cours de traitement</p>
                    <p>Heure Livraison : 19:00</p>
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
                <div style={styles.box} className="shadow-sm text-center">
                    <h1>Articles commandés</h1>
                    <hr />
                    <p>O'kok</p>
                    <p>Eru</p>
                    <p>Poulet pané</p>
                </div>
            </div>
            <hr />
            <div className="mb-4">
                <div style={styles.box} className="shadow-sm text-center">
                    <div style={styles.buttonContainer}>
                        <button style={styles.buttonPrimary}>Modifier statut</button>
                        <button style={styles.buttonSecondary}>Ajouter un commentaire</button>
                    </div>
                </div>
            </div>
            <hr />
        </main>
    );
};

export default Main;
