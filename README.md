# Carambar – Projet de sélection CDA

Application web permettant d’afficher des blagues Carambar.

## Architecture
- Frontend et backend séparés
- Approche MVC
- Communication via une API REST

## Backend (API)
- Développé en Node.js / Express
- Base de données : SQLite (Sequelize)
- API documentée avec Swagger
- Déployé sur Render

L’API est versionnée (`/api/v1`) et propose les endpoints suivants :
- POST `/api/v1/blagues` : ajouter une blague
- GET `/api/v1/blagues` : consulter toutes les blagues
- GET `/api/v1/blagues/{id}` : consulter une blague par ID
- GET `/api/v1/blagues/random` : consulter une blague aléatoire

Liens : 
- Repository GitHub : [carambar_back](https://github.com/alfaro-b/carambar_back)
- Documentation Swagger : [Swagger](https://carambar-back-c4qi.onrender.com/api-docs)

## Frontend
- Développé en HTML, CSS et JavaScript
- Déployé via GitHub Pages

Liens : 
- Repository GitHub : [carambar_front](https://github.com/alfaro-b/carambar_front)
- Site en ligne : [Carambar Front](https://alfaro-b.github.io/carambar_front)

## Déploiement
- Backend : Render.com
- Frontend : GitHub Pages

## Tests
- Tests des endpoints réalisés avec Postman
- Ajout de blagues en base via Postman, conformément au cahier des charges

## Livrables
- 1 repository GitHub Backend
- 1 repository GitHub Frontend
