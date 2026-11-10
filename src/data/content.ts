// Fichier de données centralisé pour le portfolio
// Toutes les informations éditables sont ici - modifier ce fichier pour mettre à jour le contenu

import { ContentData } from '@/types';

export const content: ContentData = {
  // Section Hero
  hero: {
    name: "Gédéon Cibanvunya",
    title: "Informatique de Gestion — Université Lumière de Bujumbura (ULBU) · Cybersécurité en autonomie",
    tagline: "Passionné par l'analyse SOC, le pentest et le développement logiciel de sécurité",
    photoPath: "/photo.jpg", // Photo de profil réelle
  },

  // Section Compétences
  skills: [
    {
      category: "Sécurité offensive/défensive",
      items: ["Pentest", "Analyse malware", "Analyse des logs", "OSINT", "YARA/Sigma"]
    },
    {
      category: "Réseau",
      items: ["TCP/IP", "SSH", "Nmap", "Scapy", "ACL/firewall", "tcpdump"]
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
      items: ["Kali Linux", "VirtualBox", "Docker", "Wireshark", "OWASP ZAP", "Burp Suite", "GVM", "SentinelX", "Wazuh"]
    }
  ],

  // Section Outils & Technologies (badges cliquables)
  tools: [
    {
      name: "Python",
      url: "/projets/sentinelx",
      icon: "python"
    },
    {
      name: "Kali Linux",
      url: "/labs/mitm-arp-spoofing",
      icon: "kali"
    },
    {
      name: "Nmap",
      url: "/projets/sentinelx",
      icon: "nmap"
    },
    {
      name: "Docker",
      url: "/projets",
      icon: "docker"
    },
    {
      name: "Wireshark",
      url: "/labs/mitm-arp-spoofing",
      icon: "wireshark"
    },
    {
      name: "OWASP ZAP",
      url: "/competences/owasp-zap",
      icon: "zap"
    },
    {
      name: "Wazuh",
      url: "/competences/wazuh",
      icon: "wazuh"
    },
    {
      name: "SentinelX",
      url: "https://github.com/GedeonTch/sentinelX", // Repo GitHub officiel SentinelX
      icon: "sentinelx"
    }
  ],

  // Section Projets
  projects: [
    {
      title: "SentinelX",
      tag: "Audit réseau — V1 NetLab",
      description: "Boîte à outils open source (GPL v3) d'audit réseau en environnement contrôlé : reconnaissance, détection CVE, scoring de risque documenté, rapports HTML et JSON, moteur de surveillance Sentinel.",
      stack: ["Python", "Typer", "SQLite", "Nmap"],
      link: "/projets/sentinelx",
      featured: true
    },
    {
      title: "MAYUNDO — Analyse de malware",
      tag: "Analyse forensique",
      description: "Analyse complète niveau SOC L1/L2 d'un ver JavaScript/JScript se propageant par clé USB (Afrique subsaharienne). Analyse statique, investigation passive C2, règles YARA/Sigma, guide de remédiation, preuves forensiques d'infection contrôlée en VM, co-infection RisePro Stealer découverte, script de nettoyage auto-vérifiant.",
      stack: ["JavaScript", "YARA", "Sigma", "VirtualBox"],
      link: "/labs/mayundo",
      featured: false
    },
    {
      title: "ETCH — E-commerce",
      tag: "Application web",
      description: "Site e-commerce d'électronique et mobilier européens reconditionnés (ÉTABLISSEMENT TCHIBANVUNYA). Stack : Next.js 14, Tailwind, Three.js, MySQL/Prisma, déployé sur Vercel. Trilingue, tarification USD/CDF.",
      stack: ["Next.js 14", "Tailwind CSS", "Three.js", "MySQL", "Prisma"],
      link: "https://etch-store.vercel.app/", // Site en production
      featured: false
    },
    {
      title: "PERMIS+ — Code de la route",
      tag: "Application web — démo live",
      description: "Application web complète d'auto-école : catalogue de 20 panneaux, quiz QCM notés avec bot d'indices, progression par niveaux, certifications et espace d'administration. Déployée en ligne (hébergement gratuit : premier chargement 30 à 60 s).",
      stack: ["Python", "FastAPI", "SQLite", "JavaScript"],
      link: "https://code-route-app.onrender.com",
      featured: false
    },
    {
      title: "CipherChat Web",
      tag: "Messagerie web — projet pédagogique",
      description: "Messagerie éphémère avec chiffrement côté navigateur. Dans la version documentée, le serveur connaît le code de chambre et peut dériver la clé : les messages ne sont pas protégés contre lui. Démo sur Render.",
      stack: ["Python", "FastAPI", "WebSocket", "Web Crypto", "AES-GCM"],
      link: "https://cipherchat-0fhm.onrender.com/",
      featured: false
    },
    {
      title: "CipherChat CLI",
      tag: "Messagerie en ligne de commande",
      description: "Client de messagerie temps réel avec chiffrement AES-GCM et phrase secrète partagée, relayé par un serveur WebSocket FastAPI. La clé partagée ne garantit pas l’identité individuelle des participants.",
      stack: ["Python", "FastAPI", "WebSocket", "AES-GCM"],
      link: "https://github.com/GedeonTch/CipherChat-CLI",
      featured: false
    }
  ],

  // Page Labs — galerie des environnements de laboratoire
  // Principe : le portfolio présente une synthèse rapide (~30 s de lecture) avec
  // 4 à 6 captures clés par lab ; le rapport complet (README) et l'ensemble des
  // preuves restent sur le dépôt GitHub du lab (repoUrl).
  labs: [
    // ── Branche RED TEAM ───────────────────────────────────────────────────
    // Pour finaliser un lab :
    //   1. déposer 4 à 6 captures clés dans /public/labs/ et les lister dans
    //      detail.images dans l'ordre logique du scénario ;
    //   2. renseigner repoUrl (lien vers le dépôt GitHub contenant le README complet) ;
    //   3. passer statut à "termine".
    {
      slug: "escalade-privileges-overlayfs",
      title: "Escalade de privilèges Linux — OverlayFS",
      tag: "Post-exploitation — CVE-2015-1328",
      team: "red",
      statut: "termine",
      tags: ["Linux", "OverlayFS", "CVE-2015-1328", "SearchSploit"],
      description: "En laboratoire isolé, un accès utilisateur non privilégié est élevé à root sur Ubuntu 14.04 via un exploit public d’OverlayFS. La validation après remédiation n’a pas été réalisée.",
      image: "/labs/escalade-privileges/08-exploitation-reussie-root.png",
      repoUrl: "https://github.com/GedeonTch/Red-Team-Labs/tree/main/EscaladePrivileges",
      detail: {
        scenario: [
          "Contexte : VM Ubuntu 14.04 en laboratoire isolé, avec un accès initial au compte non privilégié karen ; cet accès initial est hors du périmètre du rapport.",
          "Méthodologie : vérification des permissions et de la version du noyau, recherche d’un exploit public pour CVE-2015-1328, puis compilation et exécution sur la cible. L’accès root est vérifié avec whoami et id."
        ],
        recommandations: [
          "Appliquer les mises à jour de sécurité du noyau fournies par le distributeur, en vérifiant les correctifs rétroportés.",
          "Limiter les user namespaces non privilégiés lorsque c’est compatible avec les besoins, et surveiller les activités inhabituelles sur les systèmes.",
          "Validation post-remédiation non réalisée dans ce lab : vérifier l’efficacité des mesures en environnement contrôlé."
        ],
        rapportUrl: "https://github.com/GedeonTch/Red-Team-Labs/blob/main/EscaladePrivileges/RAPPORT.md",
        images: [
          { src: "/labs/escalade-privileges/01-ssh-acces-initial-karen.png", legende: "Accès SSH initial avec un compte non privilégié" },
          { src: "/labs/escalade-privileges/02-enumeration-permissions-sudo.png", legende: "Vérification des permissions du compte" },
          { src: "/labs/escalade-privileges/03-identification-version-kernel.png", legende: "Identification de la version du noyau" },
          { src: "/labs/escalade-privileges/04-recherche-exploit-searchsploit.png", legende: "Recherche de l’exploit public avec SearchSploit" },
          { src: "/labs/escalade-privileges/08-exploitation-reussie-root.png", legende: "Accès root confirmé avec whoami et id" }
        ]
      }
    },
    {
      slug: "mitm-arp-spoofing",
      title: "ARP Spoofing / MITM",
      tag: "Attaque réseau (laboratoire)",
      team: "red",
      statut: "termine",
      tags: ["Bettercap", "Wireshark", "tcpdump"],
      description: "Interception de trafic réseau via empoisonnement de cache ARP sur un réseau isolé, avec extraction d'identifiants en clair.",
      image: "/labs/arp-spoofing/01-recon-decouverte-hotes.png",
      repoUrl: "https://github.com/GedeonTch/Red-Team-Labs/tree/main/arp-spoofing",
      detail: {
        scenario: [
          "Contexte & objectif : mission fictive menée pour MicroLogistics SARL au sein d'un réseau de laboratoire isolé (192.168.57.0/24). L'objectif est de démontrer le risque d'une attaque Man-in-the-Middle (MITM) permettant à un attaquant connecté au même segment local d'intercepter des communications non chiffrées.",
          "Méthodologie : reconnaissance réseau pour identifier les hôtes actifs, empoisonnement du cache ARP de la machine victime via Bettercap (arp.spoof), capture du trafic avec tcpdump et Wireshark, puis interception en clair des identifiants transmis sur la page de connexion simulée (« Portail Interne MicroLogistics SARL »)."
        ],
        recommandations: [
          "HTTPS obligatoire : chiffrer systématiquement les flux applicatifs (TLS) et désactiver les protocoles en clair (HTTP, FTP, Telnet).",
          "Dynamic ARP Inspection (DAI) : activer le filtrage ARP sur les switches gérés pour rejeter les réponses ARP illégitimes.",
          "Segmentation réseau : cloisonner les segments par VLAN afin de réduire la surface d'exposition locale et surveiller les anomalies ARP."
        ],
        rapportUrl: "https://github.com/GedeonTch/Red-Team-Labs/tree/main/arp-spoofing",
        images: [
          {
            src: "/labs/arp-spoofing/01-recon-decouverte-hotes.png",
            legende: "Reconnaissance réseau : découverte des hôtes actifs sur le sous-réseau"
          },
          {
            src: "/labs/arp-spoofing/02-arp-avant-apres-poisoning.png",
            legende: "Table ARP de la machine cible avant et après empoisonnement"
          },
          {
            src: "/labs/arp-spoofing/05-interception-post-login.png",
            legende: "Interception en clair de la requête POST de connexion au portail"
          },
          {
            src: "/labs/arp-spoofing/06-wireshark-follow-http-stream.png",
            legende: "Analyse Wireshark (Follow HTTP Stream) du flux d'authentification intercepté"
          },
          {
            src: "/labs/arp-spoofing/07-session-victime-vs-interception.png",
            legende: "Comparaison : session de la victime connectée vs terminal d'interception de l'attaquant"
          }
        ]
      }
    },
    // ── Branche BLUE TEAM — les labs les plus récents sont placés en tête ──
    {
      slug: "forensics-ir-h4cked",
      title: "Forensics & Incident Response — Analyse réseau",
      tag: "Investigation réseau — scénario pédagogique",
      team: "blue",
      statut: "termine",
      tags: ["Wireshark", "Forensics", "Incident Response", "FTP"],
      description: "Investigation d’un incident fictif à partir d’une capture réseau, puis reproduction contrôlée du scénario. Lab pédagogique basé sur la room TryHackMe h4cked.",
      image: "/labs/forensics-ir/01-ftp-bruteforce-usernames.png",
      repoUrl: "https://github.com/GedeonTch/Blue-Team-Labs/tree/main/Forensics_IR",
      detail: {
        scenario: [
          "Contexte : scénario fictif TransKivu Logistique SARL basé sur la room TryHackMe h4cked. Analyse d’une capture réseau pour reconstituer une intrusion, suivie d’une reproduction en laboratoire.",
          "Investigation : tentatives et connexion FTP, dépôt d’un fichier PHP, puis observation d’un shell et d’une élévation de privilèges. Une tentative d’installation du rootkit Reptile est rapportée comme ayant échoué ; la reproduction contrôlée explore aussi un accès SSH direct."
        ],
        recommandations: [
          "Renforcer les mots de passe, éviter leur réutilisation et revoir les droits sudo selon le principe du moindre privilège.",
          "Remplacer FTP en clair par un transfert sécurisé ; isoler les dépôts de fichiers et empêcher l’exécution de scripts dans les répertoires d’upload.",
          "Limiter et surveiller les connexions sortantes ; investiguer les anomalies réseau."
        ],
        rapportUrl: "https://github.com/GedeonTch/Blue-Team-Labs/blob/main/Forensics_IR/RAPPORT_INCIDENT.md",
        images: [
          { src: "/labs/forensics-ir/01-ftp-bruteforce-usernames.png", legende: "Connexions FTP répétées dans la capture" },
          { src: "/labs/forensics-ir/03-ftp-login-success.png", legende: "Authentification FTP et dépôt du fichier" },
          { src: "/labs/forensics-ir/04-ftp-session-stor-chmod.png", legende: "Reconstitution du flux de contrôle FTP" },
          { src: "/labs/forensics-ir/06-reverse-shell-tty-wwwdata.png", legende: "Analyse de la session et du shell dans le flux réseau" },
          { src: "/labs/forensics-ir/07-privesc-sudo-root-clone.png", legende: "Élévation de privilèges et tentative de clonage de Reptile" }
        ]
      }
    },
    {
      slug: "ssh-hardening",
      title: "SSH Hardening & Fail2ban",
      tag: "Durcissement système & défense (laboratoire)",
      team: "blue",
      statut: "termine",
      tags: ["OpenSSH", "Fail2ban", "Hydra", "Nmap"],
      description: "Évaluation d'un service SSH exposé au brute force (Hydra), analyse des journaux /var/log/auth.log, déploiement de Fail2ban et durcissement OpenSSH par authentification par clés uniquement.",
      image: "/labs/ssh-hardening/02_bruteforce_hydra_avant.png",
      repoUrl: "https://github.com/GedeonTch/Blue-Team-Labs/tree/main/ssh-hardening",
      detail: {
        scenario: [
          "Contexte & objectif : mission Purple/Blue Team menée pour MicroLogistics SARL sur un réseau de laboratoire isolé (10.0.2.0/24). L'objectif est de démontrer le risque d'un service SSH exposé à une attaque par force brute, puis de mettre en œuvre la remédiation (bannissement dynamique + durcissement du démon SSH) et d'en prouver l'efficacité.",
          "Méthodologie : reconnaissance du port 22 (Nmap), compromission initiale des comptes cisco et analyst par dictionnaire avec Hydra, corrélation des tentatives dans /var/log/auth.log, déploiement de Fail2ban (maxretry = 3, findtime = 600s, bantime = 1800s) bannissant automatiquement l'IP attaquante, puis durcissement d'OpenSSH par désactivation des mots de passe au profit de l'authentification par clés SSH uniquement."
        ],
        recommandations: [
          "Authentification par clés SSH uniquement : désactiver PasswordAuthentication dans sshd_config et imposer l'usage de clés cryptographiques protégées par passphrase.",
          "Bannissement automatique (Fail2ban) : activer la prison sshd pour bloquer dynamiquement toute IP dépassant le seuil d'échecs d'authentification.",
          "Supervision des journaux : surveiller régulièrement /var/log/auth.log afin de détecter les rafales d'échecs et les tentatives d'énumération de comptes."
        ],
        rapportUrl: "https://github.com/GedeonTch/Blue-Team-Labs/tree/main/ssh-hardening",
        images: [
          {
            src: "/labs/ssh-hardening/02_bruteforce_hydra_avant.png",
            legende: "Attaque initiale par force brute (Hydra) compromettant les comptes cisco et analyst"
          },
          {
            src: "/labs/ssh-hardening/05_log_cisco_accepted.png",
            legende: "Analyse de /var/log/auth.log : rafale d'échecs suivie de l'ouverture de session pour cisco"
          },
          {
            src: "/labs/ssh-hardening/07_fail2ban_config.png",
            legende: "Configuration de Fail2ban (/etc/fail2ban/jail.local) et activation de la prison sshd"
          },
          {
            src: "/labs/ssh-hardening/08_fail2ban_ban_ip.png",
            legende: "Bannissement automatique de l'IP attaquante (10.0.2.10) après détection des échecs"
          },
          {
            src: "/labs/ssh-hardening/10_durcissement_cle_ssh.jpg",
            legende: "Durcissement OpenSSH : refus sans clé (Permission denied publickey) et connexion par clé SSH"
          },
          {
            src: "/labs/ssh-hardening/12_preuve_finale_apres.png",
            legende: "Preuve finale après durcissement : échec de Hydra (authentification par mot de passe désactivée)"
          }
        ]
      }
    },
    {
      slug: "mayundo",
      title: "MAYUNDO — Investigation forensique",
      tag: "Analyse de malware en VM (SOC L1/L2)",
      team: "blue",
      statut: "termine",
      tags: ["YARA", "Sigma", "JavaScript", "VirtualBox"],
      description: "Analyse d'un ver JavaScript se propageant par clé USB, conduite dans une VM contrôlée : investigation statique, investigation passive C2, règles de détection YARA/Sigma, preuves forensiques d'infection et script de remédiation.",
      image: "/labs/mayundo/11-processus-usb.png",
      repoUrl: "https://github.com/GedeonTch/MAYUNDO-MALWARE-ANALYSIS",
      detail: {
        scenario: [
          "Contexte & objectif : investigation forensique (niveau SOC L1/L2) menée sur le ver JavaScript/JScript Mayundo se propageant par clés USB en remplaçant les dossiers par des raccourcis .lnk piégés, validée par une infection contrôlée dans une machine virtuelle VirtualBox isolée.",
          "Méthodologie : analyse statique du script start.js (et de sa copie locale profile.js), investigation passive de l'infrastructure C2, observation en VM de la multiplication des processus wscript.exe, de l'installation dans %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer et de la clé de persistance registre HKCU\\...\\Run\\Helper."
        ],
        recommandations: [
          "Restriction de Windows Script Host (WSH) : désactiver ou restreindre wscript.exe / cscript.exe par GPO sur les postes utilisateurs et bloquer l'exécution de scripts depuis les supports amovibles.",
          "Détection YARA & SIEM (Sigma) : déployer la règle YARA Mayundo_JS_Worm et alerter sur la création de la clé registre Run\\Helper, des verrous 1.lock / 2.lock et de profile.js dans %LOCALAPPDATA%.",
          "Procédure de remédiation : arrêt des processus wscript.exe, suppression de profile.js et de la clé Helper, puis restauration des attributs des dossiers cachés sur le support USB."
        ],
        rapportUrl: "https://github.com/GedeonTch/MAYUNDO-MALWARE-ANALYSIS",
        images: [
          {
            src: "/labs/mayundo/11-processus-usb.png",
            legende: "Structure de la clé USB infectée (faux .lnk, vrais dossiers cachés, start.js) et processus wscript.exe actifs"
          },
          {
            src: "/labs/mayundo/05-fichiers-persistants.png",
            legende: "Installation locale dans %LOCALAPPDATA%\\Microsoft\\Windows\\Explorer : profile.js et verrous 1.lock / 2.lock"
          },
          {
            src: "/labs/mayundo/07-registre-confirme.png",
            legende: "Persistance au démarrage confirmée dans le registre : clé HKCU\\...\\Run\\Helper pointant vers profile.js"
          },
          {
            src: "/labs/mayundo/13-yara-detection.png",
            legende: "Détection YARA (règle Mayundo_JS_Worm) confirmant les signatures réseau, fichiers et fonctions du ver"
          },
          {
            src: "/labs/mayundo/09-nettoyage.png",
            legende: "Exécution du script de nettoyage et validation finale : processus, registre et fichiers persistants supprimés"
          }
        ]
      }
    }
    // Exemple prêt à décommenter pour les prochains labs Blue Team :
    /*
    ,{
      slug: "ssh-hardening",
      title: "SSH Hardening",
      tag: "Durcissement système (laboratoire)",
      team: "blue",
      statut: "en-cours",
      tags: ["OpenSSH", "Linux", "Fail2ban"],
      description: "Durcissement d'un service SSH exposé en laboratoire : authentification par clés uniquement, restriction des utilisateurs, désactivation de l'accès root et vérification de la surface d'attaque.",
      image: "",
      repoUrl: "https://github.com/GedeonTch/...",
      detail: {
        scenario: [
          "Contexte & objectif : ...",
          "Exécution : ...",
          "Sécurité & vérification : ..."
        ],
        images: []
      }
    }
    */
  ],

  // Section Contact
  contact: {
    email: "tchibanvunyagedeon@gmail.com",
    whatsapp: "https://wa.me/25766504165",
    github: "https://github.com/GedeonTch",
    linkedin: "https://www.linkedin.com/in/gedeon-tchibanvunya-515692356/",
    cvPath: "", // CV en attente
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

// Liens internes des outils : une preuve existante ou une page « à venir ».
export const toolEvidence: Record<string, string> = {
  'Python': '/projets/sentinelx', 'Kali Linux': '/labs/mitm-arp-spoofing',
  'Nmap': '/projets/sentinelx', 'Docker': '/projets',
  'Wireshark': '/labs/mitm-arp-spoofing', 'OWASP ZAP': '/competences/owasp-zap',
  'Wazuh': '/competences/wazuh', 'Active Directory (AD DS)': '/competences/active-directory',
  'SentinelX': '/projets/sentinelx', 'Burp Suite': '/competences/burp-suite',
  'GVM': '/competences/gvm', 'Analyse des logs': '/labs/ssh-hardening',
  'Log analysis': '/labs/ssh-hardening',
};
export const plannedSkills = {
  'wazuh': 'Wazuh', 'owasp-zap': 'OWASP ZAP', 'active-directory': 'Active Directory (AD DS)',
  'burp-suite': 'Burp Suite', 'gvm': 'GVM',
} as const;

// Parcours : documents publics ajoutés avec l'accord du propriétaire.
export const education = {
  fr: {
    title: 'Formation & certifications',
    studies: [
      { school: 'Lycée Madre Elena', detail: 'Commercial et Gestion — diplôme attendu' },
      { school: 'Université Lumière de Bujumbura', detail: 'Licence en Informatique de Gestion — cursus terminé, diplôme attendu' },
      { school: 'Cybersécurité', detail: 'Apprentissage autonome' },
    ],
    courses: [
      { name: 'Cisco Networking Academy — Networking Basics', status: 'Certificat obtenu', href: '/certifications/networking-basics.pdf' },
      { name: 'Introduction to Network Analysis', status: 'Certificat obtenu', href: '/certifications/network-analysis.pdf' },
      { name: 'Cisco — Ethical Hacker', status: 'En cours', href: '' },
      { name: 'TryHackMe — cours, labs & CTF', status: 'En apprentissage', href: 'https://tryhackme.com/p/cibanG' },
      { name: 'Hack The Box', status: 'À venir', href: '' },
    ],
    studyLabel: 'Parcours', courseLabel: 'Certifications & pratique', view: 'Voir',
  },
  en: {
    title: 'Education & certifications',
    studies: [
      { school: 'Lycée Madre Elena', detail: 'Commerce and Management — diploma pending' },
      { school: 'Université Lumière de Bujumbura', detail: 'Management Information Systems — coursework completed, diploma pending' },
      { school: 'Cybersecurity', detail: 'Self-directed learning' },
    ],
    courses: [
      { name: 'Cisco Networking Academy — Networking Basics', status: 'Certificate earned', href: '/certifications/networking-basics.pdf' },
      { name: 'Introduction to Network Analysis', status: 'Certificate earned', href: '/certifications/network-analysis.pdf' },
      { name: 'Cisco — Ethical Hacker', status: 'In progress', href: '' },
      { name: 'TryHackMe — courses, labs & CTF', status: 'Learning', href: 'https://tryhackme.com/p/cibanG' },
      { name: 'Hack The Box', status: 'Coming soon', href: '' },
    ],
    studyLabel: 'Education', courseLabel: 'Certifications & practice', view: 'View',
  },
};
