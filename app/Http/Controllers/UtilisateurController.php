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
        $validatedData = $request->validate([
            'email' => 'required|email|unique:utilisateurs,email',
            'nom_utilisateur' => 'required|string|max:255',
            'numero_telephone' => 'required|string|max:15',
            'mot_de_passe' => 'required|string|min:6',
            'role' => 'nullable|string|in:etudiant,employe,gerant,administrateur'
        ]);

        // Si tout est valide, continuer avec l'inscription
        $role = $validatedData['role'] ?? 'etudiant';

        $utilisateur = new Utilisateur([
            'nom_utilisateur' => $validatedData['nom_utilisateur'],
            'email' => $validatedData['email'],
            'numero_telephone' => $validatedData['numero_telephone'],
            'mot_de_passe' => bcrypt($validatedData['mot_de_passe']),
            'role' => $role
        ]);

        $utilisateur->save();

        // Ajouter l'utilisateur à la table appropriée
        if ($role == 'étudiant') {
            $etudiant = new Etudiant(['utilisateur_id' => $utilisateur->id]);
            $etudiant->save();
        } elseif ($role == 'employé') {
            $employe = new Employe(['utilisateur_id' => $utilisateur->id]);
            $employe->save();
        }

        return response()->json(['message' => 'Inscription réussie'], 201);
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
