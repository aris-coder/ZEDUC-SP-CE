<?php

namespace App\Http\Controllers;

use App\Models\ReponseReclamation;
use Illuminate\Http\Request;

class ReponseReclamationController extends Controller
{
    // Liste toutes les réponses de réclamations
    public function index()
    {
        $reponses = ReponseReclamation::with('reclamation')->get();
        return response()->json($reponses);
    }

    // Affiche une réponse spécifique
    public function show($id)
    {
        $reponse = ReponseReclamation::with('reclamation')->findOrFail($id);
        return response()->json($reponse);
    }

    // Crée une nouvelle réponse
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'id_reclamation' => 'required|integer|exists:reclamations,id_reclamation',
            'texte_reponse' => 'required|string',
        ]);

        $reponse = ReponseReclamation::create($validatedData);
        return response()->json($reponse, 201);
    }

    // Met à jour une réponse
    public function update(Request $request, $id)
    {
        $reponse = ReponseReclamation::findOrFail($id);

        $validatedData = $request->validate([
            'texte_reponse' => 'sometimes|string',
        ]);

        $reponse->update($validatedData);
        return response()->json($reponse);
    }

    // Supprime une réponse
    public function destroy($id)
    {
        $reponse = ReponseReclamation::findOrFail($id);
        $reponse->delete();
        return response()->json(null, 204);
    }
}
