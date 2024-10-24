<?php

namespace App\Http\Controllers;

use App\Models\Etudiant;
use Illuminate\Http\Request;

class EtudiantController extends Controller
{
    // Lister tous les étudiants
    public function index()
    {
        $etudiants = Etudiant::all();
        return response()->json($etudiants);
    }

    // Créer un nouvel étudiant
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'date_naissance' => 'required|date',
            'email' => 'required|string|email|max:255|unique:etudiants',
        ]);

        $etudiant = Etudiant::create($validated);
        return response()->json($etudiant, 201);
    }

    // Afficher un étudiant spécifique
    public function show($id)
    {
        $etudiant = Etudiant::findOrFail($id);
        return response()->json($etudiant);
    }

    // Mettre à jour un étudiant
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nom' => 'sometimes|required|string|max:255',
            'prenom' => 'sometimes|required|string|max:255',
            'date_naissance' => 'sometimes|required|date',
            'email' => 'sometimes|required|string|email|max:255|unique:etudiants,email,'.$id,
        ]);

        $etudiant = Etudiant::findOrFail($id);
        $etudiant->update($validated);
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
