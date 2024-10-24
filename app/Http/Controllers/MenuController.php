<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    /**
     * Afficher une liste des articles de menu.
     */
    public function index()
    {
        $menuItems = Menu::all();
        return response()->json($menuItems);
    }

    /**
     * Afficher un article de menu spécifique.
     */
    public function show($id)
    {
        $menuItem = Menu::find($id);

        if ($menuItem) {
            return response()->json($menuItem);
        } else {
            return response()->json(['message' => 'Article non trouvé'], 404);
        }
    }

    /**
     * Créer un nouvel article de menu.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required|string|max:255',
            'description' => 'required|string',
            'prix' => 'required|numeric',
            'statut' => 'required|in:disponible,épuisé',
            'type' => 'required|in:plat,boisson',
        ]);

        $menuItem = Menu::create($request->all());
        return response()->json($menuItem, 201);
    }

    /**
     * Mettre à jour un article de menu existant.
     */
    public function update(Request $request, $id)
    {
        $menuItem = Menu::find($id);

        if ($menuItem) {
            $request->validate([
                'nom' => 'string|max:255',
                'description' => 'string',
                'prix' => 'numeric',
                'statut' => 'in:disponible,épuisé',
                'type' => 'in:plat,boisson',
            ]);

            $menuItem->update($request->all());
            return response()->json($menuItem);
        } else {
            return response()->json(['message' => 'Article non trouvé'], 404);
        }
    }

    /**
     * Supprimer un article de menu.
     */
    public function destroy($id)
    {
        $menuItem = Menu::find($id);

        if ($menuItem) {
            $menuItem->delete();
            return response()->json(['message' => 'Article supprimé']);
        } else {
            return response()->json(['message' => 'Article non trouvé'], 404);
        }
    }
}
