<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('parrainages', function (Blueprint $table) {
            $table->unsignedInteger('id_parrain');
            $table->unsignedInteger('filleul_id')->primary;
            $table->enum('statut_parrainage', ['récompense obtenue', 'récompense non obtenue']);
            $table->timestamps();

            // Clés étrangères
            $table->foreign('id_parrain')->references('id_etudiant')->on('etudiants')->onDelete('cascade');
            $table->foreign('filleul_id')->references('id_etudiant')->on('etudiants')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('parrainages');
    }
};
