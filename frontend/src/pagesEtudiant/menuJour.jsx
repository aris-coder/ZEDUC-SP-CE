import React, { useEffect, useState } from "react";
import axios from "axios";

const MenuJour = () => {
    const [menuDuJour, setMenuDuJour] = useState([]);

    // Fonction pour récupérer le menu du jour
    const fetchMenuDuJour = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/api/menu_du_jour');
            setMenuDuJour(response.data);
        } catch (error) {
            console.error("Erreur lors de la récupération du menu du jour:", error);
        }
    };

    // Utiliser useEffect pour appeler la fonction lors du montage du composant
    useEffect(() => {
        fetchMenuDuJour();
    }, []);

    return (
        <div>
            <p className="fw-bold" style={{ paddingLeft: '150px', fontSize: '20px', fontFamily: 'Milonga, serif', color: 'white' }}>Menu du jour</p>
            <div className="container menujour" style={{ paddingLeft: '90px' }}>
                <br />
                {menuDuJour.length > 0 ? (
                    menuDuJour.map((plat, index) => (
                        <div className="row" key={index}>
                            <div className="col">
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '65px' }}>
                                    <p style={{ fontFamily: 'Milonga, serif' }}>{plat.nom}</p>
                                    <p style={{ fontFamily: 'Be Vietnam Pro, serif', paddingRight: '150px', fontSize: '18px' }}>{plat.prix} FCFA</p>
                                </div>
                                <div className='ligne' style={{ borderBottom: '2px solid black' }}></div>
                                <p style={{ paddingLeft: '65px', fontFamily: 'Be Vietnam Pro, serif', fontSize: '14px', color: 'gray' }}>{plat.description}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{ paddingLeft: '65px', color: 'gray' }}>Aucun plat disponible pour aujourd'hui.</p>
                )}
            </div>
        </div>
    );
};

export default MenuJour;
