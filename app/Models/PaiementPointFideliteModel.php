<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PaiementPointsFidelite extends Model
{
    use HasFactory;

    protected $table = 'paiement_points_fidelite';
    protected $primaryKey = 'id_point_fidelite';
    public $timestamps = true;

    protected $fillable = [
        'id_point_fidelite',
        'points_fidelite_correspondant',
    ];

    // Relation avec la table Paiement
    public function paiement()
    {
        return $this->belongsTo(Paiement::class, 'id_point_fidelite');
    }
}