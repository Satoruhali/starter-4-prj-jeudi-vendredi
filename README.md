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




