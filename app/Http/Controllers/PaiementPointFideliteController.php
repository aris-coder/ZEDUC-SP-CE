<?php

namespace App\Http\Controllers;

use App\Models\PaiementPointsFidelite;
use Illuminate\Http\Request;

class PaiementPointsFideliteController extends Controller
{
    // Liste tous les paiements via points de fidélité
    public function index()
    {
        $paiements = PaiementPointsFidelite::all();
        return response()->json($paiements);
    }

    // Affiche un paiement via points de fidélité spécifique
    public function show($id)
    {
        $paiement = PaiementPointsFidelite::findOrFail($id);
        return response()->json($paiement);
    }

    // Crée un nouveau paiement via points de fidélité
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'id_point_fidelite' => 'required|integer|exists:paiement,id_commande',
            'points_fidelite_correspondant' => 'required|integer',
        ]);

        $paiement = PaiementPointsFidelite::create($validatedData);
        return response()->json($paiement, 201);
    }

    // Met à jour un paiement via points de fidélité
    public function update(Request $request, $id)
    {
        $paiement = PaiementPointsFidelite::findOrFail($id);

        $validatedData = $request->validate([
            'points_fidelite_correspondant' => 'required|integer',
        ]);

        $paiement->update($validatedData);
        return response()->json($paiement);
    }

    // Supprime un paiement via points de fidélité
    public function destroy($id)
    {
        $paiement = PaiementPointsFidelite::findOrFail($id);
        $paiement->delete();
        return response()->json(null, 204);
    }
}
