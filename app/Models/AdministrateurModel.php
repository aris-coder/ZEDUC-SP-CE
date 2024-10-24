<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Administration extends Model
{
    use HasFactory;

    protected $table = 'administrations'; // Nom de la table

    protected $primaryKey = 'id_administration'; // Clé primaire

    protected $fillable = [
        'id_utilisateur', // Clé étrangère
        'nom',
        'role',
    ];

    // Définir la relation avec Utilisateur
    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class, 'id_utilisateur');
    }
}