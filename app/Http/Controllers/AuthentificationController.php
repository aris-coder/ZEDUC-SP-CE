<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Utilisateur;
use Illuminate\Support\Facades\Hash;

class AuthentificationController extends Controller
{
    // Méthode de connexion
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'mot_de_passe' => 'required'
        ]);

        // Recherche de l'utilisateur par email
        $utilisateur = Utilisateur::where('email', $request->email)->first();

        if (!$utilisateur || !Hash::check($request->mot_de_passe, $utilisateur->mot_de_passe)) {
            return response()->json(['message' => 'Identifiants incorrects.'], 401);
        }

        // Si la connexion réussit
        return response()->json([
            'message' => 'Connexion réussie',
            'utilisateur' => $utilisateur
        ]);
    }

    // Récupérer les informations de l'utilisateur (y compris le rôle) par email
    public function getUtilisateurByEmail($email)
    {
        // Trouver l'utilisateur par email
        $utilisateur = Utilisateur::where('email', $email)->first();
 
         if (!$utilisateur) {
             return response()->json(['message' => 'Utilisateur non trouvé'], 404);
         }
 
         // Retourner les informations de l'utilisateur, y compris le rôle
         return response()->json([
             'id' => $utilisateur->id_utilisateur,
             'nom' => $utilisateur->nom,
             'email' => $utilisateur->email,
             'role' => $utilisateur->role, // Assurez-vous d'avoir une colonne 'role' dans la table utilisateur
         ]);
    }
}
