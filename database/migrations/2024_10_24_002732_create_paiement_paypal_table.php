<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('paiement_paypal', function (Blueprint $table) {
            $table->unsignedInteger('id_paypal')->primary();
            $table->timestamps();

            // Clé étrangère
            $table->foreign('id_paypal')->references('id_commande')->on('paiement')->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('paiement_paypal');
    }
};
