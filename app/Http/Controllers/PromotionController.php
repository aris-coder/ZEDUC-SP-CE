<?php

namespace App\Http\Controllers;

use App\Models\Promotion;
use Illuminate\Http\Request;

class PromotionController extends Controller
{
    // Liste toutes les promotions
    public function index()
    {
        $promotions = Promotion::all();
        return response()->json($promotions);
    }

    // Affiche une promotion spécifique
    public function show($id)
    {
        $promotion = Promotion::findOrFail($id);
        return response()->json($promotion);
    }

    // Crée une nouvelle promotion
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'titre' => 'required|string|max:255',
            'description' => 'required|string',
            'date_debut' => 'required|date',
            'date_fin' => 'required|date|after_or_equal:date_debut', // Date de fin doit être après la date de début
        ]);

        $promotion = Promotion::create($validatedData);
        return response()->json($promotion, 201);
    }

    // Met à jour une promotion
    public function update(Request $request, $id)
    {
        $promotion = Promotion::findOrFail($id);

        $validatedData = $request->validate([
            'titre' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'date_debut' => 'sometimes|date',
            'date_fin' => 'sometimes|date|after_or_equal:date_debut', // Date de fin doit être après la date de début
        ]);

        $promotion->update($validatedData);
        return response()->json($promotion);
    }

    // Supprime une promotion
    public function destroy($id)
    {
        $promotion = Promotion::findOrFail($id);
        $promotion->delete();
        return response()->json(null, 204);
    }
}
