<?php

namespace App\Http\Controllers;

use App\Models\Administrateur;
use Illuminate\Http\Request;

class AdministrateurController extends Controller
{
    // Insérer un nouvel administrateur
    public function store(Request $request)
    {
        // Validation de l'ID utilisateur
        $validated = $request->validate([
            'id_utilisateur' => 'required|exists:utilisateurs,id_utilisateur|unique:administrateurs,id_administrateur',
        ]);

        // Création de l'administrateur avec l'ID utilisateur validé
        $administrateur = Administrateur::create([
            'id_administrateur' => $validated['id_utilisateur'],
        ]);

        // Retour de la réponse JSON avec l'administrateur créé et un statut 201 (créé)
        return response()->json($administrateur, 201);
    }

    // Afficher un administrateur spécifique
    public function show($id)
    {
        $administrateur = Administrateur::findOrFail($id);
        return response()->json($administrateur);
    }

    // Supprimer un administrateur
    public function destroy($id)
    {
        $administrateur = Administrateur::findOrFail($id);
        $administrateur->delete();
        return response()->json(null, 204);
    }
}
