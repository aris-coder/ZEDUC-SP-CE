<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PointFidelite extends Model
{
    use HasFactory;

    protected $table = 'id_etudiant';

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
