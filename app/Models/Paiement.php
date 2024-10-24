<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Paiement extends Model
{
    protected $table = 'paiement';
    protected $primaryKey = 'id_paiement';
    public $timestamps = true;

    protected $fillable = [
        'id_commande',
        'montant_paye',
        'date_paiement',
        'methode_paiement',
        'id_etudiant',
    ];

    // Relation avec la table Commandes
    public function commande()
    {
        return $this->belongsTo(Commande::class, 'id_commande');
    }

    // Relation avec la table Etudiants
    public function etudiant()
    {
        return $this->belongsTo(Etudiant::class, 'id_etudiant');
    }
}
