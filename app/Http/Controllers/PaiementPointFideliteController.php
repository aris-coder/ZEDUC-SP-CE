<?php

namespace App\Http\Controllers;

use App\Models\PaiementPointFidelite;
use Illuminate\Http\Request;

class PaiementPointFideliteController extends Controller
{
    // Liste tous les paiements via points de fidélité
    public function index()
    {
        $paiements = PaiementPointFidelite::all();
        return response()->json($paiements);
    }

    // Affiche un paiement via points de fidélité spécifique
    public function show($id)
    {
        $paiement = PaiementPointFidelite::findOrFail($id);
        return response()->json($paiement);
    }

    // Crée un nouveau paiement via points de fidélité
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'id_point_fidelite' => 'required|integer|exists:paiement,id_commande',
            'points_fidelite_correspondant' => 'required|integer',
        ]);

        $paiement = PaiementPointFidelite::create($validatedData);
        return response()->json($paiement, 201);
    }

    // Met à jour un paiement via points de fidélité
    public function update(Request $request, $id)
    {
        $paiement = PaiementPointFidelite::findOrFail($id);

        $validatedData = $request->validate([
            'points_fidelite_correspondant' => 'required|integer',
        ]);

        $paiement->update($validatedData);
        return response()->json($paiement);
    }

    // Supprime un paiement via points de fidélité
    public function destroy($id)
    {
        $paiement = PaiementPointFidelite::findOrFail($id);
        $paiement->delete();
        return response()->json(null, 204);
    }
}
