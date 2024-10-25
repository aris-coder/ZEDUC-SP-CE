<?php

namespace App\Http\Controllers;

use App\Models\Gerant;
use Illuminate\Http\Request;

class GerantController extends Controller
{
    // Insérer un nouveau gérant
    public function store(Request $request)
    {
        // Validation de l'ID utilisateur
        $validated = $request->validate([
            'id_utilisateur' => 'required|exists:utilisateurs,id_utilisateur|unique:gerants,id_gerant',
        ]);

        // Création du gérant avec l'ID utilisateur validé
        $gerant = Gerant::create([
            'id_gerant' => $validated['id_utilisateur'],
        ]);

        // Retour de la réponse JSON avec le gérant créé et un statut 201 (créé)
        return response()->json($gerant, 201);
    }

    // Afficher un gérant spécifique
    public function show($id)
    {
        $gerant = Gerant::findOrFail($id);
        return response()->json($gerant);
    }

    // Supprimer un gérant
    public function destroy($id)
    {
        $gerant = Gerant::findOrFail($id);
        $gerant->delete();
        return response()->json(null, 204);
    }
}
