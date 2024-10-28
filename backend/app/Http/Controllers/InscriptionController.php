<?php

namespace App\Http\Controllers;

use App\Models\Utilisateur;
use App\Models\Etudiant;
use App\Models\Employe;
use App\Models\Administrateur;
use App\Models\Gerant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class InscriptionController extends Controller
{
    // Fonction pour générer un code de parrainage aléatoire (lettres et chiffres uniquement)
    private function generateCodeParrainage()
    {
        return Str::random(6);
    }

    // Fonction pour l'inscription des utilisateurs
    public function store(Request $request)
    {
        // Validation des données de l'inscription
        $validated = $request->validate([
            'nom_utilisateur' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:utilisateurs,email',
            'numero_telephone' => 'required|string|max:20',
            'mot_de_passe' => 'required|string|min:6|confirmed',
            'role' => 'nullable|string|in:etudiant,employe,gerant,administrateur',
        ]);

        // Hachage du mot de passe
        $mot_de_passe_hashed = Hash::make($request->mot_de_passe);

        // Par défaut, si le rôle n'est pas spécifié, on assigne "etudiant"
        $role = $request->role ?? 'etudiant';

        // Insérer les données dans la table utilisateur
        $utilisateur = Utilisateur::create([
            'nom_utilisateur' => $validated['nom_utilisateur'],
            'email' => $validated['email'],
            'numero_telephone' => $validated['numero_telephone'],
            'mot_de_passe' => $mot_de_passe_hashed,
        ]);

        // Récupérer l'ID de l'utilisateur nouvellement créé
        $id_utilisateur = $utilisateur->id_utilisateur;

        // En fonction du rôle, insérer dans la table correspondante
        if ($role === 'etudiant') {
            // Générer un code de parrainage
            $code_parrainage = $this->generateCodeParrainage();

            // Insérer dans la table `etudiant`
            $etudiant = Etudiant::create([
                'id_etudiant' => $id_utilisateur,
                'code_parrainage' => $code_parrainage,
            ]);

            // Retourner les détails avec le code de parrainage
            return response()->json([
                'message' => 'Inscription réussie',
                'utilisateur' => $utilisateur,
                'etudiant' => $etudiant,
                'code_parrainage' => $code_parrainage,
            ], 201);
        } elseif ($role === 'employe') {
            Employe::create([
                'id_employe' => $id_utilisateur,
            ]);
        } elseif ($role === 'gerant') {
            Gerant::create([
                'id_gerant' => $id_utilisateur,
            ]);
        } elseif ($role === 'administrateur') {
            Administrateur::create([
                'id_administrateur' => $id_utilisateur,
            ]);
        }

        // Retourner la réponse pour les autres rôles
        return response()->json([
            'message' => 'Inscription réussie',
            'utilisateur' => $utilisateur,
            'role' => $role,
        ], 201);
    }
}
