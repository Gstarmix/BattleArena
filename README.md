# BattleArena

> Jeu de combat dans le navigateur — JavaScript / HTML / Sass.

## Contexte

Projet école L1 ISTIC (avril 2024). Conception d'un jeu de combat web en duel, avec barres de progression, effets visuels Sass et gameplay temps réel. C'était mon premier projet où j'expérimentais la séparation propre du code en modules JS, le pipeline Sass, et la logique d'animation.

## Stack

- JavaScript
- HTML
- Sass
- npm

## Statut

Ancien projet personnel, conservé en archive. **Pas activement maintenu.** L'idée est de garder une trace des étapes d'apprentissage avant l'ère des LLM, et de planifier une refonte propre quand j'aurai du temps.

## Roadmap (refonte si je devais le refaire aujourd'hui)

- Migrer le moteur vers [Phaser 3](https://phaser.io/) ou [Pixi.js](https://pixijs.com/) (gestion native du sprite-sheet, hitboxes, audio).
- Multijoueur en ligne via WebSocket (Socket.io ou Colyseus côté serveur).
- Adversaire IA piloté par un LLM (Claude API) — l'IA reçoit l'état du combat en JSON et choisit son action en fonction d'une persona configurable (agressif, défensif, opportuniste).
- Animations procédurales : Lottie pour les coups spéciaux, GreenSock pour le timing.
- Mode tournoi avec brackets dynamiques + ladder permanent.

---

_README généré le 2026-04-29 dans le cadre du cleanup général de mes anciens repos GitHub. Co-écrit avec [Claude Code](https://claude.com/claude-code) qui a rédigé le contenu à partir de l'inspection du repo._
