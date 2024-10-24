<?php

namespace App\Http\Controllers;

use App\Models\Gerant;
use App\Models\Utilisateur;
use Illuminate\Http\Request;

class GerantController extends Controller
{
    // Afficher la liste des gérants
    public function index()
    {
        $gerants = Gerant::with('utilisateur')->get();
        return view('gerants.index', compact('gerants'));
    }

    // Afficher le formulaire de création d'un gérant
    public function create()
    {
        return view('gerants.create');
    }

    // Enregistrer un nouveau gérant
    public function store(Request $request)
    {
        $request->validate([
            'id_gerant' => 'required|exists:utilisateurs,id_utilisateur|unique:gerants,id_gerant',
        ]);

        Gerant::create(['id_gerant' => $request->id_gerant]);

        return redirect()->route('gerants.index')->with('success', 'Gérant créé avec succès.');
    }

    // Afficher les détails d'un gérant
    public function show($id)
    {
        $gerant = Gerant::with('utilisateur')->findOrFail($id);
        return view('gerants.show', compact('gerant'));
    }

    // Afficher le formulaire d'édition d'un gérant
    public function edit($id)
    {
        $gerant = Gerant::findOrFail($id);
        return view('gerants.edit', compact('gerant'));
    }

    // Mettre à jour un gérant
    public function update(Request $request, $id)
    {
        $gerant = Gerant::findOrFail($id);

        $request->validate([
            'id_gerant' => 'required|exists:utilisateurs,id_utilisateur|unique:gerants,id_gerant,' . $gerant->id_gerant,
        ]);

        $gerant->update(['id_gerant' => $request->id_gerant]);

        return redirect()->route('gerants.index')->with('success', 'Gérant mis à jour avec succès.');
    }

    // Supprimer un gérant
    public function destroy($id)
    {
        $gerant = Gerant::findOrFail($id);
        $gerant->delete();

        return redirect()->route('gerants.index')->with('success', 'Gérant supprimé avec succès.');
    }
}
