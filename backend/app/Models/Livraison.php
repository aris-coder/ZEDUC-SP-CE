<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Livraison extends Model
{
    protected $table = 'livraison';
    protected $primaryKey = 'id_commande'; // La clé primaire est `id_commande`, comme dans la migration

    protected $fillable = [
        'id_commande',
        'heure_livraison',
        'date_livraison',
        'adresse_livraison',
    ];

    public function commande()
    {
        return $this->belongsTo(Commande::class, 'id_commande');
    }
}
