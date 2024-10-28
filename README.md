# Gestion de Restaurant avec Laravel et React ( cas de Zeduc-Sp@cace)
Ce projet est une application de gestion de restaurant permettant de gérer les utilisateurs, les commandes, le menu, les paiements, et d’autres fonctionnalités essentielles. Conçu en Laravel pour le backend et React pour le frontend, ce projet facilite la gestion des clients (étudiants), des employés et des administrateurs, tout en assurant un suivi des paiements et des commandes.


# Fonctionnalités
* **Gestion des utilisateurs** : création de profils (étudiants, employés, gérants, administrateurs) avec différentes permissions.
* **Gestion des commandes et menu** : affichage et mise à jour du menu, gestion des commandes (à emporter, livraison) et état des articles (disponible/épuisé).
* **Système de paiements** : prise en charge de plusieurs méthodes de paiement, y compris Orange Money, Mobile Money, Paypal, et points de fidélité.
* **Gestion des réclamations** : suivi des réclamations des clients, avec réponses et validation.
* **Système de promotions et événements** : création et gestion des promotions et événements pour le restaurant.
* **Fidélisation des clients** : suivi des points de fidélité pour les étudiants.

  
# Structure de la base de données
Le projet utilise une base de données avec les tables suivantes :
* **utilisateurs, étudiants, gérants, employés, administrateurs** pour la gestion des profils.
* **menu** pour les articles (plats, boissons) disponibles.
* **commandes** et **detail_commandes** pour suivre les commandes.
* **paiement** pour la gestion des transactions.
* **reclamations** et **reponses_reclamations** pour la gestion des retours clients.
* **parrainages** et **point_de_fidelite** pour le programme de fidélité.

  
# Membres de l'équipe et interventions
--------------------------------------------
|  Noms            |   Intervention        |
|------------------|-----------------------|
| Lisa Mabou       |  frontend             |
| Fotue Aris       |  frontend             |
| Napane Gaby      |  frontend             |
| Calix Andrea     |  frontend             |
| Elie Yota        |  frontend             |
| Reine Esther     |  frontend et backend  |
--------------------------------------------


# Installation et Configuration

**Prérequis**
* Git,
* Node.js,
* Composer,
* MySQL,
* PHP.
  
**Cloner le dépôt**
```
git clone https://github.com/aris-coder/ZEDUC-SP-CE.git

cd ZEDUC-SP-CE
```

**Backend (Laravel)**
* Accédez au dossier backend et installez les dépendances :
```
cd backend

composer install
```
* Configurez le fichier **.env** en indiquant vos informations de base de données.
* Créez les tables :
```
php artisan migrate

```

* Démarrez le serveur Laravel :
```
php artisan serve

```
**Frontend (React)**
* Accédez au dossier frontend et installez les dépendances :
```
cd frontend

npm install
```

* Installez les bibliothèques suivantes pour le frontend :
```
npm install react-bootstrap bootstrap react-router-dom

npm install --save @fontsource/milongo  # pour la police Milongo
```

* Assurez-vous d'importer Bootstrap et la police Milongo dans votre projet, par exemple  :
```
import 'bootstrap/dist/css/bootstrap.min.css';

import '@fontsource/milongo';
```

* Lancez le serveur React :
```
npm start

```


# Utilisation
1. **Inscription :** Seul les étudiants peuvent s'incrire et ont par defaut le role étudiant.
2. **Connexion :** Les utilisateurs(**étudiants, administrateur, gérant, employés**) peuvent se connecter en fonction de leur rôle et son redirigés vers la section(les fonctionalités et pages) correspondantes.
3. **Gestion du Menu et des Commandes :** Accédez aux articles du menu, passez des commandes et suivez leur état.
4. **Paiement :** Choisissez une méthode de paiement et suivez l'historique des transactions.
5. **Réclamations et Support :** Faites des réclamations et suivez les réponses.
6. **Fidélité et Promotions :** Profitez des points de fidélité et des offres promotionnelles.
