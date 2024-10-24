<?php

namespace App\Http\Controllers;

use App\Models\Administrateur;
use Illuminate\Http\Request;

class AdministrateurController extends Controller
{
    // Lister toutes les administrations
    public function index()
    {
        $administrateurs = Administrateur::all();
        return response()->json($administrateurs);
    }

    // Créer une nouvelle administration
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'role' => 'required|string|max:255',
        ]);

        $administrateur = Administrateur::create($validated);
        return response()->json($administrateur, 201);
    }

    // Afficher une administration spécifique
    public function show($id)
    {
        $administrateur = Administrateur::findOrFail($id);
        return response()->json($administrateur);
    }

    // Mettre à jour une administration
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nom' => 'sometimes|required|string|max:255',
            'role' => 'sometimes|required|string|max:255',
        ]);

        $administrateur = Administrateur::findOrFail($id);
        $administrateur->update($validated);
        return response()->json($administrateur);
    }

    // Supprimer une administration
    public function destroy($id)
    {
        $administrateur = Administrateur::findOrFail($id);
        $administrateur->delete();
        return response()->json(null, 204);
    }
}
