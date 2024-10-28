<?php

namespace App\Http\Controllers;

use App\Models\Evenement;
use Illuminate\Http\Request;

class EvenementController extends Controller
{
    // Liste tous les événements
    public function index()
    {
        $evenements = Evenement::all();
        return response()->json($evenements);
    }

    // Affiche un événement spécifique
    public function show($id)
    {
        $evenement = Evenement::findOrFail($id);
        return response()->json($evenement);
    }

    // Crée un nouvel événement
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'titre' => 'required|string|max:255',
            'gain' => 'required|string',
            'description' => 'required|string',
            'date_debut' => 'required|date',
            'date_fin' => 'required|date|after_or_equal:date_debut', // La date de fin doit être après la date de début
        ]);

        $evenement = Evenement::create($validatedData);
        return response()->json($evenement, 201);
    }

    // Met à jour un événement
    public function update(Request $request, $id)
    {
        $evenement = Evenement::findOrFail($id);

        $validatedData = $request->validate([
            'titre' => 'sometimes|string|max:255',
            'gain' => 'sometimes|string',
            'description' => 'sometimes|string',
            'date_debut' => 'sometimes|date',
            'date_fin' => 'sometimes|date|after_or_equal:date_debut', // La date de fin doit être après la date de début
        ]);

        $evenement->update($validatedData);
        return response()->json($evenement);
    }

    // Supprime un événement
    public function destroy($id)
    {
        $evenement = Evenement::findOrFail($id);
        $evenement->delete();
        return response()->json(null, 204);
    }
}
