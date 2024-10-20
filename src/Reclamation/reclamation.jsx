import React from "react";

function Reclamation() {
    const pageStyle = {
        background: 'linear-gradient(to top, #CFBD97, #69604D)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    return (
        <div style={pageStyle}>
            <div className="container" style={{ background: "linear-gradient(to bottom, #CFBD97, #69604D)", padding: '30px', borderRadius: '10px', maxWidth: '600px', marginBottom: '15px', marginTop: '15px', width: '100%' }}>
                <div className="text-center mb-4">
                    <label style={{ fontWeight: 'bold', fontSize: '24px', color: 'black' }}>Faire une Réclamation</label>
                </div>

                <div className="row mb-3">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <label style={{ color: 'black', fontWeight: 'bold', flex: '1' }}>ID commande</label>
                        <input placeholder='Veillez entrer le ID de votre commande' type="text" className="form-control" style={{ flex: '2', minWidth: '200px' }} />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <label style={{ color: 'black', fontWeight: 'bold', flex: '1' }}>Type</label>
                        <select className="form-control" style={{ flex: '2', minWidth: '200px' }}>
                            <option value="">Nourriture</option>
                            <option value="option1">Mange</option>
                            <option value="option2">Dors</option>
                            <option value="option3">Nourriture</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col-12">
                        <label style={{ color: 'black', fontWeight: 'bold' }}>Commentaire</label>
                        <textarea placeholder='veillez entrer un commentaire' className="form-control" style={{ height: '150px', width: '100%' }} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <button className="btn btn-success" style={{ width: '48%' }}>Soumettre</button>
                        <button className="btn btn-danger" style={{ width: '48%' }}>Annuler</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reclamation;
