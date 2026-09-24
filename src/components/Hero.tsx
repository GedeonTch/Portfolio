// Section Hero avec effet de frappe terminal et photo de profil
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { content } from '@/data/content';
import { useTheme } from '@/lib/theme-context';

export default function Hero() {
  const { theme } = useTheme();
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const name = content.hero.name;

  // Effet de frappe terminal
  useEffect(() => {
    // Vérifier les préférences de mouvement réduit
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setDisplayText(name);
      setIsTyping(false);
      return;
    }

    let index = 0;
    const typingSpeed = 100; // ms par caractère

    const timer = setInterval(() => {
      if (index < name.length) {
        setDisplayText(name.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [name]);

  const accentColor = theme === 'terminal' ? 'text-[#00ff9d]' : 'text-[#ff6b6b]';
  const borderColor = theme === 'terminal' ? 'border-[#00ff9d]' : 'border-[#ff6b6b]';

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Scène 3D en arrière-plan */}
      <div className="absolute inset-0 z-0 opacity-60">
        {/* Placeholder pour la scène 3D - à activer plus tard */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center opacity-20">
            <div className="text-6xl mb-4">🛡️</div>
            <p className="text-sm">Scène 3D</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Colonne gauche - Photo de profil */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative">
            {/* Cadre hexagonal avec bordure animée */}
            <div className={`w-48 h-48 md:w-64 md:h-64 relative ${borderColor} border-2 rounded-lg overflow-hidden bg-gradient-to-br from-transparent to-transparent`}>
              {/* Effet de scan sur la bordure */}
              <motion.div
                className={`absolute inset-0 ${borderColor} border-2 rounded-lg`}
                animate={{
                  boxShadow: [
                    `0 0 5px ${theme === 'terminal' ? '#00ff9d' : '#ff6b6b'}`,
                    `0 0 20px ${theme === 'terminal' ? '#00ff9d' : '#ff6b6b'}`,
                    `0 0 5px ${theme === 'terminal' ? '#00ff9d' : '#ff6b6b'}`,
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Photo de profil ou placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-[var(--card-bg)]">
                {content.hero.photoPath === '/photo-placeholder.svg' ? (
                  // Placeholder silhouette
                  <svg
                    className="w-24 h-24 md:w-32 md:h-32 text-[var(--text-muted)]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                ) : (
                  <img
                    src={content.hero.photoPath}
                    alt="Photo de profil"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Colonne droite - Texte */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          {/* Nom avec effet de frappe */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            <span className={accentColor}>{displayText}</span>
            {isTyping && <span className="cursor-blink">|</span>}
          </h1>

          {/* Titre */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[var(--text-muted)] mb-4"
          >
            {content.hero.title}
          </motion.p>

          {/* Accroche */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 font-semibold"
          >
            {content.hero.tagline}
          </motion.p>

          {/* Boutons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                theme === 'terminal'
                  ? 'bg-[#00ff9d] text-black hover:bg-[#00cc7d]'
                  : 'bg-[#ff6b6b] text-black hover:bg-[#ff8787]'
              }`}
            >
              Voir mes projets
            </a>
            <a
              href={content.contact.cvPath}
              className={`px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-300 hover:scale-105 ${
                theme === 'terminal'
                  ? 'border-[#00ff9d] text-[#00ff9d] hover:bg-[#00ff9d] hover:text-black'
                  : 'border-[#ff6b6b] text-[#ff6b6b] hover:bg-[#ff6b6b] hover:text-black'
              }`}
            >
              Télécharger CV
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Logs d'audit défilants en arrière-plan */}
      <div className="absolute bottom-4 left-4 z-0 opacity-30 font-mono text-xs hidden md:block">
        <AuditLogs />
      </div>
    </section>
  );
}

// Composant pour les logs d'audit défilants
function AuditLogs() {
  const logs = [
    "08:14:39 SCAN Analyse du périmètre externe lancée",
    "08:15:11 ALERTE 3 tentatives de connexion suspectes, IP bloquée",
    "08:15:12 ACTION Compte verrouillé, client notifié en 41 s",
    "08:17:48 INFO Correctif critique déployé sur 12 serveurs",
    "08:21:05 SCAN 0 vulnérabilité critique détectée ce matin",
    "08:21:42 INFO Sauvegarde nocturne vérifiée, 142/142 actifs OK",
  ];

  return (
    <div className="space-y-1">
      {logs.map((log, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="text-[var(--text-muted)]"
        >
          {log}
        </motion.div>
      ))}
    </div>
  );
}