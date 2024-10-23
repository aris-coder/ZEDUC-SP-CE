// src/interface_commande/InterfaceCommande.jsx
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const InterfaceCommande = () => {
    const styles = {
        body: {
            fontFamily: 'Milonga, serif',
            background: "linear-gradient(to bottom, #CFBD97, #69604D)",
            margin: 0,
            padding: 0,
        },
    };

    return (
        <div style={styles.body}>
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default InterfaceCommande;
