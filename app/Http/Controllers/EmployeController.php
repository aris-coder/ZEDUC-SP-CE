<?php

namespace App\Http\Controllers;

use App\Models\Employe;
use Illuminate\Http\Request;

class EmployeController extends Controller
{
    // Insérer un nouvel employé
    public function store(Request $request)
    {
        // Validation de l'ID utilisateur
        $validated = $request->validate([
            'id_utilisateur' => 'required|exists:utilisateurs,id_utilisateur|unique:employes,id_employe',
        ]);

        // Création de l'employé avec l'ID utilisateur validé
        $employe = Employe::create([
            'id_employe' => $validated['id_utilisateur'],
        ]);

        // Retour de la réponse JSON avec l'employé créé et un statut 201 (créé)
        return response()->json($employe, 201);
    }

    // Afficher un employé spécifique
    public function show($id)
    {
        $employe = Employe::findOrFail($id);
        return response()->json($employe);
    }

    // Supprimer un employé
    public function destroy($id)
    {
        $employe = Employe::findOrFail($id);
        $employe->delete();
        return response()->json(null, 204);
    }
}
