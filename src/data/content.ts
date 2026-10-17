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
          }
        ]
      }
    },
    // ── Branche BLUE TEAM — accueille MAYUNDO + futurs labs (SSH Hardening, Suricata…) ──
    {
      slug: "mayundo",
      title: "MAYUNDO — Investigation forensique",
      tag: "Analyse de malware en VM (SOC L1/L2)",
      team: "blue",
      statut: "termine",
      tags: ["YARA", "Sigma", "JavaScript", "VirtualBox"],
      description: "Analyse d'un ver JavaScript se propageant par clé USB, conduite dans une VM contrôlée : investigation statique, investigation passive C2, règles de détection YARA/Sigma, preuves forensiques d'infection et script de remédiation.",
      image: "/labs/mayundo.png",
      repoUrl: "https://github.com/GedeonTch/MAYUNDO-MALWARE-ANALYSIS",
      detail: {
        scenario: [
          "Contexte & objectif : investigation forensique (niveau SOC L1/L2) menée sur un ver JavaScript/JScript se propageant par supports amovibles (clés USB), intégralement conduite dans une machine virtuelle isolée.",
          "Exécution : désobfuscation et analyse statique du script malveillant, investigation passive de l'infrastructure C2, collecte des artefacts d'infection en VM contrôlée et mise en évidence d'une co-infection par RisePro Stealer.",
          "Détection & remédiation : rédaction de règles YARA et Sigma pour la détection sur poste et en SIEM, documentation des IoC et développement d'un script de nettoyage auto-vérifiant."
        ],
        images: [
          // Sélection de 4 à 6 captures clés (à déposer dans /public/labs/) :
          // { src: "/labs/mayundo-01-vm.png", legende: "Environnement d'analyse isolé et artefacts initiaux" },
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
