<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employe extends Model
{
    protected $table = 'employes'; // Nom de la table

    protected $primaryKey = 'id_employe'; // Clé primaire

    protected $fillable = [
        'id_utilisateur', // Clé étrangère
    ];

    // Définir la relation avec Utilisateur
    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class, 'id_utilisateur');
    }
}
