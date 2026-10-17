// Types TypeScript pour le portfolio

export interface HeroData {
  name: string;
  title: string;
  tagline: string;
  photoPath: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Tool {
  name: string;
  url: string;
  icon: string;
}

export interface Project {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  link: string;
  featured: boolean;
}

export interface ContactData {
  email: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  cvPath: string;
  formEndpoint: string;
}

// Entrée de la galerie /labs : l'image est déposée dans /public/labs/<image>
//
// ── Structure étendue (branches Red Team / Blue Team) ──────────────────────
// Champs OPTIONNELS ajoutés : team, statut, tags, detail — et repoUrl devient
// optionnel (un lab offensif/défensif peut ne pas avoir de dépôt public).
// Les entrées historiques (sans `team`) restent valides : elles sont affichées
// dans le groupe « Outils & projets ».
export type LabEquipe = 'red' | 'blue';
export type LabStatut = 'termine' | 'en-cours' | 'planifie';

/** Une image de la galerie du scénario (page détail) */
export interface LabImage {
  /** Chemin sous /public — la galerie respecte l'ordre du tableau */
  src: string;
  legende: string;
}

/** Contenu de la page détail d'un lab (/labs/[slug]) — format synthèse (lecture ~30 s) */
export interface LabDetail {
  /** Paragraphes courts : contexte/objectif, exécution, impact & remédiation */
  scenario: string[];
  /** Lien direct vers le README/rapport sur GitHub (si distinct de Lab.repoUrl) */
  rapportUrl?: string;
  /** Sélection de 4 à 6 captures clés résumant le scénario (le reste figure sur GitHub) */
  images?: LabImage[];
}

export interface Lab {
  slug: string;
  title: string;
  tag: string;
  /** Résumé carte (2–5 phrases : objectif + outils) */
  description: string;
  image: string;
  /** Dépôt GitHub du lab (optionnel) */
  repoUrl?: string;
  /** Démo hébergée (optionnel) : affiche un bouton « Démo live » sur la carte */
  demoUrl?: string;
  /** Branche d'appartenance ; absent = groupe « Outils & projets » */
  team?: LabEquipe;
  /** Si true, un lab rattaché à une branche (ex. MAYUNDO en Blue Team) apparaît aussi dans « Outils & projets » */
  alsoInTools?: boolean;
  statut?: LabStatut;
  /** Tags technologiques affichés en pastilles (ex. Bettercap, Wireshark) */
  tags?: string[];
  /** Présence = carte cliquable vers la page détail /labs/[slug] */
  detail?: LabDetail;
}

export interface ContentData {
  hero: HeroData;
  skills: Skill[];
  tools: Tool[];
  projects: Project[];
  labs: Lab[];
  contact: ContactData;
}

export type Theme = 'terminal' | 'soc';