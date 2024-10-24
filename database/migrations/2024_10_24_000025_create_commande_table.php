<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('commandes', function (Blueprint $table) {
            $table->increments('id_commande'); 
            $table->unsignedInteger('id_etudiant'); // Assurez-vous que ce soit le même type que dans 'etudiants'
            $table->decimal('montant_total_commande', 10, 2);
            $table->enum('type', ['à emporter', 'livrer']);
            $table->enum('statut_commande', ['en attente', 'validé', 'expiré']);
            $table->dateTime('date_commande');
            $table->timestamps();

            // Clé étrangère
            $table->foreign('id_etudiant')->references('id_etudiant')->on('etudiants')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('commandes');
    }
};

