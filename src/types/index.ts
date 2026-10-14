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
export interface Lab {
  slug: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  repoUrl: string;
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