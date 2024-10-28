<?php

namespace App\Http\Controllers;

use App\Models\Commande;
use Illuminate\Http\Request;

class CommandeController extends Controller
{
    public function index()
    {
        $commandes = Commande::all();
        return response()->json($commandes);
    }

    public function show($id)
    {
        $commande = Commande::findOrFail($id);
        return response()->json($commande);
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_etudiant' => 'required|integer',
            'montant_total_commande' => 'required|numeric',
            'type' => 'required|string',
            'statut_commande' => 'required|string',
            'date_commande' => 'required|date',
        ]);

        $commande = Commande::create($request->all());
        return response()->json($commande, 201);
    }

    public function update(Request $request, $id)
    {
        $commande = Commande::findOrFail($id);
        $commande->update($request->all());
        return response()->json($commande);
    }

    public function destroy($id)
    {
        Commande::destroy($id);
        return response()->json(null, 204);
    }
}
