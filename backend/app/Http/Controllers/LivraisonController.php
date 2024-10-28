<?php

namespace App\Http\Controllers;

use App\Models\Livraison;
use Illuminate\Http\Request;

class LivraisonController extends Controller
{
    public function index()
    {
        $livraisons = Livraison::all();
        return response()->json($livraisons);
    }

    public function show($id)
    {
        $livraison = Livraison::findOrFail($id);
        return response()->json($livraison);
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_commande' => 'required|integer|exists:commandes,id_commande',
            'heure_livraison' => 'required',
            'date_livraison' => 'required|date',
            'adresse_livraison' => 'required|string',
        ]);

        $livraison = Livraison::create($request->all());
        return response()->json($livraison, 201);
    }

    public function update(Request $request, $id)
    {
        $livraison = Livraison::findOrFail($id);
        $livraison->update($request->all());
        return response()->json($livraison);
    }

    public function destroy($id)
    {
        $livraison = Livraison::findOrFail($id);
        $livraison->delete();
        return response()->json(null, 204);
    }
}
