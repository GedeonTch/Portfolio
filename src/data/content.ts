// Fichier de données centralisé pour le portfolio
// Toutes les informations éditables sont ici - modifier ce fichier pour mettre à jour le contenu

import { ContentData } from '@/types';

export const content: ContentData = {
  // Section Hero
  hero: {
    name: "Gédéon Cibanvunya",
    title: "Étudiant en Informatique de Gestion, orientation Cybersécurité — Université Lumière de Bujumbura (ULBU), Burundi",
    tagline: "Passionné par l'analyse SOC, le pentest et le développement logiciel de sécurité",
    photoPath: "/photo.jpg",
  },

  // Section Compétences
  skills: [
    {
      category: "Sécurité offensive/défensive",
      items: ["Pentest", "Analyse malware", "OSINT", "YARA/Sigma"]
    },
    {
      category: "Réseau",
      items: ["TCP/IP", "Nmap", "Scapy", "ACL/firewall", "tcpdump"]
    },
    {
      category: "Administration systèmes",
      items: ["Administration Windows", "Active Directory (AD DS)"]
    },
    {
      category: "Développement",
      items: ["Python", "Bash", "JavaScript/Node.js", "Next.js", "C/C++"]
    },
    {
      category: "Outils de sécurité",
      items: ["Kali Linux", "VirtualBox", "Docker", "Wireshark", "OWASP ZAP", "SentinelX", "Wazuh"]
    }
  ],

  // Section Outils & Technologies (badges cliquables)
  tools: [
    {
      name: "Python",
      url: "https://www.python.org",
      icon: "python"
    },
    {
      name: "Kali Linux",
      url: "https://www.kali.org",
      icon: "kali"
    },
    {
      name: "Nmap",
      url: "https://nmap.org",
      icon: "nmap"
    },
    {
      name: "Docker",
      url: "https://www.docker.com",
      icon: "docker"
    },
    {
      name: "Wireshark",
      url: "https://www.wireshark.org",
      icon: "wireshark"
    },
    {
      name: "OWASP ZAP",
      url: "https://www.zaproxy.org",
      icon: "zap"
    },
    {
      name: "Wazuh",
      url: "https://wazuh.com",
      icon: "wazuh"
    },
    {
      name: "SentinelX",
      url: "#projects", // Pointe vers la section projets
      icon: "sentinelx"
    }
  ],

  // Section Projets
  projects: [
    {
      title: "SentinelX",
      tag: "Écosystème de sécurité",
      description: "Écosystème de sécurité modulaire chapeautant plusieurs sous-projets (NetLab, Insight, Nexus) reliés visuellement comme des nœuds d'un même réseau dans le logo/branding.",
      stack: ["Python", "Next.js", "Three.js", "Docker"],
      link: "https://github.com/GedeonTch/sentinelX",
      featured: true
    },
    {
      title: "NetLab",
      tag: "Framework éducatif",
      description: "Framework Python open-source éducatif pour apprendre les phases de pentest (reconnaissance, scan de ports, découverte d'hôtes) légalement en environnement contrôlé. Modules : Host Discovery, Port Scanner, Recon Manager. Génère des rapports PDF/HTML/JSON.",
      stack: ["Python", "ReportLab", "BeautifulSoup"],
      link: "https://github.com/GedeonTch/sentinelX",
      featured: false
    },
    {
      title: "MAYUNDO — Analyse de malware",
      tag: "Analyse forensique",
      description: "Analyse complète niveau SOC L1/L2 d'un ver JavaScript/JScript se propageant par clé USB (Afrique subsaharienne). Analyse statique, investigation passive C2, règles YARA/Sigma, guide de remédiation, preuves forensiques d'infection contrôlée en VM, co-infection RisePro Stealer découverte, script de nettoyage auto-vérifiant.",
      stack: ["JavaScript", "YARA", "Sigma", "VirtualBox"],
      link: "https://github.com/GedeonTch/MAYUNDO-MALWARE-ANALYSIS",
      featured: false
    },
    {
      title: "ETCH — E-commerce",
      tag: "Application web",
      description: "Site e-commerce d'électronique et mobilier européens reconditionnés (ÉTABLISSEMENT TCHIBANVUNYA). Stack : Next.js 14, Tailwind, Three.js, MySQL/Prisma, déployé sur Vercel. Trilingue, tarification USD/CDF.",
      stack: ["Next.js 14", "Tailwind CSS", "Three.js", "MySQL", "Prisma"],
      link: "https://github.com/GedeonTch",
      featured: false
    }
  ],

  // Section Contact
  contact: {
    email: "tchibanvunyagedeon@gmail.com",
    whatsapp: "https://wa.me/25766504165",
    github: "https://github.com/GedeonTch",
    linkedin: "https://www.linkedin.com/in/gedeon-tchibanvunya-515692356/",
    cvPath: "/cv.pdf", // Remplacer par votre CV PDF
    formEndpoint: "https://formspree.io/f/xzezgweg" // Endpoint Formspree pour le formulaire de contact
  }
};

// Exemple de format pour ajouter un nouveau projet :
/*
{
  title: "Nom du projet",
  tag: "Catégorie courte",
  description: "Description détaillée du projet...",
  stack: ["Technologie 1", "Technologie 2", "Technologie 3"],
  link: "https://github.com/votre-username/repo",
  featured: false // true pour le mettre en avant
}
*/