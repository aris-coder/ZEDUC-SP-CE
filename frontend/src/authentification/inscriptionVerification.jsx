import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const FormInscription = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    tel: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.nom) newErrors.nom = "Le nom est requis.";
    if (!formData.prenom) newErrors.prenom = "Le prénom est requis.";
    if (!formData.tel) newErrors.tel = "Le numéro de téléphone est requis.";
    if (!formData.email) {
      newErrors.email = "L'adresse e-mail est requise.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "L'adresse e-mail est invalide.";
    }
    if (!formData.password) newErrors.password = "Le mot de passe est requis.";
    if (!formData.confirmPassword) newErrors.confirmPassword = "La confirmation du mot de passe est requise.";
    else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("Formulaire soumis avec succès:", formData);
      await axios.post("http://127.0.0.1:8000/api/api/utilisateurs", {
        nom_utilisateur: `${formData.nom} ${formData.prenom}`,
        email: formData.email,
        numero_telephone: formData.tel,
        mot_de_passe: formData.password,
        mot_de_passe_confirmation: formData.confirmPassword,
        role: 'étudiant'
      })
      .then((response) => {
        const {role, code_parrainage}= response.data;
        if (role=='étudiant'){
          alert(`Inscription réussie ! Voici votre code de parrainage : ${code_parrainage}`);
        }else{
          alert("Inscription réussie !");
        }
        navigate('/connexion');
      })
      .catch((err) => {
          if (err.response) {
              console.error("Erreur dans la réponse de l'API :", err.response.data);
              alert(`Erreur: ${err.response.data.message || "Inscription échouée"}`);
          } else if (err.request) {
              console.error("Aucune réponse reçue de l'API :", err.request);
              alert("Aucune réponse reçue du serveur.");
          } else {
              console.error("Erreur lors de la requête :", err.message);
              alert(`Erreur: ${err.message}`);
          }
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <form className="w-75 mb-5" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="nom" className="form-label">Nom</label>
          <input id="nom" name="nom" type="text" className="form-control rounded-pill" value={formData.nom} onChange={handleChange} />
          {errors.nom && <div className="text-danger">{errors.nom}</div>}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="prenom" className="form-label">Prénom</label>
          <input id="prenom" name="prenom" type="text" className="form-control rounded-pill" value={formData.prenom} onChange={handleChange} />
          {errors.prenom && <div className="text-danger">{errors.prenom}</div>}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="tel" className="form-label">Numéro de téléphone</label>
          <input id="tel" name="tel" type="tel" className="form-control rounded-pill" value={formData.tel} onChange={handleChange} />
          {errors.tel && <div className="text-danger">{errors.tel}</div>}
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="form-label">Adresse e-mail</label>
          <input id="email" name="email" type="email" className="form-control rounded-pill" value={formData.email} onChange={handleChange} />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6 mb-3 position-relative">
          <label htmlFor="password" className="form-label">Mot de passe</label>
          <input
            id="password" name="password" type={showPassword ? "text" : "password"} className="form-control rounded-pill" value={formData.password} onChange={handleChange} />
          <i className={showPassword ? 'fas fa-eye-slash password-eye' : 'fas fa-eye password-eye'} onClick={togglePasswordVisibility} style={{ cursor: 'pointer', position: 'absolute', right: '20px', top: '45px', zIndex: 2 }}></i>
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>
        <div className="col-md-6 mb-3 position-relative">
          <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
          <input id="confirmPassword" name="confirmPassword" type={showPassword ? "text" : "password"} className="form-control rounded-pill" value={formData.confirmPassword} onChange={handleChange} />
          <i className={showPassword ? 'fas fa-eye-slash password-eye' : 'fas fa-eye password-eye'} onClick={togglePasswordVisibility} style={{ cursor: 'pointer', position: 'absolute', right: '20px', top: '45px', zIndex: 2 }}></i>
          {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
        </div>
      </div>
      <div className="text-center">
        <button type="submit" className="btn btn-dark rounded-pill px-5">S'inscrire</button>
      </div>
    </form>
  );
};

export default FormInscription;
