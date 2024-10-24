<?php

namespace App\Http\Controllers;

use App\Models\Employe;
use Illuminate\Http\Request;

class EmployeController extends Controller
{
    // Lister tous les employés
    public function index()
    {
        $employes = Employe::with('utilisateur')->get();
        return response()->json($employes);
    }

    // Créer un nouvel employé
    public function store(Request $request)
    {
        $validated = $request->validate([
            'id_utilisateur' => 'required|exists:utilisateurs,id_utilisateur|unique:employes,id_employe',
        ]);

        $employe = Employe::create(['id_utilisateur' => $validated['id_utilisateur']]);
        return response()->json($employe, 201);
    }

    // Afficher un employé spécifique
    public function show($id)
    {
        $employe = Employe::with('utilisateur')->findOrFail($id);
        return response()->json($employe);
    }

    // Mettre à jour un employé
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'id_utilisateur' => 'required|exists:utilisateurs,id_utilisateur|unique:employes,id_employe,' . $id,
        ]);

        $employe = Employe::findOrFail($id);
        $employe->update(['id_utilisateur' => $validated['id_utilisateur']]);
        return response()->json($employe);
    }

    // Supprimer un employé
    public function destroy($id)
    {
        Employe::destroy($id);
        return response()->json(null, 204);
    }
}
