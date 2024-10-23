// src/interface_commande/Footer.jsx
import React from 'react';

const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: '#333',
            color: '#fff',
            textAlign: 'center',
            padding: '10px 0',
        },
    };

    return (
        <footer style={styles.footer}>
            <nav style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '10px' }}>
                {['Aide', 'À propos', 'Déconnexion', 'Réclamation', 'Commande', 'Jeux & Évènements'].map((item, index) => (
                    <a href="#" key={index} className="text-white text-decoration-none">{item}</a>
                ))}
            </nav>
            <p>&copy; 2024 Zeduc-Sp@ce. Tous droits réservés.</p>
        </footer>
    );
};

export default Footer;
