<?php

namespace App\Http\Controllers;

use App\Models\ValidationReclamation;
use Illuminate\Http\Request;

class ValidationReclamationController extends Controller
{
    // Liste toutes les validations de réclamations
    public function index()
    {
        $validations = ValidationReclamation::with('reclamation')->get();
        return response()->json($validations);
    }

    // Affiche une validation spécifique
    public function show($id)
    {
        $validation = ValidationReclamation::with('reclamation')->findOrFail($id);
        return response()->json($validation);
    }

    // Crée une nouvelle validation
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'id_reclamation' => 'required|integer|exists:reclamations,id_reclamation',
            'statut' => 'required|in:validé,rejeté',
        ]);

        $validation = ValidationReclamation::create($validatedData);
        return response()->json($validation, 201);
    }

    // Met à jour une validation
    public function update(Request $request, $id)
    {
        $validation = ValidationReclamation::findOrFail($id);

        $validatedData = $request->validate([
            'statut' => 'sometimes|in:validé,rejeté',
        ]);

        $validation->update($validatedData);
        return response()->json($validation);
    }

    // Supprime une validation
    public function destroy($id)
    {
        $validation = ValidationReclamation::findOrFail($id);
        $validation->delete();
        return response()->json(null, 204);
    }
}
