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
    exploreLabs: string;
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
    discoverProject: string;
    featured: string;
    viewMore: string;
    allProjectsTitle: string;
    allProjectsIntro: string;
    backToHome: string;
  };
  labsPage: {
    title: string;
    intro: string;
    capturePending: string;
    viewRepo: string;
    /** Libellé du bouton de démo hébergée (carte Lab avec demoUrl) */
    viewDemo: string;
    /** Fil d'Ariane discret de la zone laboratoires (mono, ex. « ~/laboratoires ») */
    zoneLabel: string;
    chambrePrompt: string;
    entrerChambre: string;
    quitterChambre: string;
    basculerRed: string;
    basculerBlue: string;
    redTeamTitle: string;
    redTeamSubtitle: string;
    redTeamDesc: string;
    blueTeamTitle: string;
    blueTeamSubtitle: string;
    blueTeamDesc: string;
    prochainsLabsNote: string;
    /** Message d'une branche encore vide */
    brancheVide: string;
    outilsTitle: string;
    outilsIntro: string;
    statutTermine: string;
    statutEnCours: string;
    statutPlanifie: string;
    /** Lien d'une carte vers la page détail */
    voirDetail: string;
    retourLabs: string;
    retourChambreRed: string;
    retourChambreBlue: string;
    scenarioTitre: string;
    recommandationsTitre: string;
    redTeamRepoLabel: string;
    rapportTitre: string;
    voirRapport: string;
    /** Note affichée tant que le lien GitHub du rapport n'est pas encore renseigné */
    rapportEnPreparation: string;
    galerieTitre: string;
    galerieSousTitre: string;
    introuvableTitre: string;
    introuvableDetail: string;
    lightboxFermer: string;
    lightboxPrecedent: string;
    lightboxSuivant: string;
  };
  sentinelxPage: {
    backToProjects: string;
    headerTag: string;
    tagline: string;
    badges: string[];
    problemTitle: string;
    problemBody: string;
    archiTitle: string;
    archiNote: string;
    pipeline: string[];
    modulesTitle: string;
    modules: { title: string; role: string }[];
    stackTitle: string;
    stackItems: string[];
    statusTitle: string;
    statusNetlab: { title: string; body: string };
    statusBranch: { title: string; body: string };
    roadmapTitle: string;
    roadmap: { name: string; line: string; badge: string }[];
    proofTitle: string;
    proofGithub: string;
    legalNote: string;
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
  nav: ['Accueil', 'À propos', 'Compétences', 'Outils', 'Projets', 'Labs', 'Contact'],
  hero: {
    viewProjects: 'Voir mes projets',
    downloadCv: 'Télécharger CV',
    exploreLabs: 'Explorer mes Labs (Red & Blue Team)',
  },
  audit: {
    header: 'SOC — flux temps réel',
    live: 'DEMO',
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
    discoverProject: 'Découvrir le projet',
    featured: 'FEATURED',
    viewMore: 'Voir plus de projets',
    allProjectsTitle: 'Tous les projets',
    allProjectsIntro: 'Ensemble des projets et réalisations développés en cybersécurité, audit réseau, forensique et développement web.',
    backToHome: "← Retour à l'accueil",
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
  labsPage: {
    title: 'Labs',
    intro: "Les environnements contrôlés dans lesquels sont menées les attaques simulées, investigations forensiques, détections et durcissements présentés ici. Deux chambres distinctes : Red Team (opérations offensives) et Blue Team (défense & SOC).",
    capturePending: 'Capture à venir',
    viewRepo: 'Voir le dépôt',
    viewDemo: 'Démo live',
    zoneLabel: '~/laboratoires',
    chambrePrompt: 'Cliquez sur un lab pour ouvrir sa fiche, ou sur l’en-tête d’une chambre pour l’isoler :',
    entrerChambre: 'Isoler cette chambre',
    quitterChambre: '← Voir les 2 chambres',
    basculerRed: 'Chambre Red Team →',
    basculerBlue: 'Chambre Blue Team →',
    redTeamTitle: 'Red Team',
    redTeamSubtitle: "Attaque — penser comme l'adversaire",
    redTeamDesc: 'Scénarios offensifs en environnement isolé : reconnaissance, interception réseau, analyse de flux et contremesures.',
    blueTeamTitle: 'Blue Team',
    blueTeamSubtitle: 'Défense & SOC — détection, forensique et durcissement',
    blueTeamDesc: 'Investigation forensique en VM, règles de détection (YARA/Sigma) et scénarios de durcissement système et supervision.',
    prochainsLabsNote: 'Prochains labs prévus : SSH Hardening, détection réseau avec Suricata.',
    brancheVide: 'Aucun lab pour le moment — la chambre est prête, le contenu arrive.',
    outilsTitle: 'Outils & projets documentés',
    outilsIntro: "Audits, analyses et applications déployées : les environnements et projets hors branches offensives/défensives.",
    statutTermine: 'Terminé',
    statutEnCours: 'En cours',
    statutPlanifie: 'Planifié',
    voirDetail: 'Ouvrir le lab',
    retourLabs: '← Retour aux Labs',
    retourChambreRed: '← Retour à la chambre Red Team',
    retourChambreBlue: '← Retour à la chambre Blue Team',
    scenarioTitre: 'Synthèse du scénario',
    recommandationsTitre: 'Recommandations clés',
    redTeamRepoLabel: 'Voir le dépôt Red-Team-Labs sur GitHub',
    rapportTitre: 'Rapport complet & dépôt source',
    voirRapport: 'Voir le rapport complet sur GitHub',
    rapportEnPreparation: "Le dépôt GitHub contenant le rapport complet (README) et l'ensemble des captures sera lié ici dès sa publication.",
    galerieTitre: 'Captures clés du scénario',
    galerieSousTitre: "Sélection de 4 à 6 captures clés résumant le scénario — l'intégralité des preuves et le rapport détaillé figurent sur GitHub.",
    introuvableTitre: 'Lab introuvable',
    introuvableDetail: "Ce laboratoire n'existe pas (encore), ou le lien est erroné.",
    lightboxFermer: 'Fermer',
    lightboxPrecedent: 'Capture précédente',
    lightboxSuivant: 'Capture suivante',
  },
  sentinelxPage: {
    backToProjects: '← Retour aux projets',
    headerTag: 'Audit réseau — V1 NetLab',
    tagline: "Boîte à outils open source d'audit réseau en environnement contrôlé : détection déterministe par règles, scoring de risque documenté, rapports traçables.",
    badges: ['GPL v3', 'Python 3.10+', 'En développement actif'],
    problemTitle: 'Le problème résolu',
    problemBody: "Apprendre l'audit réseau et la détection de vulnérabilités exige un cadre contrôlé et des résultats explicables. SentinelX applique un principe simple : la détection repose sur des règles déterministes — jamais sur une boîte noire — et chaque score de risque suit une formule documentée dans le code.",
    archiTitle: 'Architecture modulaire',
    archiNote: "Un CLI unique (Typer) orchestre le pipeline. Chaque module est indépendant, et les findings sont persistés dans une base SQLite propre à chaque session.",
    pipeline: ['DISCOVER', 'DETECT', 'ASSESS', 'EXPLAIN', 'LEARN (V2)', 'REMEDIATE', 'VERIFY'],
    modulesTitle: 'Modules réels (implémentés)',
    modules: [
      {
        title: 'Reconnaissance',
        role: "Découverte d'actifs : fingerprinting d'appareils, énumération DNS (enregistrements, WHOIS), reconnaissance passive (cache ARP, mDNS).",
      },
      {
        title: 'Détection',
        role: "Scans TCP/UDP, identification des services avec correspondance CVE, énumération SMB (enum4linux), 7 règles de mauvaise configuration, identifiants par défaut.",
      },
      {
        title: 'Scoring de risque',
        role: "Chaque finding reçoit un score calculé par une formule inspirée de CVSS, documentée et consultable dans le dépôt.",
      },
      {
        title: 'Rapports',
        role: 'Exports HTML et JSON par session, avec gabarit au thème sombre/clair et recommandations de remédiation par finding.',
      },
      {
        title: 'Sentinel',
        role: "Moteur de surveillance : baseline du réseau, monitoring périodique, alertes sur dérive, liste blanche configurable.",
      },
    ],
    stackTitle: 'Stack réelle',
    stackItems: ['Python 3.10+', 'Typer', 'Rich', 'SQLite', 'dnspython', 'python-whois', 'Jinja2', 'Nmap', 'enum4linux', 'pytest'],
    statusTitle: "État d'avancement",
    statusNetlab: {
      title: 'V1 NetLab — en développement actif',
      body: "Le pipeline d'audit fonctionne en CLI : scan, persistance des findings par session, scoring, rapport HTML/JSON et rescan de vérification des correctifs.",
    },
    statusBranch: {
      title: 'Version de développement actuelle : branche a4-arena',
      body: "Le travail le plus récent — coffre d'identifiants chiffré, vérifications FTP/SNMP, nettoyage de laboratoire, intégration continue — se trouve sur la branche a4-arena et n'est pas encore fusionné dans main.",
    },
    roadmapTitle: 'Feuille de route',
    roadmap: [
      { name: 'Insight — V2', line: "Explications enrichies par IA et priorisation des findings.", badge: 'Planifié' },
      { name: 'Nexus — V3', line: 'Interface graphique et API unifiées.', badge: 'Planifié' },
    ],
    proofTitle: 'Preuves',
    proofGithub: 'Voir le dépôt sur GitHub',
    legalNote: "Cadre d'usage : uniquement sur des réseaux possédés ou avec une autorisation écrite explicite.",
  },
};

const uiEn: UiTexts = {
  nav: ['Home', 'About', 'Skills', 'Tools', 'Projects', 'Labs', 'Contact'],
  hero: {
    viewProjects: 'View my projects',
    downloadCv: 'Download CV',
    exploreLabs: 'Explore my Labs (Red & Blue Team)',
  },
  audit: {
    header: 'SOC — live feed',
    live: 'DEMO',
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
    discoverProject: 'Explore the project',
    featured: 'FEATURED',
    viewMore: 'See more projects',
    allProjectsTitle: 'All projects',
    allProjectsIntro: 'All projects and achievements built across cybersecurity, network auditing, forensics and web development.',
    backToHome: '← Back to home',
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
  labsPage: {
    title: 'Labs',
    intro: 'The controlled environments where the simulated attacks, forensic investigations, detections and hardenings showcased here are performed. Two distinct chambers: Red Team (offensive operations) and Blue Team (defense & SOC).',
    capturePending: 'Capture coming soon',
    viewRepo: 'View repository',
    viewDemo: 'Live demo',
    zoneLabel: '~/laboratoires',
    chambrePrompt: 'Click a lab to open its record, or a chamber header to focus on it:',
    entrerChambre: 'Focus chamber',
    quitterChambre: '← View both chambers',
    basculerRed: 'Red Team chamber →',
    basculerBlue: 'Blue Team chamber →',
    redTeamTitle: 'Red Team',
    redTeamSubtitle: 'Offense — think like the adversary',
    redTeamDesc: 'Offensive scenarios in an isolated environment: reconnaissance, network interception, flow analysis and countermeasures.',
    blueTeamTitle: 'Blue Team',
    blueTeamSubtitle: 'Defense & SOC — detection, forensics and hardening',
    blueTeamDesc: 'Forensic investigation in a VM, detection rules (YARA/Sigma) and system hardening and monitoring scenarios.',
    prochainsLabsNote: 'Upcoming labs planned: SSH Hardening, network detection with Suricata.',
    brancheVide: 'No lab yet — the chamber is ready, content coming.',
    outilsTitle: 'Documented tools & projects',
    outilsIntro: 'Audits, analyses and deployed applications: environments and projects outside the offense/defense branches.',
    statutTermine: 'Done',
    statutEnCours: 'In progress',
    statutPlanifie: 'Planned',
    voirDetail: 'Open lab',
    retourLabs: '← Back to Labs',
    retourChambreRed: '← Back to Red Team chamber',
    retourChambreBlue: '← Back to Blue Team chamber',
    scenarioTitre: 'Scenario summary',
    recommandationsTitre: 'Key recommendations',
    redTeamRepoLabel: 'View Red-Team-Labs repository on GitHub',
    rapportTitre: 'Full report & source repository',
    voirRapport: 'View full report on GitHub',
    rapportEnPreparation: 'The GitHub repository containing the full report (README) and all captures will be linked here once published.',
    galerieTitre: 'Key scenario captures',
    galerieSousTitre: 'Selection of 4 to 6 key captures summarizing the scenario — the full evidence and detailed report live on GitHub.',
    introuvableTitre: 'Lab not found',
    introuvableDetail: 'This lab does not exist (yet), or the link is broken.',
    lightboxFermer: 'Close',
    lightboxPrecedent: 'Previous capture',
    lightboxSuivant: 'Next capture',
  },
  sentinelxPage: {
    backToProjects: '← Back to projects',
    headerTag: 'Network auditing — V1 NetLab',
    tagline: 'Open-source network audit toolkit for controlled environments: deterministic rule-based detection, documented risk scoring, traceable reports.',
    badges: ['GPL v3', 'Python 3.10+', 'Actively developed'],
    problemTitle: 'The problem it solves',
    problemBody: 'Learning network auditing and vulnerability detection requires a controlled framework and explainable results. SentinelX follows one simple principle: detection is based on deterministic rules — never on a black box — and every risk score follows a formula documented in the code.',
    archiTitle: 'Modular architecture',
    archiNote: 'A single CLI (Typer) orchestrates the pipeline. Each module is independent, and findings are persisted in a dedicated SQLite database per session.',
    pipeline: ['DISCOVER', 'DETECT', 'ASSESS', 'EXPLAIN', 'LEARN (V2)', 'REMEDIATE', 'VERIFY'],
    modulesTitle: 'Real modules (implemented)',
    modules: [
      {
        title: 'Reconnaissance',
        role: 'Asset discovery: device fingerprinting, DNS enumeration (records, WHOIS), passive recon (ARP cache, mDNS).',
      },
      {
        title: 'Detection',
        role: 'TCP/UDP scans, service identification with CVE matching, SMB enumeration (enum4linux), 7 misconfiguration rules, default credentials.',
      },
      {
        title: 'Risk scoring',
        role: 'Every finding receives a score computed with a CVSS-inspired formula, documented and readable in the repository.',
      },
      {
        title: 'Reports',
        role: 'HTML and JSON exports per session, with a dark/light themed template and per-finding remediation recommendations.',
      },
      {
        title: 'Sentinel',
        role: 'Monitoring engine: network baseline, periodic monitoring, drift alerts, configurable whitelist.',
      },
    ],
    stackTitle: 'Actual stack',
    stackItems: ['Python 3.10+', 'Typer', 'Rich', 'SQLite', 'dnspython', 'python-whois', 'Jinja2', 'Nmap', 'enum4linux', 'pytest'],
    statusTitle: 'Progress status',
    statusNetlab: {
      title: 'V1 NetLab — actively developed',
      body: 'The audit pipeline works from the CLI: scan, per-session finding persistence, scoring, HTML/JSON report, and remediation rescan.',
    },
    statusBranch: {
      title: 'Current development version: a4-arena branch',
      body: 'The most recent work — encrypted credential vault, FTP/SNMP checks, lab cleanup, continuous integration — lives on the a4-arena branch and has not been merged into main yet.',
    },
    roadmapTitle: 'Roadmap',
    roadmap: [
      { name: 'Insight — V2', line: 'AI-enriched explanations and finding prioritization.', badge: 'Planned' },
      { name: 'Nexus — V3', line: 'Unified graphical interface and API.', badge: 'Planned' },
    ],
    proofTitle: 'Proofs',
    proofGithub: 'View the repository on GitHub',
    legalNote: 'Terms of use: only on networks you own or with explicit written authorization.',
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
    photoPath: '/photo.jpg',
  },
  skills: [
    {
      category: 'Offensive/defensive security',
      items: ['Pentest', 'Malware analysis', 'OSINT', 'YARA/Sigma'],
    },
    {
      category: 'Networking',
      items: ['TCP/IP', 'SSH', 'Nmap', 'Scapy', 'ACL/firewall', 'tcpdump'],
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
    { name: 'SentinelX', url: 'https://github.com/GedeonTch/sentinelX', icon: 'sentinelx' },
  ],
  projects: [
    {
      title: 'SentinelX',
      tag: 'Network auditing — V1 NetLab',
      description: 'Open-source (GPL v3) network audit toolkit for controlled environments: reconnaissance, CVE detection, documented risk scoring, HTML and JSON reports, Sentinel monitoring engine.',
      stack: ['Python', 'Typer', 'SQLite', 'Nmap'],
      link: '/projets/sentinelx',
      featured: true,
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
    {
      title: 'PERMIS+ — Highway code',
      tag: 'Web application — live demo',
      description: 'Complete driving-school web app: catalogue of 20 road signs, graded MCQ quizzes with a hint bot, level progression, certifications and an administration area. Deployed online (free hosting: first load 30-60 s).',
      stack: ['Python', 'FastAPI', 'SQLite', 'JavaScript'],
      link: 'https://code-route-app.onrender.com',
      featured: false,
    },
  ],
  labs: [
    // ── Red Team branch ──
    {
      slug: 'mitm-arp-spoofing',
      title: 'ARP Spoofing / MITM',
      tag: 'Network attack (lab)',
      team: 'red',
      statut: 'termine',
      tags: ['Bettercap', 'Wireshark', 'tcpdump'],
      description: 'Network traffic interception through ARP cache poisoning on an isolated network, with cleartext credential extraction.',
      image: '/labs/arp-spoofing/01-recon-decouverte-hotes.png',
      repoUrl: 'https://github.com/GedeonTch/Red-Team-Labs/tree/main/arp-spoofing',
      detail: {
        scenario: [
          'Context & objective: fictional engagement conducted for MicroLogistics SARL on an isolated lab network (192.168.57.0/24). The objective is to demonstrate the risk of a Man-in-the-Middle (MITM) attack allowing an attacker on the same local segment to intercept unencrypted communications.',
          'Methodology: network reconnaissance to discover live hosts, ARP cache poisoning of the victim workstation via Bettercap (arp.spoof), packet capture with tcpdump and Wireshark, then cleartext interception of credentials submitted to the simulated login portal (“Portail Interne MicroLogistics SARL”).'
        ],
        recommandations: [
          'Mandatory HTTPS: systematically encrypt application traffic (TLS) and disable cleartext protocols (HTTP, FTP, Telnet).',
          'Dynamic ARP Inspection (DAI): enable ARP filtering on managed switches to reject illegitimate ARP replies.',
          'Network segmentation: isolate segments into VLANs to reduce local exposure and monitor ARP anomalies.'
        ],
        rapportUrl: 'https://github.com/GedeonTch/Red-Team-Labs/tree/main/arp-spoofing',
        images: [
          {
            src: '/labs/arp-spoofing/01-recon-decouverte-hotes.png',
            legende: 'Network reconnaissance: live host discovery on the subnet'
          },
          {
            src: '/labs/arp-spoofing/02-arp-avant-apres-poisoning.png',
            legende: 'Target ARP table before and after poisoning'
          },
          {
            src: '/labs/arp-spoofing/05-interception-post-login.png',
            legende: 'Cleartext interception of the portal POST login request'
          },
          {
            src: '/labs/arp-spoofing/06-wireshark-follow-http-stream.png',
            legende: 'Wireshark analysis (Follow HTTP Stream) of the intercepted authentication flow'
          }
        ]
      }
    },
    // ── Blue Team branch ──
    {
      slug: 'mayundo',
      title: 'MAYUNDO — Forensic investigation',
      tag: 'Malware analysis in a VM (SOC L1/L2)',
      team: 'blue',
      statut: 'termine',
      tags: ['YARA', 'Sigma', 'JavaScript', 'VirtualBox'],
      description: 'Analysis of a JavaScript worm spreading via USB drives, conducted in a controlled VM: static investigation, passive C2 investigation, YARA/Sigma detection rules, forensic infection evidence and remediation script.',
      image: '/labs/mayundo.png',
      repoUrl: 'https://github.com/GedeonTch/MAYUNDO-MALWARE-ANALYSIS',
      detail: {
        scenario: [
          'Context & objective: forensic investigation (SOC L1/L2 level) conducted on a JavaScript/JScript worm spreading through removable media (USB drives), carried out entirely inside an isolated virtual machine.',
          'Execution: deobfuscation and static analysis of the malicious script, passive investigation of the C2 infrastructure, collection of infection artefacts in a controlled VM, and identification of a RisePro Stealer co-infection.',
          'Detection & remediation: authoring of YARA and Sigma rules for endpoint and SIEM detection, IoC documentation and development of a self-verifying cleanup script.'
        ],
        images: []
      }
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
