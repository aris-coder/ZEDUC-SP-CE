<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Utilisateur extends Model
{

    protected $table = 'utilisateurs'; // Nom de la table

    protected $primaryKey = 'id_utilisateur'; // Clé primaire

    protected $fillable = [
        'nom_utilisateur', 
        'email', 
        'numero_telephone', 
        'mot_de_passe', 
        'role'
    ];

    protected $hidden = [
        'mot_de_passe'
    ];

    // Définir la relation avec Étudiant
    public function etudiant()
    {
        return $this->hasOne(Etudiant::class, 'id_utilisateur');
    }

    // Définir la relation avec Employé
    public function employe()
    {
        return $this->hasOne(Employe::class, 'id_utilisateur');
    }

    // Définir la relation avec Administration
    public function administration()
    {
        return $this->hasOne(Administration::class, 'id_utilisateur');
    }
}
