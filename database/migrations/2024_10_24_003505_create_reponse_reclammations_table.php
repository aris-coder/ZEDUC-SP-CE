<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('reponses_reclamations', function (Blueprint $table) {
            $table->unsignedInteger('id_reclamation')->primary;
            $table->text('texte_reponse');
            $table->timestamps();

            // Clé étrangère
            $table->foreign('id_reclamation')->references('id_reclamation')->on('reclamations')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('reponses_reclamations');
    }
};
