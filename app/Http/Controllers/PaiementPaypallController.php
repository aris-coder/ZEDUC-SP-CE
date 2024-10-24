<?php

namespace App\Http\Controllers;

use App\Models\PaiementPaypal;
use Illuminate\Http\Request;

class PaiementPaypalController extends Controller
{
    // Liste tous les paiements PayPal
    public function index()
    {
        $paiementsPaypal = PaiementPaypal::all();
        return response()->json($paiementsPaypal);
    }

    // Affiche un paiement PayPal spécifique
    public function show($id)
    {
        $paiementPaypal = PaiementPaypal::findOrFail($id);
        return response()->json($paiementPaypal);
    }

    // Crée un nouveau paiement PayPal
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'id_paypal' => 'required|integer|exists:paiement,id_commande',
        ]);

        $paiementPaypal = PaiementPaypal::create($validatedData);
        return response()->json($paiementPaypal, 201);
    }

    // Met à jour un paiement PayPal
    public function update(Request $request, $id)
    {
        $paiementPaypal = PaiementPaypal::findOrFail($id);

        $validatedData = $request->validate([
            'id_paypal' => 'required|integer|exists:paiement,id_commande',
        ]);

        $paiementPaypal->update($validatedData);
        return response()->json($paiementPaypal);
    }

    // Supprime un paiement PayPal
    public function destroy($id)
    {
        $paiementPaypal = PaiementPaypal::findOrFail($id);
        $paiementPaypal->delete();
        return response()->json(null, 204);
    }
}
