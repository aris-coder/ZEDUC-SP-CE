<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    use HasFactory;

    protected $table = 'promotions';

    protected $primaryKey = 'id_promotion';

    // Les attributs que vous pouvez remplir
    protected $fillable = [
        'titre',
        'description',
        'date_debut',
        'date_fin',
    ];
}
