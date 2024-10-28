import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormConnexion = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        mot_de_passe: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate(); 

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = "L'adresse e-mail est requise.";
        }
        if (!formData.mot_de_passe) {
            newErrors.mot_de_passe = "Le mot de passe est requis.";
        }

        if (Object.keys(newErrors).length === 0) {
            console.log("Formulaire soumis avec succès:", formData);

            try {
                // Soumettre les informations de connexion
                const response = await axios.post('http://127.0.0.1:8000/api/api/login', {
                    email: formData.email,
                    mot_de_passe: formData.mot_de_passe,
                  });
                  
                  const utilisateur = response.data.utilisateur;
                  
                  // Faire un GET pour récupérer le rôle de l'utilisateur en fonction de l'email
                  const roleResponse = await axios.get(`http://127.0.0.1:8000/api/api/utilisateurs/email/${utilisateur.email}`);
                  const role = roleResponse.data.role;
                  
                  // Redirection en fonction du rôle
                  if (role === 'étudiant') {
                    navigate('/acceuil_etudiant');
                  } else if (role === 'employé') {
                    navigate('/acceuil_employe');
                  } else if (role === 'administrateur') {
                    navigate('/acceuil_administrateur');
                  } else {
                    // Autre redirection par défaut ou gestion d'erreur
                    navigate('/');
                }
            } catch (err) {
                if (err.response) {
                    console.error("Erreur dans la réponse de l'API :", err.response.data);
                    alert(`Erreur: ${err.response.data.message || "Connexion échouée"}`);
                } else if (err.request) {
                    console.error("Aucune réponse reçue de l'API :", err.request);
                    alert("Aucune réponse reçue du serveur.");
                } else {
                    console.error("Erreur lors de la requête :", err.message);
                    alert(`Erreur: ${err.message}`);
                }
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <form className="w-75 mx-auto mb-4" onSubmit={handleSubmit}>
            <div className="row justify-content-center">
                <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Adresse e-mail</label>
                    <input id="email" name="email" type="email" className="form-control rounded-pill" value={formData.email} onChange={handleChange} />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 mb-3 position-relative">
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input id="password" name="mot_de_passe" type={showPassword ? "text" : "password"} className="form-control rounded-pill" value={formData.password} onChange={handleChange} />
                    <i className={showPassword ? 'fas fa-eye-slash password-eye' : 'fas fa-eye password-eye'} onClick={togglePasswordVisibility} style={{ cursor: 'pointer', position: 'absolute', right: '20px', top: '45px', zIndex: 2 }}></i>
                    {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 mb-5">
                    <Link to='/mot_de_passe_oubli' className="text custom-link">Mot de passe oublié ?</Link>
                </div>
            </div>
            <div className="text-center mb-4">
                <button type="submit" className="btn btn-dark rounded-pill px-5">Se connecter</button>
            </div>
        </form>
    );
};

export default FormConnexion;
