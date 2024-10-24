<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Utilisateur;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

class RegisteredUserController extends Controller
{
    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): Response
    {
        $request->validate([
            'nom_utilisateur' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'mot_de_passe' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $utilisateur = Utilisateur::create([
            'nom_utilisateur' => $request->nom_utilisateur,
            'email' => $request->email,
            'mot_de_passe' => Hash::make($request->string('mot_de_passe')),
        ]);

        event(new Registered($utilisateur));

        Auth::login($utilisateur);

        return response()->noContent();
    }
}
