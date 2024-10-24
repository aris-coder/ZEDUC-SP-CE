<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('utilisateurs', function (Blueprint $table) {
            $table->increments('id_utilisateur');
            $table->string('nom_utilisateur');
            $table->string('email')->unique();
            $table->string('numero_telephone');
            $table->string('mot_de_passe', 8);
            $table->dateTime('date_inscription');
            $table->enum('role', ['étudiant', 'employé', 'gérant', 'administrateur']);
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('utilisateurs');
    }
};

