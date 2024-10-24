<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('paiement_points_fidelite', function (Blueprint $table) {
            $table->unsignedInteger('id_point_fidelite')->primary();
            $table->unsignedInteger('points_fidelite_correspondant');
            $table->timestamps();

            // Clé étrangère
            $table->foreign('id_point_fidelite')->references('id_commande')->on('paiement')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('paiement_points_fidelite');
    }
};
