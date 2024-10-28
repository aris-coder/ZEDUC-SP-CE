<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PointFidelite extends Model
{
    protected $table = 'points_fidelite';
    protected $primaryKey = 'id_etudiant'; // La clé primaire est id_etudiant

    protected $fillable = [
        'id_etudiant',
        'points_acquis',
        'points_utilises',
    ];

    public function etudiant()
    {
        return $this->belongsTo(Etudiant::class, 'id_etudiant');
    }
}
