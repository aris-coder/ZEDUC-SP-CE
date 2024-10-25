<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdministrateurController;
use App\Http\Controllers\CommandeController;
use App\Http\Controllers\DetailCommandeController;
use App\Http\Controllers\EmployeController;
use App\Http\Controllers\EtudiantController;
use App\Http\Controllers\EvenementController;
use App\Http\Controllers\GerantController;
use App\Http\Controllers\LivraisonController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\PaiementController;
use App\Http\Controllers\PaiementPaypalController;
use App\Http\Controllers\PaiementPointFideliteController;
use App\Http\Controllers\PointsFideliteController;
use App\Http\Controllers\ParrainageController;
use App\Http\Controllers\PromotionController;
use App\Http\Controllers\ReclamationController;
use App\Http\Controllers\ReponseReclamationController; 
use App\Http\Controllers\UtilisateurController; 
use App\Http\Controllers\ValidationReclamationController;
use App\Http\Controllers\AuthentificationController;
use App\Http\Controllers\InscriptionController;


Route::prefix('api')->group(function () {

    // Connexion Routes
    Route::post('/login', [AuthentificationController::class, 'login']);
    Route::get('/utilisateurs/email/{email}', [AuthentificationController::class, 'getUtilisateurByEmail']);



    // Inscription Routes
    Route::post('/inscription', [InscriptionController::class, 'login']);

    // Administrateur Routes
    Route::resource('administrateurs', AdministrateurController::class);

    // Commande Routes
    Route::resource('commandes', CommandeController::class);

    // DetailCommande Routes
    Route::resource('detail_commandes', DetailCommandeController::class);

    // Employe Routes
    Route::resource('employes', EmployeController::class);

    // Etudiant Routes
    Route::resource('etudiants', EtudiantController::class);

    // Evenement Routes
    Route::resource('evenements', EvenementController::class);

    // Gerant Routes
    Route::resource('gerants', GerantController::class);

    // Livraison Routes
    Route::resource('livraisons', LivraisonController::class);

    // Menu Routes
    Route::resource('menus', MenuController::class);
    Route::get('/menu_du_jour', [MenuController::class, 'getMenuDuJour']);

    // Paiement Routes
    Route::resource('paiements', PaiementController::class);
    Route::get('/methodes_paiement', [PaiementController::class, 'getPaymentOptions']);
    

    // PaiementPaypal Routes
    Route::resource('paiements_paypal', PaiementPaypalController::class);

    // PaiementPointFidelite Routes
    Route::resource('paiements_point_fidelite', PaiementPointFideliteController::class);

    // PointsFidelite Routes
    Route::resource('points_fidelite', PointsFideliteController::class);

    // Parrainage Routes
    Route::resource('parrainages', ParrainageController::class);

    // Promotion Routes
    Route::resource('promotions', PromotionController::class);

    // Reclamation Routes
    Route::resource('reclamations', ReclamationController::class);

    // ReponseReclamation Routes
    Route::resource('reponses_reclamations', ReponseReclamationController::class);

    // Utilisateur Routes
    Route::resource('utilisateurs', UtilisateurController::class);

    // ValidationReclamation Routes
    Route::resource('validation_reclamations', ValidationReclamationController::class);

});