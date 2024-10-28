<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('etudiants', function (Blueprint $table) {
            $table->unsignedInteger('id_etudiant'); 
            $table->string('code_parrainage')->unique(); // Code de parrainage unique
            $table->timestamps();

            // Clé étrangère
            $table->foreign('id_etudiant')->references('id_utilisateur')->on('utilisateurs')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('etudiants');
    }
};
