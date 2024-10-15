create domain ID_user
   as text check ( VALUE similar to 'ID[0-9]{10}' );

create domain Mail
as text check ( VALUE similar to '[A-Za-z0-9._%+-]+@gmail\.com' );

create domain Role_user
    as text check (VALUE = 'Etudiant' OR VALUE = 'Employé' OR VALUE = 'Gérant' OR VALUE = 'Administrateur');

create domain CodeP_user
    as text check ( VALUE similar to 'CO[0-9]{10}P' );

create domain ID_COM
    as text check ( VALUE similar to 'CM[0-9]{10}D' );

create domain ID_DCM
    as text check ( VALUE similar to 'DC[0-9]{10}M' );

create domain ID_MENU
    as text check ( VALUE similar to 'M[0-9]{10}U' );

create domain ID_PY
    as text check ( VALUE similar to 'P[0-9]{10}Y' );

create domain ID_PM
    as text check ( VALUE similar to 'P[0-9]{10}M' );

create domain ID_EV
    as text check ( VALUE similar to 'E[0-9]{10}V' );

create domain ID_RC
    as text check ( VALUE similar to 'R[0-9]{10}C' );

create domain ID_RP
    as text check ( VALUE similar to 'R[0-9]{10}P' );

create domain ID_NU
    as text check ( VALUE similar to 'N[0-9]{10}U' );

create domain ID_TPF
    as text check ( VALUE similar to 'T[0-9]{10}F' );


CREATE TABLE Utilisateur(
    id_utilisateur ID_user primary key not null ,
    nom_utilisateur varchar(255) not null ,
    email Mail not null ,
	numéro_téléphone text,
	mot_de_passe text not null ,
	date_inscription timestamp not null ,
	rôle Role_user not null
);

create table Parrainage(
    id_étudiant ID_user references Utilisateur (id_utilisateur),
	code_parrainage CodeP_user primary key not null,
	filleul_id  ID_user references Utilisateur (id_utilisateur),
	statut_parrainage text check ( statut_parrainage = 'Obtenue' OR statut_parrainage = 'Non obtenue') not null
);

create table Etudiant (
    id_étudiant ID_user references Utilisateur (id_utilisateur),
    point_fidélité int not null ,
    code_parrainage CodeP_user references Parrainage (code_parrainage),
    date_inscription text not null ,
    filleul_id ID_user references Utilisateur (id_utilisateur),
    code_parrainageparrain CodeP_user references Parrainage (code_parrainage)
);

create table Gérant(
    id_gérant ID_user references Utilisateur (id_utilisateur) not null
);

create table Administrateur(
    id_admin ID_user references Utilisateur (id_utilisateur) not null
);

create table Employé(
    id_employé ID_user references Utilisateur (id_utilisateur) not null
);

create table commande(
    id_commande ID_COM primary key not null ,
    id_utilisateur ID_user references Utilisateur (id_utilisateur),
    montant_commande int not null ,
    type text check ( type = 'A emporter' or type = 'Livrer') not null ,
    heure_livraison timestamp not null ,
    statut_commande  text check ( statut_commande = 'En attente' or statut_commande ='En cour' or statut_commande ='Livrer' or statut_commande ='Annulé') not null ,
	date_commande timestamp not null ,
	commentaire text
);

create table Menu(
    id_article_menu ID_MENU primary key not null ,
	nom text not null ,
	description text not null ,
	prix int not null ,
	status text check ( status = 'Disponible' or status = 'Epuisé') not null ,
	type text check ( type = 'Boisson' or type = 'Nourriture') not null
);

create table detail_commande(
    id_détail_commande  ID_DCM not null primary key ,
	id_commande ID_COM references commande (id_commande),
	id_article_menu ID_MENU references Menu(id_article_menu),
	quantité int not null
);


create table paiement(
    id_paiement ID_PY primary key not null ,
	id_commande ID_COM references commande (id_commande),
	montant_total int not null ,
	date_paiement timestamp not null ,
	methode_paiement text check ( methode_paiement = 'Point de fidélité' or methode_paiement = 'agrégateur téléphonique') not null ,
	id_étudiant ID_user references Utilisateur (id_utilisateur)
);

create table promotions(
    id_promotion ID_PM primary key not null,
	Créer ID_user references Utilisateur (id_utilisateur),
	titre text not null,
	description text not null ,
	date_début timestamp not null ,
	date_fin timestamp not null ,
    constraint datedébut_fin check ( date_début < date_fin )
);

create table evenements(
    id_promotion ID_EV primary key not null,
	Créer ID_user references Utilisateur (id_utilisateur),
	titre text not null,
	description text not null ,
	date_début timestamp not null ,
	date_fin timestamp not null ,
    constraint datedébut_fin check ( date_début < date_fin )
);

create table reclamation(
    id_réclamation  ID_RC primary key not null ,
	id_commande  ID_COM references commande(id_commande) ,
	id_utilisateur ID_user references Utilisateur (id_utilisateur) ,
	texte_réclamation text not null ,
	statut_réclamation text check (statut_réclamation similar to 'En cour de traitement') not null,
	date_envoie timestamp not null
);

create table reponse_reclamation(
    id_réponse  ID_RP primary key not null ,
	id_réclamation ID_RC references reclamation (id_réclamation),
	id_répondant ID_user references Utilisateur (id_utilisateur),
	réponse_texte text not null ,
	date_réponse timestamp not null,
	statut_réponse text check (statut_réponse = 'Répondue' or statut_réponse = 'En attente') not null
);

create table validation_réclamation(
    numéro_validation ID_NU primary key not null ,
	id_réclamation ID_RC references reclamation (id_réclamation),
	id_répondant  ID_user references Utilisateur (id_utilisateur),
	validation_statut text check (validation_statut = 'Validé' or validation_statut = 'Refuser') not null
);

create table transactions_points_fidélité(
    id_transaction  ID_TPF primary key not null ,
	id_utilisateur  ID_user references Utilisateur (id_utilisateur),
    Nombre_points int not null
);


--Utilisateur Table
INSERT INTO Utilisateur (id_utilisateur, nom_utilisateur, email, numéro_téléphone, mot_de_passe, date_inscription, rôle) VALUES
('ID1234567890', 'John Doe', 'johndoe@gmail.com', 1234567, 'password123', '2024-01-01 10:00:00', 'Etudiant'),
('ID2345678901', 'Jane Smith', 'janesmith@gmail.com', 234567901, 'password456', '2024-02-01 11:30:00', 'Employé'),
('ID3456789012', 'Michael Brown', 'michaelbrown@gmail.com', 356789012, 'password789', '2024-03-01 14:20:00', 'Gérant'),
('ID4567890123', 'Emily Davis', 'emilydavis@gmail.com', 45670123, 'password101', '2024-04-01 15:00:00', 'Administrateur');

--Parrainage Table
INSERT INTO Parrainage (id_étudiant, code_parrainage, filleul_id, statut_parrainage) VALUES
('ID1234567890', 'CO1234567890P', 'ID2345678901', 'Obtenue'),
('ID2345678901', 'CO2345678901P', 'ID3456789012', 'Non obtenue'),
('ID4567890123', 'CO3456789012P', 'ID3456789012', 'Non obtenue');


--Etudiant Table
INSERT INTO Etudiant (id_étudiant, point_fidélité, code_parrainage, date_inscription, filleul_id, code_parrainageparrain) VALUES
('ID1234567890', 100, 'CO1234567890P', '2024-01-01', 'ID2345678901', 'CO2345678901P'),
('ID2345678901', 200, 'CO2345678901P', '2024-02-01', 'ID3456789012', 'CO3456789012P');

--Gérant Table
INSERT INTO Gérant (id_gérant) VALUES
('ID3456789012');

--Administrateur Table
INSERT INTO Administrateur (id_admin) VALUES
('ID4567890123');

--Employé Table
INSERT INTO Employé (id_employé) VALUES
('ID2345678901');

--Commande Table
INSERT INTO commande (id_commande, id_utilisateur, montant_commande, type, heure_livraison, statut_commande, date_commande, commentaire) VALUES
('CM1234567890D', 'ID1234567890', 150, 'A emporter', '2024-05-01 12:00:00', 'En attente', '2024-05-01 10:00:00', 'No onions please'),
('CM2345678901D', 'ID2345678901', 200, 'Livrer', '2024-06-01 13:00:00', 'En cour', '2024-06-01 11:00:00', 'Extra sauce');

--Menu Table
INSERT INTO Menu (id_article_menu, nom, description, prix, status, type) VALUES
('M1234567890U', 'Pizza Margherita', 'Classic pizza with tomato and cheese', 120, 'Disponible', 'Nourriture'),
('M2345678901U', 'Coca-Cola', 'Chilled soft drink', 30, 'Disponible', 'Boisson');

--Detail_commande Table
INSERT INTO detail_commande (id_détail_commande, id_commande, id_article_menu, quantité) VALUES
('DC1234567890M', 'CM1234567890D', 'M1234567890U', 2),
('DC2345678901M', 'CM2345678901D', 'M2345678901U', 3);

--Paiement Table
INSERT INTO paiement (id_paiement, id_commande, montant_total, date_paiement, methode_paiement, id_étudiant) VALUES
('P1234567890Y', 'CM1234567890D', 150, '2024-05-01 12:30:00', 'Point de fidélité', 'ID1234567890'),
('P2345678901Y', 'CM2345678901D', 200, '2024-06-01 13:30:00', 'agrégateur téléphonique', 'ID2345678901');

--Promotions Table
INSERT INTO promotions (id_promotion, Créer, titre, description, date_début, date_fin) VALUES
('P1234567890M', 'ID3456789012', 'Summer Deal', 'Get 20% off on all items', '2024-07-01 00:00:00', '2024-08-01 00:00:00'),
('P2345678901M', 'ID4567890123', 'Winter Special', 'Buy one get one free', '2024-12-01 00:00:00', '2024-12-31 00:00:00');

--Evenements Table
INSERT INTO evenements (id_promotion, Créer, titre, description, date_début, date_fin) VALUES
('E1234567890V', 'ID3456789012', 'Christmas Party', 'Celebrate with us', '2024-12-20 00:00:00', '2024-12-25 00:00:00'),
('E2345678901V', 'ID4567890123', 'New Year Bash', 'Ring in the new year with fun', '2024-12-31 00:00:00', '2025-01-01 00:00:00');

--Reclamation Table
INSERT INTO reclamation (id_réclamation, id_commande, id_utilisateur, texte_réclamation, statut_réclamation, date_envoie) VALUES
('R1234567890C', 'CM1234567890D', 'ID1234567890', 'Order was late', 'En cour de traitement', '2024-05-02 10:00:00'),
('R2345678901C', 'CM2345678901D', 'ID2345678901', 'Incorrect order', 'En cour de traitement', '2024-06-02 11:00:00');

--Reponse_reclamation Table
INSERT INTO reponse_reclamation (id_réponse, id_réclamation, id_répondant, réponse_texte, date_réponse, statut_réponse) VALUES
('R2345678901P', 'R1234567890C', 'ID3456789012', 'We are processing your request', '2024-05-02 12:00:00', 'En attente'),
('R3456789012P', 'R2345678901C', 'ID4567890123', 'We apologize, your order will be replaced', '2024-06-02 12:30:00', 'Répondue');

--Validation_réclamation Table
INSERT INTO validation_réclamation (numéro_validation, id_réclamation, id_répondant, validation_statut) VALUES
('N1234567890U', 'R1234567890C', 'ID3456789012', 'Validé'),
('N2345678901U', 'R2345678901C', 'ID4567890123', 'Refuser');

--Transactions_points_fidélité Table
INSERT INTO transactions_points_fidélité (id_transaction, id_utilisateur, Nombre_points) VALUES
('T1234567890F', 'ID1234567890', 100),
('T2345678901F', 'ID2345678901', 200);