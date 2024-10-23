import React from 'react';

function MenuTable({ Menus, onDelete, onModify }) {
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
        <thead
          style={{
            backgroundColor: '#4b4539',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix</th> {/* Colonne Prix */} 
            <th>Statut</th>
            <th>Type</th> 
            <th>Actions</th> {/* Colonne Actions */}
          </tr>
        </thead>
        <tbody>
          {Menus.length > 0 ? (
            Menus.map((Menu) => (
              <tr key={Menu.id}>
                <td>{Menu.id}</td>
                <td>{Menu.nom}</td>
                <td>{Menu.Description}</td>
                <td>{Menu.Prix}</td> {/* Affichage du Prix */}
                <td>{Menu.Statut}</td> {/* Statut inchangé */}
                <td>{Menu.Type}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary mx-1"
                    onClick={() => onModify(Menu)}
                  >
                    Modifier
                  </button>
                  <button
                    className="btn btn-sm btn-danger mx-1"
                    onClick={() => onDelete(Menu.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Aucun Menu trouvé.</td> {/* Correction du colspan */}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MenuTable;
