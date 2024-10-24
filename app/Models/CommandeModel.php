<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commande extends Model
{
    use HasFactory;

    protected $table = 'commandes';

    protected $fillable = [
        'id_etudiant',
        'montant_total_commande',
        'type',
        'statut_commande',
        'date_commande',
    ];

    public function etudiant()
    {
        return $this->belongsTo(Etudiant::class, 'id_etudiant');
    }

    public function detailCommandes()
    {
        return $this->hasMany(DetailCommande::class, 'id_commande');
    }

    public function livraison()
    {
        return $this->hasOne(Livraison::class, 'id_commande');
    }

    public function paiement()
    {
        return $this->hasMany(Paiement::class, 'id_commande');
    }
}
