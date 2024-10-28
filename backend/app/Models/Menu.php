<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    // Nom de la table dans la base de données
    protected $table = 'menu';

    // Clé primaire
    protected $primaryKey = 'id_article_menu';

    // Autoriser l'auto-incrémentation de la clé primaire
    public $incrementing = true;

    // Type de la clé primaire 
    protected $keyType = 'int';

    public $timestamps = true;

    // Définir les colonnes pouvant être remplies via un formulaire ou une requête
    protected $fillable = [
        'nom',
        'description',
        'prix',
        'statut',
        'type',
    ];

    // Ajouter éventuellement des casts pour les colonnes spécifiques
    protected $casts = [
        'prix' => 'decimal:2',
        'statut' => 'string',
        'type' => 'string',
    ];
}
