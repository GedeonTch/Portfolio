# Portfolio Cybersécurité - Gédéon Cibanvunya

Portfolio professionnel pour Gédéon Cibanvunya, étudiant en cybersécurité à l'Université Lumière de Bujumbura (ULBU), Burundi.

## 🎯 Caractéristiques

- **Thèmes personnalisables** : Deux thèmes "Cyber réaliste"
  - Terminal Hacker : fond noir/bleu marine profond, accents vert néon sobre
  - SOC Alert : fond anthracite, accents rouge/orange et bleu
- **Scène 3D interactive** : Bouclier stylisé avec effet de scan
- **Effet de frappe terminal** : Animation du nom respectant `prefers-reduced-motion`
- **Logs d'audit défilants** : Style terminal professionnel
- **Design responsive** : Mobile-first optimisé
- **Performance** : Lighthouse-friendly, animations légères

## 🛠️ Stack Technique

- **Framework** : Next.js 14 (App Router)
- **Styling** : Tailwind CSS
- **3D** : React Three Fiber + Drei
- **Animations** : Framer Motion
- **TypeScript** : TypeScript 5
- **Déploiement** : Vercel

## 📁 Structure du Projet

```
portfolio/
├── src/
│   ├── app/              # Pages Next.js
│   │   ├── globals.css   # Styles globaux et thèmes
│   │   ├── layout.tsx    # Layout principal
│   │   └── page.tsx      # Page d'accueil
│   ├── components/       # Composants React
│   │   ├── Hero.tsx      # Section hero avec effet de frappe
│   │   ├── About.tsx     # Section à propos
│   │   ├── Skills.tsx    # Section compétences
│   │   ├── Tools.tsx     # Section outils & technologies
│   │   ├── Projects.tsx  # Section projets
│   │   ├── Contact.tsx   # Section contact avec formulaire
│   │   ├── Navigation.tsx# Navigation principale
│   │   ├── ThemeToggle.tsx # Bouton changement de thème
│   │   ├── Scene3D.tsx   # Scène 3D React Three Fiber
│   │   └── Shield3D.tsx  # Composant bouclier 3D
│   ├── data/             # Données centralisées
│   │   └── content.ts    # Contenu éditable du site
│   ├── lib/              # Utilitaires
│   │   └── theme-context.tsx # Contexte de thème
│   └── types/            # Types TypeScript
│       └── index.ts      # Définitions de types
├── public/               # Assets statiques
│   ├── photo.jpg         # Photo de profil (à remplacer)
│   └── cv.pdf            # CV PDF (à remplacer)
└── tailwind.config.ts    # Configuration Tailwind
```

## 🚀 Démarrage Local

### Prérequis

- Node.js 18+ (recommandé : 20+)
- npm, yarn, pnpm ou bun

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📝 Mise à jour du Contenu

Toutes les informations éditables sont centralisées dans `src/data/content.ts`. Pour modifier le contenu :

1. Ouvrez `src/data/content.ts`
2. Modifiez les données selon vos besoins
3. Le site se met à jour automatiquement

### Exemple : Ajouter un projet

```typescript
// Dans src/data/content.ts, ajoutez dans le tableau projects:
{
  title: "Nom du projet",
  tag: "Catégorie courte",
  description: "Description détaillée du projet...",
  stack: ["Technologie 1", "Technologie 2", "Technologie 3"],
  link: "https://github.com/votre-username/repo",
  featured: false // true pour le mettre en avant
}
```

### Personnalisation

- **Photo de profil** : Remplacez `public/photo.jpg` par votre photo
- **CV** : Remplacez `public/cv.pdf` par votre CV PDF
- **Formulaire de contact** : Créez un compte sur [Formspree](https://formspree.io) et remplacez `VOTRE_ID` dans `src/data/content.ts`

## 🎨 Personnalisation des Thèmes

Les couleurs des thèmes sont définies dans `src/app/globals.css` :

```css
/* Thème Terminal Hacker (par défaut) */
:root {
  --background: #0a0e14;
  --foreground: #e0e0e0;
  --accent: #00ff9d;
  /* ... */
}

/* Thème SOC Alert */
body.soc {
  --background: #1a1a2e;
  --accent: #ff6b6b;
  /* ... */
}
```

## 🚢 Déploiement sur Vercel

### Méthode recommandée : Git

1. **Initialiser Git** (si pas déjà fait)
```bash
git init
git add .
git commit -m "Initial commit"
```

2. **Créer un repository sur GitHub**
   - Allez sur [github.com](https://github.com)
   - Créez un nouveau repository
   - Suivez les instructions pour pousser votre code

3. **Déployer sur Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez-vous avec GitHub
   - Cliquez sur "Add New Project"
   - Sélectionnez votre repository
   - Cliquez sur "Deploy"

Vercel détectera automatiquement que c'est un projet Next.js et le configurera correctement.

### Variables d'environnement (optionnelles)

Si vous utilisez des variables d'environnement, ajoutez-les dans les settings Vercel :
- Formspree endpoint (si différent de celui dans content.ts)

## 🔧 Commandes Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build pour production
npm run start    # Serveur de production
npm run lint     # Linter ESLint
```

## 📱 Responsive Design

Le site est conçu mobile-first avec breakpoints :
- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

## ♿ Accessibilité

- Respect des préférences `prefers-reduced-motion`
- Contraste suffisant sur les deux thèmes
- Navigation au clavier fonctionnelle
- Alt text sur les images
- Semantic HTML

## 🎯 Performance

- Optimisation des images avec Next.js Image
- Code splitting automatique
- Lazy loading des composants 3D
- Fallback pour WebGL indisponible
- Animations optimisées avec Framer Motion

## 📄 License

Ce projet est créé par Gédéon Cibanvunya pour son portfolio personnel.

## 🤝 Support

Pour toute question ou problème :
- Email : tchibanvunyagedeon@gmail.com
- GitHub : https://github.com/GedeonTch
- LinkedIn : https://www.linkedin.com/in/gedeon-tchibanvunya-515692356/