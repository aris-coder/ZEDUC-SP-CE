<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DetailCommande extends Model
{
    use HasFactory;

    protected $table = 'detail_commandes';
    public $incrementing = false; // Puisque la clé primaire est composée
    protected $primaryKey = ['id_commande', 'id_article_menu']; // Clé primaire composée

    protected $fillable = [
        'id_commande',
        'id_article_menu',
        'quantite',
    ];

    public function commande()
    {
        return $this->belongsTo(Commande::class, 'id_commande');
    }

    public function articleMenu()
    {
        return $this->belongsTo(ArticleMenu::class, 'id_article_menu');
    }
}
