<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('points_fidelite', function (Blueprint $table) {
            $table->unsignedInteger('id_etudiant')->primary;
            $table->integer('points_acquis')->default(10);
            $table->integer('points_utilises')->default(0);
            $table->timestamps();

            // Clé étrangère
            $table->foreign('id_etudiant')->references('id_etudiant')->on('etudiants')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('points_fidelite');
    }
};
