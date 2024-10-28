<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reclamation extends Model
{
    protected $table = 'reclamations';

    protected $primaryKey = 'id_reclamation'; // La clé primaire est id_reclamation

    // Les attributs que vous pouvez remplir
    protected $fillable = [
        'id_commande',
        'id_etudiant',
        'texte_reclamation',
        'statut_reclamation',
        'date_envoi',
    ];

    // Relation avec le modèle Commande
    public function commande()
    {
        return $this->belongsTo(Commande::class, 'id_commande');
    }

    // Relation avec le modèle Étudiant
    public function etudiant()
    {
        return $this->belongsTo(Etudiant::class, 'id_etudiant');
    }
}
