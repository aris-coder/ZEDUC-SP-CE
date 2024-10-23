// src/interface_commande/InterfaceCommande.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const InterfaceCommande = () => {
    const styles = {
        body: {
            fontFamily: 'Milonga, serif',
            backgroundColor: '#f4f4f4',
            margin: 0,
            padding: 0,
        },
        header: {
            backgroundColor: '#333',
            color: '#fff',
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        
        nav: {
            display: 'flex',
            gap: '20px',
            color : 'white',
        },
        footer: {
            backgroundColor: '#333',
            color: '#fff',
            textAlign: 'center',
            padding: '10px 0',
            position: 'relative',
            bottom: 0,
            width: '100%',
        },
        logo: {
            height: '85px',
        },
        profileLogo: {
            height: '60px',
        },
        box: {
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            minWidth: '1000px', // Largeur fixe pour les boxes
        },
        buttonContainer: {
            display: 'flex',
            gap: '10px', // Espace entre les boutons
            justifyContent: 'center', // Centre les boutons horizontalement
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
        main: {
            display: 'grid',
            placeItems: 'center', // Centre horizontalement et verticalement
            minHeight: '100vh', // Optionnel : pour centrer verticalement dans tout l'écran
        },
        
    };

    return (
        <div style={styles.body}>
            <header style={styles.header}>
                <img src="./assets/logo_de_l'entreprise.png" alt="Logo de l'entreprise" style={styles.logo} />
                <nav style={styles.nav}>
                    <a href="#" className="text-white text-decoration-none">Accueil</a>
                    <a href="#" className="text-white text-decoration-none">Commandes en attentes</a>
                    <a href="#" className="text-white text-decoration-none">Réclamations</a>
                    <a href="#" className="text-white text-decoration-none">Mise à jour menu</a>
                    <a href="#" className="text-white text-decoration-none">Statistiques</a>
                </nav>
                {}
                <Link to={{ pathname: "/profil", state: { nom: "Tchakokam", prenom: "Reine", telephone: "XXXX", email: "tchakokam.reine@gmail.com"} }}>
                    <img src="./assets/Profil_Utilisateur.png" alt="Logo Profil Utilisateur" style={styles.profileLogo} />
                </Link>
            </header>

            <main style={styles.main}>
                <hr></hr>
                <div className="mb-4">
                    <div style={styles.box} className="shadow-sm text-center">
                        <h1>Informations générales</h1>
                        <hr></hr>
                        <p>ID Commande : COM000001</p>
                        <p>Date Commande : 12/10/2024</p>
                        <p>Type : Livraison</p>
                        <p>Montant : XXX</p>
                        <p>Statut : En cours de traitement</p>
                        <p>Heure Livraison : 19:00</p>
                    </div>
                </div>
                <hr></hr>
                <div className="mb-4">
                    <div style={styles.box} className="shadow-sm text-center">
                        <h1>Détails de l'utilisateur</h1>
                        <hr></hr>
                        <p>Nom : Tchakokam Reine</p>
                        <p>Email : tchakokam.reine@gmail.com</p>
                        <p>Adresse : palace</p>
                        <p>Téléphone : XXXX</p>
                    </div>
                </div>
                <hr></hr>
                <div className="mb-4">
                    <div style={styles.box} className="shadow-sm text-center">
                        <h1>Articles commandés</h1>
                        <hr></hr>
                        <p>O'kok</p>
                        <p>Eru</p>
                        <p>Poulet pané</p>
                    </div>
                </div>
                <hr></hr>
                <div className="mb-4">
                    <div style={styles.box} className="shadow-sm text-center">
                        <div style={styles.buttonContainer}>
                            <button style={styles.buttonPrimary}>Modifier statut</button>
                            <button style={styles.buttonSecondary}>Ajouter un commentaire</button>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </main>

            <footer style={styles.footer}>
                <nav style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
                    {['Aide', 'À propos', 'Déconnexion', 'Réclamation', 'Commande', 'Jeux & Évènements'].map((item, index) => (
                        <a href="#" key={index} className="text-white text-decoration-none">{item}</a>
                    ))}
                </nav>
                <p>&copy; 2024 Zeduc-Sp@ce. Tous droits réservés.</p>
            </footer>
        </div>
    );
};

export default InterfaceCommande;
