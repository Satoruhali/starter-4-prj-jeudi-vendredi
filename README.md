# Starter (S2) — À corriger puis personnaliser

## Objectif

Ce starter est **volontairement imparfait**. Ton premier job : le rendre “sain”, puis le personnaliser pour présenter ton projet.

Ce projet consiste à partir d’un starter volontairement imparfait afin de :

- diagnostiquer et corriger des erreurs HTML et CSS,
- vérifier le bon chargement des styles et des assets,
- livrer une première page web lisible présentant un projet,
- appliquer une discipline Git simple avec des commits clairs.

Le but est de produire une page fonctionnelle, vérifiable localement, et prête à être montrée en démo.

## Corrections HTML
- Chemin CSS : style.css → styles.css (ligne 9)
- Logo : logoo.svg → logo-comparemanga.svg (ligne 18)
- Classe titre : hero__tilte → hero__title (ligne 33)
- Classe bouton : btn--primay → btn--primary (ligne 132)

## Corrections CSS
- Display manquant : Ajout de display: flex sur .site-header__inner
- Logo aligné : Ajout de styles pour aligner logo et texte
- Typographie : Correction des poids de police



## Résumé des modifiacations  :

#  Corrections de bugs majeures

##  HTML – Corrections
- Chemin CSS corrigé : `style.css` → `styles.css`
- Logo réparé : `logoo.svg` → `logo-comparemanga.svg`
- Classe typo corrigée : `.hero__tilte` → `.hero__title`
- Classe bouton corrigée : `.btn--primay` → `.btn--primary`

---

# Personnalisations principales

##  Structure HTML
- **Header** : Logo personnalisé + titre **"CompareManga"**
- **Navigation** : Menu simplifié *(Accueil, Comparer, Boutiques)*
- **Section Hero** : Vidéo intégrée + barre de recherche ajoutée
- **Contenu** : Sections adaptées au projet manga *(problème, cible, fonctionnalités)*
- **Footer** : Texte mis à jour avec le nom du projet

##  Design CSS
- **Palette de couleurs** : Rose / rouge `#ff3366` sur fond sombre `#0a0a0a`
- **Nouveaux composants** :
  - Barre de recherche avec bouton **Chercher**
  - Vidéo en arrière-plan avec overlay
  - Cartes avec effets de survol
- **Responsive design** : Adaptations mobile et tablette
- **Alignements** : Logo et titre parfaitement alignés

---

#  Fonctionnalités ajoutées
-  **Vidéo d'arrière-plan** : Yuta de *Jujutsu Kaisen*
-  **Barre de recherche fonctionnelle** : Recherche de mangas / figurines
-  **Menu actif** : Indication visuelle de la page active
-  **Effets visuels** : Ombres, dégradés, animations subtiles

---

#  Responsive Design
- **Desktop** : Layout à 2 colonnes pour la section hero
- **Tablette (≤ 860px)** : Passage à une colonne, cartes empilées
- **Mobile (≤ 768px)** : Menu caché, barre de recherche verticale




# Fonctionnalité de Recherche de Manga - CompareManga

Ce document explique le fonctionnement de la recherche de mangas, de la saisie utilisateur à l'affichage des résultats, en passant par la communication avec l'API MangaDex.

## 1. Parcours Utilisateur

1.  **Page d'Accueil (`index.html`) :** L'utilisateur saisit le nom d'un manga (ex: "naruto") dans la barre de recherche.
2.  **Déclenchement :** Il clique sur le bouton "Chercher" ou appuie sur "Entrée".
3.  **Redirection :** Le site redirige le navigateur vers la page de résultats (`recherche.html`) en ajoutant la recherche dans l'URL : `recherche.html?q=naruto`.
4.  **Affichage des Résultats :** La page `recherche.html` lit le terme recherché dans l'URL, interroge l'API MangaDex et affiche les mangas correspondants sous forme de cartes.

## 2. Flux de Données et Composants Techniques

Le schéma ci-dessous illustre le cheminement de la requête :

```mermaid
flowchart TD
    A[Utilisateur sur index.html] --> B{Saisie et clic sur "Chercher"};
    B --> C[Redirection vers recherche.html?q=naruto];
    
    subgraph Côté Navigateur (recherche.html)
        D[JavaScript lit le paramètre 'q' dans l'URL] --> E{Appel à la fonction searchManga};
        E --> F[Construction de l'URL de l'API];
        F --> G[Envoi de la requête Fetch au Proxy Local];
    end

    subgraph Côté Serveur Local (server.js)
        H[Proxy reçoit la requête sur /api/mangadex/*] --> I[Ajoute les en-têtes CORS];
        I --> J[Transfère la requête à l'API officielle MangaDex];
    end

    J --> K[API MangaDex renvoie les données JSON];

    K --> L[Proxy transmet la réponse au navigateur];
    
    subgraph Côté Navigateur (recherche.html)
        M[Réception des données JSON] --> N[Fonction displayResults formate le HTML];
        N --> O[Affichage des cartes de manga dans la grille];
    end

    O --> P[L'utilisateur voit les résultats];