# Portfolio Cybersécurité - Guide pour Agents

## Commandes de Build et Test

### Build
```bash
npm run build
```

### Development Server
```bash
npm run dev
```

### Production Server
```bash
npm run start
```

### Linting
```bash
npm run lint
```

## Structure de Données

Le contenu du site est centralisé dans `src/data/content.ts`. Pour modifier :
- Informations personnelles : hero section
- Compétences : skills array
- Projets : projects array  
- Contact : contact object
- Outils : tools array

## Déploiement

Le projet est configuré pour Vercel :
1. Connecter le repository GitHub
2. Vercel détecte automatiquement Next.js
3. Build automatique à chaque push

## Personnalisation

- Photo de profil : `public/photo.jpg`
- CV : `public/cv.pdf`
- Thèmes : `src/app/globals.css`
- Contenu : `src/data/content.ts`