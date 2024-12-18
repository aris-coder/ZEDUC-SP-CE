<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReponseReclamation extends Model
{
    protected $table = 'reponses_reclamations';

    protected $fillable = [
        'id_reclamation',
        'texte_reponse',
    ];

    public function reclamation()
    {
        return $this->belongsTo(Reclamation::class, 'id_reclamation');
    }
}
