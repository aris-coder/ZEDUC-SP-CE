import React from 'react';

function EmployeTable({ employes, onDelete, onModify }) {
  return (
      <div className="table-responsive">
       < table className="table table-bordered text-center" style={{ backgroundColor: '#f8f8f8', borderColor: '#685F4C', borderRadius: '10px',
        marginTop: '10px' }} >
      <thead style={{ backgroundColor: '#4b4539', color: 'white',fontWeight: 'bold' }} >
          <tr>
            <th>ID</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Rôle</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employes.length > 0 ? (
            employes.map((employe) => (
              <tr key={employe.id}>
                <td>{employe.id}</td>
                <td>{employe.prenom}</td>
                <td>{employe.nom}</td>
                <td>{employe.email}</td>
                <td>{employe.telephone}</td>
                <td>{employe.role}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary mx-1"
                    onClick={() => onModify(employe)}
                  >
                    Modifier
                  </button>
                  <button
                    className="btn btn-sm btn-danger mx-1"
                    onClick={() => onDelete(employe.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Aucun employé trouvé.</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
  );
}


export default EmployeTable;
