<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ValidationReclamation extends Model
{
    use HasFactory;

    protected $table = 'validation_reclamations';

    protected $fillable = [
        'id_reclamation',
        'statut',
    ];

    public function reclamation()
    {
        return $this->belongsTo(Reclamation::class, 'id_reclamation');
    }
}
