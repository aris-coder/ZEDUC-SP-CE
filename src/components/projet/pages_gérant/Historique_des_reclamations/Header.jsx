// src/interface_commande/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const styles = {
        header: {
            background: 'linear-gradient(to top, #69604D, #69604D)',
            color: '#fff',
            padding: '10px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        nav: {
            display: 'flex',
            gap: '20px',
            color: 'white',
        },
        logo: {
            height: '85px',
        },
        profileLogo: {
            height: '60px',
        },
    };

    return (
        <header style={styles.header}>
            <img src="./assets/logo_de_l'entreprise.png" alt="Logo de l'entreprise" style={styles.logo} />
            <nav style={styles.nav}>
                <a href="#" className="text-white text-decoration-none">Accueil</a>
                <a href="#" className="text-white text-decoration-none">Commandes en attentes</a>
                <a href="#" className="text-white text-decoration-none">Réclamations</a>
                <a href="#" className="text-white text-decoration-none">Mise à jour menu</a>
                <a href="#" className="text-white text-decoration-none">Statistiques</a>
            </nav>
            <Link to={{ pathname: "/profil", state: { nom: "Tchakokam", prenom: "Reine", telephone: "XXXX", email: "tchakokam.reine@gmail.com" } }}>
                <img src="./assets/Profil_Utilisateur.png" alt="Logo Profil Utilisateur" style={styles.profileLogo} />
            </Link>
        </header>
    );
};

export default Header;
