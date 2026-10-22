// Fichier de données centralisé pour le portfolio
// Toutes les informations éditables sont ici - modifier ce fichier pour mettre à jour le contenu

import { ContentData } from '@/types';

export const content: ContentData = {
  // Section Hero
  hero: {
    name: "Gédéon Cibanvunya",
    title: "Étudiant en Informatique de Gestion, orientation Cybersécurité — Université Lumière de Bujumbura (ULBU), Burundi",
    tagline: "Passionné par l'analyse SOC, le pentest et le développement logiciel de sécurité",
    photoPath: "/photo.jpg", // Photo de profil réelle
  },

  // Section Compétences
  skills: [
    {
      category: "Sécurité offensive/défensive",
      items: ["Pentest", "Analyse malware", "OSINT", "YARA/Sigma"]
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
      link: "https://github.com/GedeonTch/MAYUNDO-MALWARE-ANALYSIS",
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
