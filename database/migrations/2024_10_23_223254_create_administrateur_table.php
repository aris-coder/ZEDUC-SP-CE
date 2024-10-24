<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('administrateur', function (Blueprint $table) {
            $table->unsignedInteger('id_administrateur');
            $table->timestamps();

            // Clé étrangère
            $table->foreign('id_administrateur')->references('id_utilisateur')->on('utilisateurs')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('administrateur');
    }
};

