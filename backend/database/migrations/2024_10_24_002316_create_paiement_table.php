<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('paiement', function (Blueprint $table) {
            $table->unsignedInteger('id_commande')->primary;
            $table->decimal('montant_paye', 10, 2);
            $table->dateTime('date_paiement');
            $table->enum('methode_paiement', ['points de fidélité', 'orange money', 'mobile money', 'paypal']);
            $table->unsignedInteger('id_etudiant');
            $table->timestamps();

            // Clés étrangères
            $table->foreign('id_commande')->references('id_commande')->on('commandes')->onDelete('cascade');
            $table->foreign('id_etudiant')->references('id_etudiant')->on('etudiants')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('paiement');
    }
};
