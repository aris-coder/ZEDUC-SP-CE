<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('detail_commandes', function (Blueprint $table) {
            $table->unsignedInteger('id_commande');
            $table->unsignedInteger('id_article_menu');
            $table->integer('quantite');
            $table->timestamps();

            $table->primary(['id_commande', 'id_article_menu']);

            // Clés étrangères
            $table->foreign('id_commande')->references('id_commande')->on('commandes')->onDelete('cascade');
            $table->foreign('id_article_menu')->references('id_article_menu')->on('menu')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('detail_commandes');
    }
};
