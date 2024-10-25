<?php

namespace App\Http\Controllers;

use App\Models\Etudiant;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class EtudiantController extends Controller
{
    // Lister tous les étudiants
    public function index()
    {
        $etudiants = Etudiant::all();
        return response()->json($etudiants);
    }

    // Fonction pour générer un code de parrainage aléatoire (lettres et chiffres uniquement)
    private function generateCodeParrainage()
    {
        return Str::random(6);
    }

    // Insérer un nouvel étudiant
    public function store(Request $request)
    {
        // Validation des données
        $validated = $request->validate([
            'id_utilisateur' => 'required|exists:utilisateurs,id_utilisateur|unique:etudiants,id_etudiant',
        ]);

        // Génération du code de parrainage
        $code_parrainage = $this->generateCodeParrainage();

        // Création de l'étudiant avec l'ID utilisateur validé et le code de parrainage
        $etudiant = Etudiant::create([
            'id_etudiant' => $validated['id_utilisateur'],
            'code_parrainage' => $code_parrainage,
        ]);

        // Retour de la réponse JSON avec l'étudiant créé et un statut 201 (créé)
        return response()->json($etudiant, 201);
    }

    // Afficher un étudiant spécifique
    public function show($id)
    {
        $etudiant = Etudiant::findOrFail($id);
        return response()->json($etudiant);
    }

    // Supprimer un étudiant
    public function destroy($id)
    {
        $etudiant = Etudiant::findOrFail($id);
        $etudiant->delete();
        return response()->json(null, 204);
    }
}
