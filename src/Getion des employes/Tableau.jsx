// src/components/EmployeTable.js
import React from 'react';

function EmployeTable({ employes, onDelete, onModify }) {
  return (
    <table className="table table-bordered text-center" style={{ backgroundColor: '#f8f8f8', borderColor: '#685F4C' }} >
      <thead style={{ backgroundColor: '#4b4539', color: 'white' }} >
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
        {employes.map((employe) => (
          <tr key={employe.id}>
            <td>{employe.id}</td>
            <td>{employe.prenom}</td>
            <td>{employe.nom}</td>
            <td>{employe.email}</td>
            <td>{employe.telephone}</td>
            <td>{employe.role}</td>
            <td>
            <button className="btn btn-sm btn-primary" onClick={() => onModify(employe.id)}>Modifier</button>
              <button className="btn btn-sm btn-danger" onClick={() => onDelete(employe.id)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeTable;
