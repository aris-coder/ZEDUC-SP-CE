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