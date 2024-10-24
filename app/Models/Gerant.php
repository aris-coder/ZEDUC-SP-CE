<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gerant extends Model
{
    protected $table = 'gerants'; // Nom de la table

    protected $primaryKey = 'id_gerant'; // Clé primaire

    protected $fillable = [
        'id_utilisateur', // Clé étrangère
    ];

    // Définir la relation avec Utilisateur
    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class, 'id_utilisateur');
    }
}
