import React from 'react';

function ReclamationTable({ Reclamations = [], onDelete, onModify }) {
  return (
    <div className="table-responsive">
      <table
        className="table table-bordered text-center"
        style={{
          backgroundColor: '#f8f8f8',
          borderColor: '#685F4C',
          borderRadius: '10px',
          marginTop: '10px',
        }}
      >
        <thead style={{ backgroundColor: '#4b4539', color: 'white', fontWeight: 'bold' }}>
          <tr>
            <th>ID Reclamation</th>
            <th>Nom</th>
            <th>Commande</th>
            <th>Date</th>
            <th>Statut</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Reclamations.length > 0 ? (
            Reclamations.map((Reclamation) => (
              <tr key={Reclamation.id}>
                <td>{Reclamation.id}</td>
                <td>{Reclamation.nom}</td>
                <td>{Reclamation.Commande}</td>
                <td>{Reclamation.Date}</td>
                <td>{Reclamation.Statut}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary mx-1"
                    onClick={() => onModify(Reclamation)}
                  >
                    Modifier
                  </button>
                  <button
                    className="btn btn-sm btn-danger mx-1"
                    onClick={() => onDelete(Reclamation.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Aucune Reclamation trouvée.</td> {/* Mis à jour pour 6 colonnes */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ReclamationTable;
