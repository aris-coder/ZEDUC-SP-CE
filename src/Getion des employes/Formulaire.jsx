// src/components/EmployeForm.js
import React, { useState } from 'react';

function EmployeForm({ onAdd }) {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmploye = {
      id: Date.now(),
      prenom,
      nom,
      email,
      telephone,
      role,
    };
    onAdd(newEmploye);
    setPrenom('');
    setNom('');
    setEmail('');
    setTelephone('');
    setRole('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div className="col">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="col">
          <input
            type="tel"
            className="form-control"
            placeholder="Téléphone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Rôle"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-dark" style={{ backgroundColor: '#685F4C', color: '#fff' }}>Ajouter un Employé</button>
        </div>
      </div>
    </form>
  );
}

export default EmployeForm;
