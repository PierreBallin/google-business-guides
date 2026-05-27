# Guide photos — Mariage Bretagne Films

## Structure des dossiers

```
public/images/
├── hero/          → Grande photo pleine largeur (homepage + pages département)
├── galerie/       → 6 photos de la section galerie homepage
└── temoignages/   → Photos de couples pour les témoignages (optionnel)
```

---

## Dimensions recommandées

| Usage | Dimensions | Poids max | Format |
|-------|-----------|-----------|--------|
| Hero (bandeau haut) | 1920 × 1080 px | 300 KB | WebP ou JPG |
| Galerie homepage (6 photos) | 1200 × 800 px | 200 KB | WebP ou JPG |
| Portrait vertical | 800 × 1067 px | 150 KB | WebP ou JPG |

---

## Nommage des fichiers (SEO)

Format : `videaste-mariage-[ville]-[description].jpg`

### hero/
- `hero-mariage-bretagne.jpg`
- `hero-mariage-nantes.jpg`
- `hero-mariage-vannes.jpg`
- `hero-mariage-rennes.jpg`
- `hero-mariage-saint-malo.jpg`
- `hero-mariage-lorient.jpg`
- `hero-mariage-ille-et-vilaine.jpg`
- `hero-mariage-loire-atlantique.jpg`
- `hero-mariage-morbihan.jpg`

### galerie/
- `videaste-mariage-nantes-ceremonie-exterieure.jpg`
- `videaste-mariage-vannes-golfe-morbihan.jpg`
- `film-mariage-rennes-chateau.jpg`
- `videaste-mariage-saint-malo-remparts.jpg`
- `mariage-bretagne-vin-honneur.jpg`
- `film-mariage-lorient-premiere-danse.jpg`

---

## Textes alt (SEO) — à utiliser dans le code

```
hero-mariage-bretagne.jpg       → "Film de mariage cinématographique en Bretagne — Mariage Bretagne Films"
videaste-mariage-nantes-*       → "Vidéaste mariage Nantes — film cinématographique Loire-Atlantique (44)"
videaste-mariage-vannes-*       → "Vidéaste mariage Vannes — Golfe du Morbihan (56)"
film-mariage-rennes-*           → "Film de mariage à Rennes — château breton Ille-et-Vilaine (35)"
videaste-mariage-saint-malo-*   → "Vidéaste mariage Saint-Malo — cité corsaire, remparts"
mariage-bretagne-vin-honneur    → "Vin d'honneur filmé en Bretagne — vidéaste mariage 35 44 56"
film-mariage-lorient-*          → "Film de mariage à Lorient — Morbihan (56)"
```

---

## Compression recommandée

- **Outil gratuit** : squoosh.app (dans le navigateur, sans inscription)
- Exporter en **WebP** qualité 80% — division par 3-5 du poids sans perte visible
- Ou JPG qualité 75-80%

---

## Comment ajouter vos photos

1. Glissez vos photos compressées dans les bons sous-dossiers ci-dessus
2. Faites `git add public/images/` → `git commit` → `git push`
3. GitHub Actions déploie automatiquement (seules les nouvelles photos sont uploadées)
