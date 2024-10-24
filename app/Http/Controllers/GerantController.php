<?php

namespace App\Http\Controllers;

use App\Models\Gerant;
use App\Models\Utilisateur;
use Illuminate\Http\Request;

class GerantController extends Controller
{
    // Lister tous les employés
    public function index()
    {
        $gerant = Gerant::with('utilisateur')->get();
        return response()->json($gerant);
    }

    // Créer un nouvel employé
    public function store(Request $request)
    {
        $validated = $request->validate([
            'id_utilisateur' => 'required|exists:utilisateurs,id_utilisateur|unique:gerants,id_gerant',
        ]);

        $gerant = Gerant::create(['id_utilisateur' => $validated['id_utilisateur']]);
        return response()->json($gerant, 201);
    }

    // Afficher un employé spécifique
    public function show($id)
    {
        $gerant = Gerant::with('utilisateur')->findOrFail($id);
        return response()->json($gerant);
    }

    // Mettre à jour un employé
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'id_utilisateur' => 'required|exists:utilisateurs,id_utilisateur|unique:gerants,id_gerant,' . $id,
        ]);

        $gerant = Gerant::findOrFail($id);
        $gerant->update(['id_utilisateur' => $validated['id_utilisateur']]);
        return response()->json($gerant);
    }

    // Supprimer un employé
    public function destroy($id)
    {
        Gerant::destroy($id);
        return response()->json(null, 204);
    }
}
