<?php

namespace App\Http\Controllers;

use App\Models\Administration;
use Illuminate\Http\Request;

class AdministrationController extends Controller
{
    // Lister toutes les administrations
    public function index()
    {
        $administrations = Administration::all();
        return response()->json($administrations);
    }

    // Créer une nouvelle administration
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'role' => 'required|string|max:255',
        ]);

        $administration = Administration::create($validated);
        return response()->json($administration, 201);
    }

    // Afficher une administration spécifique
    public function show($id)
    {
        $administration = Administration::findOrFail($id);
        return response()->json($administration);
    }

    // Mettre à jour une administration
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nom' => 'sometimes|required|string|max:255',
            'role' => 'sometimes|required|string|max:255',
        ]);

        $administration = Administration::findOrFail($id);
        $administration->update($validated);
        return response()->json($administration);
    }

    // Supprimer une administration
    public function destroy($id)
    {
        $administration = Administration::findOrFail($id);
        $administration->delete();
        return response()->json(null, 204);
    }
}
