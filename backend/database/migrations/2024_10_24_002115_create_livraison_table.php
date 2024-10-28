<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('livraison', function (Blueprint $table) {
            $table->unsignedInteger('id_commande')->primary();
            $table->time('heure_livraison');
            $table->date('date_livraison');
            $table->string('adresse_livraison');
            $table->timestamps();

            // Clé étrangère
            $table->foreign('id_commande')->references('id_commande')->on('commandes')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('livraison');
    }
};
