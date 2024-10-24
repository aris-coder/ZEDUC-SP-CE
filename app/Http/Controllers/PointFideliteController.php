<?php

namespace App\Http\Controllers;

use App\Models\PointFidelite;
use Illuminate\Http\Request;

class PointFideliteController extends Controller
{
    public function index()
    {
        $pointsFidelite = PointFidelite::all();
        return response()->json($pointsFidelite);
    }

    public function show($id)
    {
        $pointFidelite = PointFidelite::where('id_etudiant', $id)->firstOrFail();
        return response()->json($pointFidelite);
    }

    public function store(Request $request)
    {
        $request->validate([
            'id_etudiant' => 'required|integer',
            'points_acquis' => 'required|integer',
            'points_utilises' => 'required|integer',
        ]);

        $pointFidelite = PointFidelite::create($request->all());
        return response()->json($pointFidelite, 201);
    }

    public function update(Request $request, $id)
    {
        $pointFidelite = PointFidelite::where('id_etudiant', $id)->firstOrFail();
        $pointFidelite->update($request->all());
        return response()->json($pointFidelite);
    }

    public function destroy($id)
    {
        $pointFidelite = PointFidelite::where('id_etudiant', $id)->firstOrFail();
        $pointFidelite->delete();
        return response()->json(null, 204);
    }
}
