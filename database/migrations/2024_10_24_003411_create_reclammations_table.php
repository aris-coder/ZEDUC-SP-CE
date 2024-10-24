<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('reclamations', function (Blueprint $table) {
            $table->increments('id_reclamation');
            $table->unsignedInteger('id_commande');
            $table->unsignedInteger('id_etudiant');
            $table->text('texte_reclamation');
            $table->enum('statut_reclamation', ['répondu', 'en attente']);
            $table->dateTime('date_envoi');
            $table->timestamps();

            // Clés étrangères
            $table->foreign('id_commande')->references('id_commande')->on('commandes')->onDelete('cascade');
            $table->foreign('id_etudiant')->references('id_etudiant')->on('etudiants')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reclamations');
    }
};
