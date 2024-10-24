import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FormMotDePasseOublie = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = "L'adresse e-mail est requise.";
        }
        if (!formData.password) {
            newErrors.password = "Le mot de passe est requis.";
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "La confirmation du mot de passe est requise.";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";
        }

        if (Object.keys(newErrors).length === 0) {
            setFormData({
                email: '',
                password: '',
                confirmPassword: ''
            });
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <form className="w-75 mx-auto mb-4" onSubmit={handleSubmit}>
            <div className="row justify-content-center mb-5">
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Adresse e-mail</label>
                    <input id="email" name="email" type="email" className="form-control rounded-pill" value={formData.email} onChange={handleChange} />
                    {errors.email && <div className="text-danger">{errors.email}</div>}
                </div>
            </div>
            <div className="row justify-content-center mb-2">
                <p className="mb-3">Utilisez au moins 8 caractères (lettres, chiffres, majuscules) *</p>
            </div>
            <div className="row mb-5">
                <div className="col-md-6 mb-3 position-relative">
                    <label htmlFor="password" className="form-label">Mot de passe</label>
                    <input id="password" name="password" type={showPassword ? "text" : "password"} className="form-control rounded-pill" value={formData.password} onChange={handleChange} />
                    <i className={showPassword ? 'fas fa-eye-slash password-eye' : 'fas fa-eye password-eye'} onClick={togglePasswordVisibility} style={{ cursor: 'pointer', position: 'absolute', right: '20px', top: '45px', zIndex: 2 }} ></i>
                    {errors.password && <div className="text-danger">{errors.password}</div>}
                </div>
                <div className="col-md-6 mb-3 position-relative">
                    <label htmlFor="confirmPassword" className="form-label">Confirmer le mot de passe</label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        className="form-control rounded-pill"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    <i
                        className={showPassword ? 'fas fa-eye-slash password-eye' : 'fas fa-eye password-eye'}
                        onClick={togglePasswordVisibility}
                        style={{ cursor: 'pointer', position: 'absolute', right: '20px', top: '45px', zIndex: 2 }}
                    ></i>
                    {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                </div>
            </div>
            <div className="text-center mb-4">
                <button type="submit" className="btn btn-dark rounded-pill px-5">Envoyer</button>
            </div>
        </form>
    );
};

export default FormMotDePasseOublie;
