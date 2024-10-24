import React, { useState } from "react";
import poulet from '../image/Ellipse 12.png';
import dg from '../image/Ellipse 11.png';
import dge from '../image/dge.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import corbeille from '../image/Trash Can.png';
import moins from '../image/moins.jpeg';
import plus from '../image/Plus Math.png';
import HeaderEtudiant from "../pagesEtudiant/headerEtudiant";

// Constantes pour les articles et les options de paiement
const ARTICLES = [
    { id: 1, nom: 'Poulet DG', prix: 1500, image: dge, indisponible: false },
    { id: 2, nom: 'Poulet DG', prix: 1500, image: dge, indisponible: true },
    { id: 3, nom: 'Poulet DG', prix: 1500, image: dge, indisponible: false },
    { id: 4, nom: 'Poulet DG', prix: 1500, image: dge, indisponible: false },
    { id: 5, nom: 'Poulet DG', prix: 1500, image: dge, indisponible: true },
];

const OPTIONS_PAIEMENT = [
    { id: 1, nom: 'Momo', details: 'Instructions pour Momo...' },
    { id: 2, nom: 'Orange Money', details: 'Instructions pour Orange Money...' },
    { id: 3, nom: 'PayPall', details: 'Instructions pour PayPall...' },
    { id: 4, nom: 'Points de fidélité', details: 'Utilisez vos points de fidélité ici.' },
];

function Panier() {
    const [panier, setPanier] = useState(ARTICLES.map(article => ({ ...article, quantite: 1 })));
    const [showPaymentOverlay, setShowPaymentOverlay] = useState(false);
    const [selectedPaymentOption, setSelectedPaymentOption] = useState(null); // État pour le paiement sélectionné

    const totalAmount = panier.reduce((total, article) => total + (article.prix * article.quantite), 0);
    const articleCount = panier.reduce((total, article) => total + article.quantite, 0);

    const handleIncrement = (articleId) => {
        setPanier(panier.map(article =>
            article.id === articleId ? { ...article, quantite: article.quantite + 1 } : article
        ));
    };

    const handleDecrement = (articleId) => {
        setPanier(panier.map(article =>
            article.id === articleId ? { ...article, quantite: Math.max(1, article.quantite - 1) } : article
        ));
    };

    const handlePayClick = () => {
        setShowPaymentOverlay(true);
    };

    const handleCloseOverlay = () => {
        setShowPaymentOverlay(false);
        setSelectedPaymentOption(null); // Réinitialiser le mode de paiement sélectionné
    };

    const handleSelectPaymentOption = (option) => {
        setSelectedPaymentOption(option); // Mettre à jour l'option sélectionnée
    };

    return (
        <div style={{ background: 'linear-gradient(180deg, rgba(14, 14, 14, 1) 0%, rgba(207, 189, 151, 1) 100%)' }} className="container-fluid">
            <HeaderEtudiant />
            <div className="row d-flex justify-content-center align-items-center" style={{ marginTop: '90px' }}>
                <div className="col d-flex justify-content-center align-items-center" style={{ marginBottom: '10px' }}>
                    <label style={{ color: "white", fontFamily: 'milonga', fontSize: '20px' }}>Mon panier</label>
                </div>
            </div>

            <div className="" style={{ backgroundColor: 'white', padding: '15px', margin: '0 auto', maxWidth: '900px' }}>
                {panier.map((article) => (
                    <div key={article.id} className="row d-flex justify-content-center align-items-center">
                        <div className="row" style={{ backgroundColor: '#B0A285', padding: '10px', maxWidth: '900px', marginBottom: '10px' }}>
                            <div className="col">
                                <img src={article.image} alt={article.nom} style={{ width: '100px', height: '70px' }} />
                            </div>
                            <div className="col d-flex justify-content-center align-items-center">
                                <div className="row">
                                    <label style={{ color: 'white', fontFamily: 'milonga' }}>{article.nom}</label>
                                    <label style={{ color: 'white', fontFamily: 'milonga' }}>{article.indisponible ? 'Indisponible' : 'Disponible'}</label>
                                    <label style={{ color: 'white', fontFamily: 'milonga' }}>{article.prix} fcfa</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col d-flex justify-content-center align-items-center" style={{ marginBottom: '10px' }}>
                                    <button
                                        className='d-flex justify-content-center align-items-center'
                                        style={{ width: '45px', height: '25px', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', color: '#C3B391', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}
                                        onClick={() => handleDecrement(article.id)}
                                    >
                                        <img src={moins} alt="image soustraction" style={{ width: '20px', height: '12px' }} />
                                    </button>
                                    <button style={{ width: '45px', height: '25px', backgroundColor: '#CFBD97', borderColor: '#CFBD97', color: 'white' }}>{article.quantite}</button>
                                    <button
                                        className='d-flex justify-content-center align-items-center'
                                        style={{ width: '45px', height: '25px', borderTopRightRadius: '10px', borderBottomRightRadius: '10px', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}
                                        onClick={() => handleIncrement(article.id)}
                                    >
                                        <img src={plus} style={{ width: '20px', height: '12px' }} />
                                    </button>
                                </div>
                                <div className="col d-flex justify-content-center align-items-center">
                                    <button className='d-flex justify-content-center align-items-center' style={{ width: '35px', height: '25px', borderRadius: '10px', borderBottomLeftRadius: '10px', backgroundColor: '#CFBD97', borderColor: '#CFBD97' }}>
                                        <img src={corbeille} style={{ width: '20px', height: '12px' }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row d-flex justify-content-center align-items-center" style={{ marginTop: '15px', paddingBottom: '50px' }}>
                <div className="col d-flex justify-content-center align-items-center">
                    <label style={{ marginRight: '10px', color: 'white', fontFamily: 'milonga' }}>{totalAmount} fcfa</label>
                    <button style={{ width: '100px', borderRadius: '15px', backgroundColor: '#69604C', borderColor: '#69604C', fontFamily: 'milonga', color: 'white'}} onClick={handlePayClick}>
                        Payer ({articleCount})
                    </button>
                </div>
            </div>

            {showPaymentOverlay && (
                <div className="overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.7)', zIndex: 1000 }}>
                    <div className="payment-modal" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', borderRadius: '8px', minWidth: '300px' }}>
                        <h5>Choisissez votre moyen de paiement</h5>
                        <ul>
                            {OPTIONS_PAIEMENT.map(option => (
                                <li 
                                    key={option.id} 
                                    style={{ cursor: 'pointer', padding: '5px', backgroundColor: selectedPaymentOption?.id === option.id ? '#CFBD97' : 'white' }} 
                                    onClick={() => handleSelectPaymentOption(option)}
                                >
                                    {option.nom}
                                </li>
                            ))}
                        </ul>

                        {selectedPaymentOption && (
                            <div>
                                <h6>Détails pour {selectedPaymentOption.nom} :</h6>
                                <p>{selectedPaymentOption.details}</p>
                            </div>
                        )}

                        <button onClick={handleCloseOverlay}>Fermer</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Panier;
