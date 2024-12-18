<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('gerants', function (Blueprint $table) {
            $table->unsignedInteger('id_gerant');
            $table->timestamps();

            // Clé étrangère
            $table->foreign('id_gerant')->references('id_utilisateur')->on('utilisateurs')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('gerants');
    }
};

