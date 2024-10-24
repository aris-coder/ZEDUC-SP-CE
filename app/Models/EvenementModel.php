<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evenement extends Model
{
    use HasFactory;

    protected $table = 'evenements';

    protected $primaryKey = 'id_evenement';

    // Les attributs que vous pouvez remplir
    protected $fillable = [
        'titre',
        'description',
        'date_debut',
        'date_fin',
    ];
}
