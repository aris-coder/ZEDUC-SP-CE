<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UtilisateurController extends Controller
{
    // Lister tous les utilisateurs
    public function index()
    {
        $utilisateurs = Utilisateur::all();
        return response()->json($utilisateurs);
    }

    // Créer un nouvel utilisateur
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom_utilisateur' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:utilisateurs',
            'numero_telephone' => 'required|string|max:20',
            'mot_de_passe' => 'required|string|min:8',
            'role' => 'required|in:étudiant,employé,gérant,administrateur',
        ]);

        $utilisateur = Utilisateur::create([
            'nom_utilisateur' => $validated['nom_utilisateur'],
            'email' => $validated['email'],
            'numero_telephone' => $validated['numero_telephone'],
            'mot_de_passe' => Hash::make($validated['mot_de_passe']),
            'role' => $validated['role'],
        ]);

        return response()->json($utilisateur, 201);
    }

    // Afficher un utilisateur spécifique
    public function show($id)
    {
        $utilisateur = Utilisateur::findOrFail($id);
        return response()->json($utilisateur);
    }

    // Mettre à jour un utilisateur
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nom_utilisateur' => 'sometimes|required|string|max:255',
            'email' => 'sometimes|required|string|email|max:255|unique:utilisateurs,email,'.$id.',id_utilisateur',
            'numero_telephone' => 'sometimes|required|string|max:20',
            'mot_de_passe' => 'sometimes|nullable|string|min:8',
            'role' => 'sometimes|required|in:étudiant,employé,gérant,administrateur',
        ]);

        $utilisateur = Utilisateur::findOrFail($id);
        $utilisateur->update(array_filter([
            'nom_utilisateur' => $validated['nom_utilisateur'] ?? null,
            'email' => $validated['email'] ?? null,
            'numero_telephone' => $validated['numero_telephone'] ?? null,
            'role' => $validated['role'] ?? null,
            'mot_de_passe' => isset($validated['mot_de_passe']) ? Hash::make($validated['mot_de_passe']) : null,
        ]));

        return response()->json($utilisateur);
    }

    // Supprimer un utilisateur
    public function destroy($id)
    {
        $utilisateur = Utilisateur::findOrFail($id);
        $utilisateur->delete();
        return response()->json(null, 204);
    }
}
