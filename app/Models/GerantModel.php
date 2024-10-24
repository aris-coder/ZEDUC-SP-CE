<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gerant extends Model
{
    use HasFactory;

    protected $table = 'gérants';

    protected $primaryKey = 'id_gerant'; // Définir la clé primaire

    public $incrementing = false; // L'ID n'est pas auto-incrémenté

    protected $fillable = [
        // Aucune colonne spécifique à remplir ici
    ];

    public function utilisateur()
    {
        return $this->belongsTo(Utilisateur::class, 'id_gerant', 'id_utilisateur');
    }
}
