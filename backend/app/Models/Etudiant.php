<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Etudiant extends Model
{
    protected $table = 'etudiants'; // Nom de la table

    protected $primaryKey = 'id_etudiant'; // Clé primaire

    protected $fillable = [
        'id_etudiant', // Clé étrangère
        'code_parrainage',
    ];

    // Définir la relation avec Utilisateur
    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class, 'id_utilisateur');
    }
}
