# Mon Projet DevOps

## Description
Application fullstack (React + Node.js + PostgreSQL) conteneurisée avec Docker et déployée sur une VM Azure avec Kubernetes (K3s), automatisée via un pipeline CI/CD GitHub Actions.

## Stack technique
- Frontend : React + Vite + Nginx
- Backend : Node.js + Express
- Base de données : PostgreSQL
- Conteneurisation : Docker + Docker Compose
- Orchestration : Kubernetes (K3s)
- CI/CD : GitHub Actions
- Cloud : Microsoft Azure (VM Ubuntu 22.04)

## Pipeline CI/CD
git push → GitHub Actions
→ 1) Tests (npm test)
→ 2) Build Docker + Push DockerHub
→ 3) Déploiement SSH sur VM Azure
→ 4) Mise à jour Kubernetes

## Lancer en local
```bash
docker compose up --build
```
- Frontend : http://localhost:8082
- Backend : http://localhost:3000/health

## Déploiement sur la VM Azure
- IP publique : 20.86.11.10
- Frontend : http://20.86.11.10:31682
- Backend health : http://20.86.11.10:30357/health

## Étapes de déploiement
1. Créer la VM Azure Ubuntu 22.04
2. Installer Docker + K3s sur la VM
3. Pusher le code sur GitHub → le pipeline CI/CD se déclenche automatiquement
4. Appliquer les fichiers Kubernetes sur la VM

## Difficultés rencontrées
- Port 8080 et 8081 déjà utilisés sur Windows → changé en 8082
- Username Docker Hub incorrect dans les fichiers Kubernetes → corrigé en tomguittet
- Token Docker Hub avec permissions insuffisantes → recréé avec Read/Write/Delete
- Clé SSH avec espaces dans le chemin → résolu avec guillemets