<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Parrainage extends Model
{
    protected $table = 'parrainages';

    protected $primaryKey = 'filleul_id'; // La clé primaire est filleul_id

    // Les attributs que vous pouvez remplir
    protected $fillable = [
        'id_parrain',
        'statut_parrainage',
    ];

    // Relation avec le modèle Étudiant pour le parrain
    public function parrain()
    {
        return $this->belongsTo(Etudiant::class, 'id_parrain');
    }

    // Relation avec le modèle Étudiant pour le filleul
    public function filleul()
    {
        return $this->belongsTo(Etudiant::class, 'filleul_id');
    }
}
