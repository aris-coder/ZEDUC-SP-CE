import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Clients() {

    const pageStyle = {
        background: 'linear-gradient(180deg, rgba(14, 14, 14, 1) 0%, rgba(207, 189, 151, 1) 100%)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const clients = [
        { rang: 1, nom: "Jean Dupont", points: 1500 },
        { rang: 2, nom: "Marie Martin", points: 1400 },
        { rang: 3, nom: "Alex Durand", points: 1300 },
        { rang: 4, nom: "Chloé Bernard", points: 1200 },
        { rang: 5, nom: "Paul Moreau", points: 1100 },
        { rang: 6, nom: "Lucie Laurent", points: 1000 },
        { rang: 7, nom: "Sophie Petit", points: 900 },
        { rang: 8, nom: "Nicolas Lefebvre", points: 800 },
        { rang: 9, nom: "Laura Simon", points: 700 },
        { rang: 10, nom: "Mathieu Dubois", points: 600 }
    ];

    return (
        <div style={pageStyle}>
            <div className="row">
                <div className="row">
                    <div className="col text-center" style={{ fontSize: '1.9em', marginBottom: '25px', marginTop: '50px' }}>
                        <label className="text-white">Top des 10 meilleurs clients</label>
                    </div>
                </div>

                {clients.map((client, index) => (
                    <div key={index} className="row text-center mb-2" style={{
                        background: index % 2 === 0 ? "#796C52" : "#CFBD97",
                        width: '100%',
                        maxWidth: '680px',
                        margin: '0 auto',
                        padding: '10px',
                        marginBottom: '20px',
                        borderRadius: '15px',
                        color: 'white'
                    }}>
                        <div className="col">
                            <label>{client.rang}</label> 
                        </div>
                        <div className="col">
                            <label>{client.nom}</label> 
                        </div>
                        <div className="col">
                            {client.points} Points 
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Clients;
