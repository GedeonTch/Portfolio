// Traductions FR/EN du portfolio
//
// Architecture :
//   - content.ts reste la référence de données FR (inchangé)
//   - contentEn = miroir anglais du contenu métier (même structure ContentData)
//   - ui = textes d'interface (navigation, boutons, formulaire, flux d'audit...)
// Les composants consomment useLanguage() → { t: ui[lang], data: content|contentEn }

import { ContentData } from '@/types';

export type Language = 'fr' | 'en';

export interface UiTexts {
  nav: string[];
  hero: {
    viewProjects: string;
    downloadCv: string;
  };
  audit: {
    header: string;
    live: string;
    templates: string[];
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  skills: {
    title: string;
  };
  tools: {
    title: string;
  };
  projects: {
    title: string;
    viewOnGithub: string;
    visitSite: string;
    featured: string;
  };
  contact: {
    title: string;
    coords: string;
    sendMessage: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    send: string;
    sending: string;
    successTitle: string;
    successBody: string;
    sendAnother: string;
    errorTitle: string;
    errorBody: string;
    retry: string;
    writeByEmail: string;
    orText: string;
    directMailLink: string;
    downloadCv: string;
  };
  footer: {
    rights: string;
  };
}

const uiFr: UiTexts = {
  nav: ['Accueil', 'À propos', 'Compétences', 'Outils', 'Projets', 'Contact'],
  hero: {
    viewProjects: 'Voir mes projets',
    downloadCv: 'Télécharger CV',
  },
  audit: {
    header: 'SOC — flux temps réel',
    live: 'Live',
    templates: [
      'SCAN Analyse du périmètre externe lancée',
      'ALERTE 3 tentatives de connexion suspectes, IP bloquée',
      'ACTION Compte verrouillé, client notifié en 41 s',
      'INFO Correctif critique déployé sur 12 serveurs',
      'SCAN 0 vulnérabilité critique détectée ce matin',
      'INFO Sauvegarde nocturne vérifiée, 142/142 actifs OK',
      'SCAN Corrélation SIEM : 2 IOC confirmés sur le segment DMZ',
      'ACTION Règle YARA déployée sur le parc, 0 faux positif',
      'INFO Honeypot contacté 7 fois cette nuit, signatures mises à jour',
      'ALERTE Pic de trafic DNS inhabituel, analyse en cours',
      'ACTION Ad IP isolée du VLAN, ticket SOC-2481 ouvert',
      'INFO Rotation des clés API terminée, périmètre sain',
    ],
  },
  about: {
    title: 'À propos',
    paragraphs: [
      "Étudiant en Informatique de Gestion avec spécialisation en cybersécurité à l'Université Lumière de Bujumbura (ULBU), Burundi. Originaire de Bukavu en République Démocratique du Congo.",
      "Passionné par l'analyse SOC (Security Operations Center), les tests d'intrusion et le développement de logiciels orientés sécurité. Mon objectif est de contribuer à la protection des infrastructures critiques et des données sensibles.",
      "Approche professionnelle et méthodique, axée sur l'apprentissage continu et l'application pratique des concepts de cybersécurité dans des environnements réels.",
    ],
  },
  skills: {
    title: 'Compétences',
  },
  tools: {
    title: 'Outils & Technologies',
  },
  projects: {
    title: 'Projets',
    viewOnGithub: 'Voir sur GitHub',
    visitSite: 'Visiter le site',
    featured: 'FEATURED',
  },
  contact: {
    title: 'Contact',
    coords: 'Coordonnées',
    sendMessage: 'Envoyer un message',
    nameLabel: 'Nom',
    emailLabel: 'Email',
    messageLabel: 'Message',
    send: 'Envoyer',
    sending: 'Envoi en cours…',
    successTitle: 'Message envoyé !',
    successBody: 'Je vous répondrai sous 48h.',
    sendAnother: 'Envoyer un autre message',
    errorTitle: "Échec de l'envoi",
    errorBody: "Le message n'a pas pu être transmis. Vérifiez votre connexion et réessayez.",
    retry: 'Réessayer',
    writeByEmail: 'Écrire par email',
    orText: 'Ou',
    directMailLink: 'écrivez-moi directement',
    downloadCv: 'Télécharger CV',
  },
  footer: {
    rights: 'Tous droits réservés.',
  },
};

const uiEn: UiTexts = {
  nav: ['Home', 'About', 'Skills', 'Tools', 'Projects', 'Contact'],
  hero: {
    viewProjects: 'View my projects',
    downloadCv: 'Download CV',
  },
  audit: {
    header: 'SOC — live feed',
    live: 'Live',
    templates: [
      'SCAN External perimeter analysis launched',
      'ALERT 3 suspicious login attempts, IP blocked',
      'ACTION Account locked, client notified in 41 s',
      'INFO Critical patch deployed on 12 servers',
      'SCAN 0 critical vulnerabilities detected this morning',
      'INFO Nightly backup verified, 142/142 assets OK',
      'SCAN SIEM correlation: 2 IOCs confirmed on the DMZ segment',
      'ACTION YARA rule deployed fleet-wide, 0 false positives',
      'INFO Honeypot hit 7 times overnight, signatures updated',
      'ALERT Unusual DNS traffic spike, analysis in progress',
      'ACTION Host isolated from VLAN, ticket SOC-2481 opened',
      'INFO API key rotation complete, perimeter healthy',
    ],
  },
  about: {
    title: 'About',
    paragraphs: [
      'Business Computing student specializing in Cybersecurity at Lumière University of Bujumbura (ULBU), Burundi. Originally from Bukavu, Democratic Republic of the Congo.',
      'Passionate about SOC (Security Operations Center) analysis, penetration testing and security-oriented software development. My goal is to help protect critical infrastructure and sensitive data.',
      'A professional, methodical approach focused on continuous learning and hands-on application of cybersecurity concepts in real-world environments.',
    ],
  },
  skills: {
    title: 'Skills',
  },
  tools: {
    title: 'Tools & Technologies',
  },
  projects: {
    title: 'Projects',
    viewOnGithub: 'View on GitHub',
    visitSite: 'Visit website',
    featured: 'FEATURED',
  },
  contact: {
    title: 'Contact',
    coords: 'Contact details',
    sendMessage: 'Send a message',
    nameLabel: 'Name',
    emailLabel: 'Email',
    messageLabel: 'Message',
    send: 'Send',
    sending: 'Sending…',
    successTitle: 'Message sent!',
    successBody: "I'll get back to you within 48 hours.",
    sendAnother: 'Send another message',
    errorTitle: 'Delivery failed',
    errorBody: 'The message could not be delivered. Check your connection and try again.',
    retry: 'Try again',
    writeByEmail: 'Write by email',
    orText: 'Or',
    directMailLink: 'email me directly',
    downloadCv: 'Download CV',
  },
  footer: {
    rights: 'All rights reserved.',
  },
};

export const ui: Record<Language, UiTexts> = {
  fr: uiFr,
  en: uiEn,
};

// Miroir anglais du contenu métier (structure identique à ContentData / content.ts)
export const contentEn: ContentData = {
  hero: {
    name: 'Gédéon Cibanvunya',
    title: 'Business Computing student specializing in Cybersecurity — Lumière University of Bujumbura (ULBU), Burundi',
    tagline: 'Passionate about SOC analysis, pentesting and security-focused software development',
    photoPath: '/photo-placeholder.svg',
  },
  skills: [
    {
      category: 'Offensive/defensive security',
      items: ['Pentest', 'Malware analysis', 'OSINT', 'YARA/Sigma'],
    },
    {
      category: 'Networking',
      items: ['TCP/IP', 'Nmap', 'Scapy', 'ACL/firewall', 'tcpdump'],
    },
    {
      category: 'Systems administration',
      items: ['Windows administration', 'Active Directory (AD DS)'],
    },
    {
      category: 'Development',
      items: ['Python', 'Bash', 'JavaScript/Node.js', 'Next.js', 'C/C++'],
    },
    {
      category: 'Security tools',
      items: ['Kali Linux', 'VirtualBox', 'Docker', 'Wireshark', 'OWASP ZAP', 'SentinelX', 'Wazuh'],
    },
  ],
  tools: [
    { name: 'Python', url: 'https://www.python.org', icon: 'python' },
    { name: 'Kali Linux', url: 'https://www.kali.org', icon: 'kali' },
    { name: 'Nmap', url: 'https://nmap.org', icon: 'nmap' },
    { name: 'Docker', url: 'https://www.docker.com', icon: 'docker' },
    { name: 'Wireshark', url: 'https://www.wireshark.org', icon: 'wireshark' },
    { name: 'OWASP ZAP', url: 'https://www.zaproxy.org', icon: 'zap' },
    { name: 'Wazuh', url: 'https://wazuh.com', icon: 'wazuh' },
    { name: 'SentinelX', url: '#projects', icon: 'sentinelx' },
  ],
  projects: [
    {
      title: 'SentinelX',
      tag: 'Security ecosystem',
      description: 'Modular security ecosystem overseeing several sub-projects (NetLab, Insight, Nexus), visually connected as nodes of the same network in the logo/branding.',
      stack: ['Python', 'Next.js', 'Three.js', 'Docker'],
      link: 'https://github.com/GedeonTch/sentinelX',
      featured: true,
    },
    {
      title: 'NetLab',
      tag: 'Educational framework',
      description: 'Open-source educational Python framework to learn pentest phases (reconnaissance, port scanning, host discovery) legally in a controlled environment. Modules: Host Discovery, Port Scanner, Recon Manager. Generates PDF/HTML/JSON reports.',
      stack: ['Python', 'ReportLab', 'BeautifulSoup'],
      link: 'https://github.com/GedeonTch/sentinelX',
      featured: false,
    },
    {
      title: 'MAYUNDO — Malware analysis',
      tag: 'Forensic analysis',
      description: 'Full SOC L1/L2-level analysis of a JavaScript/JScript worm spreading via USB drives (sub-Saharan Africa). Static analysis, passive C2 investigation, YARA/Sigma rules, remediation guide, forensic evidence from a controlled VM infection, RisePro Stealer co-infection discovered, self-verifying cleanup script.',
      stack: ['JavaScript', 'YARA', 'Sigma', 'VirtualBox'],
      link: 'https://github.com/GedeonTch/MAYUNDO-MALWARE-ANALYSIS',
      featured: false,
    },
    {
      title: 'ETCH — E-commerce',
      tag: 'Web application',
      description: 'E-commerce site for refurbished European electronics and furniture (ÉTABLISSEMENT TCHIBANVUNYA). Stack: Next.js 14, Tailwind, Three.js, MySQL/Prisma, deployed on Vercel. Trilingual, USD/CDF pricing.',
      stack: ['Next.js 14', 'Tailwind CSS', 'Three.js', 'MySQL', 'Prisma'],
      link: 'https://etch-store.vercel.app/',
      featured: false,
    },
  ],
  contact: {
    email: 'tchibanvunyagedeon@gmail.com',
    whatsapp: 'https://wa.me/25766504165',
    github: 'https://github.com/GedeonTch',
    linkedin: 'https://www.linkedin.com/in/gedeon-tchibanvunya-515692356/',
    cvPath: '/cv.pdf',
    formEndpoint: 'https://formspree.io/f/xzezgweg',
  },
};
