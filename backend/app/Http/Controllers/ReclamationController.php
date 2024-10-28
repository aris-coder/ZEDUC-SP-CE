<?php

namespace App\Http\Controllers;

use App\Models\Reclamation;
use Illuminate\Http\Request;

class ReclamationController extends Controller
{
    // Liste toutes les réclamations
    public function index()
    {
        $reclamations = Reclamation::with(['commande', 'etudiant'])->get();
        return response()->json($reclamations);
    }

    // Affiche une réclamation spécifique
    public function show($id)
    {
        $reclamation = Reclamation::with(['commande', 'etudiant'])->findOrFail($id);
        return response()->json($reclamation);
    }

    // Crée une nouvelle réclamation
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'id_commande' => 'required|integer|exists:commandes,id_commande',
            'id_etudiant' => 'required|integer|exists:etudiants,id_etudiant',
            'texte_reclamation' => 'required|string',
            'statut_reclamation' => 'required|in:r&eacute;pondu,en attente', // Correction d'énumération
            'date_envoi' => 'required|date',
        ]);

        $reclamation = Reclamation::create($validatedData);
        return response()->json($reclamation, 201);
    }

    // Met à jour une réclamation
    public function update(Request $request, $id)
    {
        $reclamation = Reclamation::findOrFail($id);

        $validatedData = $request->validate([
            'statut_reclamation' => 'sometimes|in:r&eacute;pondu,en attente',
            'texte_reclamation' => 'sometimes|string',
        ]);

        $reclamation->update($validatedData);
        return response()->json($reclamation);
    }

    // Supprime une réclamation
    public function destroy($id)
    {
        $reclamation = Reclamation::findOrFail($id);
        $reclamation->delete();
        return response()->json(null, 204);
    }
}
