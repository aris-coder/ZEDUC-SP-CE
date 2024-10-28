<?php

namespace App\Http\Controllers;

use App\Models\Paiement;
use Illuminate\Http\Request;

class PaiementController extends Controller
{
    // Liste tous les paiements
    public function index()
    {
        $paiements = Paiement::all();
        return response()->json($paiements);
    }

    // Affiche un paiement spécifique
    public function show($id)
    {
        $paiement = Paiement::findOrFail($id);
        return response()->json($paiement);
    }

    // Crée un nouveau paiement
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'id_commande' => 'required|integer|exists:commandes,id_commande', // Correction ici, fermeture du string
            'montant_paye' => 'required|numeric',
            'date_paiement' => 'required|date',
            'methode_paiement' => 'required|in:points de fidélité,orange money,mobile money,paypal',
            'id_etudiant' => 'required|integer|exists:etudiants,id_etudiant',
        ]);

        $paiement = Paiement::create($validatedData);
        return response()->json($paiement, 201);
    }

    // Met à jour un paiement
    public function update(Request $request, $id)
    {
        $paiement = Paiement::findOrFail($id);

        $validatedData = $request->validate([
            'montant_paye' => 'sometimes|numeric',
            'date_paiement' => 'sometimes|date',
            'methode_paiement' => 'sometimes|in:points de fidélité,orange money,mobile money,paypal',
            'id_etudiant' => 'sometimes|integer|exists:etudiants,id_etudiant',
        ]);

        $paiement->update($validatedData);
        return response()->json($paiement);
    }

    // Supprime un paiement
    public function destroy($id)
    {
        $paiement = Paiement::findOrFail($id);
        $paiement->delete();
        return response()->json(null, 204);
    }
}
