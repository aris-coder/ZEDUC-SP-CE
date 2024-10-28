<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PaiementPaypal extends Model
{
    // Nom de la table
    protected $table = 'paiement_paypal';

    // Clé primaire
    protected $primaryKey = 'id_paypal';

    // Les champs modifiables
    protected $fillable = [
        'id_paypal',
    ];

    // Relations
    public function paiement()
    {
        return $this->belongsTo(Paiement::class, 'id_paypal', 'id_commande');
    }
}
