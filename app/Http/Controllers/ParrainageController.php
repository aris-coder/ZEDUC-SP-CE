<?php

namespace App\Http\Controllers;

use App\Models\Parrainage;
use Illuminate\Http\Request;

class ParrainageController extends Controller
{
    // Liste tous les parrainages
    public function index()
    {
        $parrainages = Parrainage::all();
        return response()->json($parrainages);
    }

    // Affiche un parrainage spécifique
    public function show($filleul_id)
    {
        $parrainage = Parrainage::findOrFail($filleul_id);
        return response()->json($parrainage);
    }

    // Crée un nouveau parrainage
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'id_parrain' => 'required|integer|exists:etudiants,id_etudiant',
            'filleul_id' => 'required|integer|unique:parrainages,filleul_id|exists:etudiants,id_etudiant',
            'statut_parrainage' => 'required|in:récompense obtenue,récupération non obtenue',
        ]);

        $parrainage = Parrainage::create($validatedData);
        return response()->json($parrainage, 201);
    }

    // Met à jour un parrainage
    public function update(Request $request, $filleul_id)
    {
        $parrainage = Parrainage::findOrFail($filleul_id);

        $validatedData = $request->validate([
            'statut_parrainage' => 'sometimes|in:récompense obtenue,récupération non obtenue',
        ]);

        $parrainage->update($validatedData);
        return response()->json($parrainage);
    }

    // Supprime un parrainage
    public function destroy($filleul_id)
    {
        $parrainage = Parrainage::findOrFail($filleul_id);
        $parrainage->delete();
        return response()->json(null, 204);
    }
}
