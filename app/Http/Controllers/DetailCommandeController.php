<?php

namespace App\Http\Controllers;

use App\Models\DetailCommande;
use Illuminate\Http\Request;

class DetailCommandeController extends Controller
{
    public function index()
    {
        $details = DetailCommande::all();
        return response()->json($details);
    }

    public function show($id_commande, $id_article_menu)
    {
        $detail = DetailCommande::where('id_commande', $id_commande)
                                ->where('id_article_menu', $id_article_menu)
                                ->firstOrFail();
        return response()->json($detail);
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_commande' => 'required|integer|exists:commandes,id_commande',
            'id_article_menu' => 'required|integer|exists:menu,id_article_menu',
            'quantite' => 'required|integer',
        ]);

        $detail = DetailCommande::create($request->all());
        return response()->json($detail, 201);
    }

    public function update(Request $request, $id_commande, $id_article_menu)
    {
        $detail = DetailCommande::where('id_commande', $id_commande)->where('id_article_menu', $id_article_menu)
                                ->firstOrFail();
        $detail->update($request->all());
        return response()->json($detail);
    }

    public function destroy($id_commande, $id_article_menu)
    {
        $detail = DetailCommande::where('id_commande', $id_commande)
                                ->where('id_article_menu', $id_article_menu)
                                ->firstOrFail();
        $detail->delete();
        return response()->json(null, 204);
    }
}
