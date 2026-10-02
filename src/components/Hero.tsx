// Section Hero : effet de frappe, vrai bouclier SentinelX en fond, flux d'audit live
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from '@/lib/theme-context';
import { useLanguage } from '@/lib/language-context';

export default function Hero() {
  const { theme } = useTheme();
  const { t, data } = useLanguage();
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [accentHex, setAccentHex] = useState('#22d3ee');
  const name = data.hero.name;

  // Préférences de mouvement réduit
  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(motionQuery.matches);
    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    motionQuery.addEventListener('change', onChange);
    return () => motionQuery.removeEventListener('change', onChange);
  }, []);

  // Couleur d'accent résolue depuis la variable CSS (pour le boxShadow animé en JS)
  useEffect(() => {
    const value = getComputedStyle(document.body).getPropertyValue('--accent').trim();
    if (value) setAccentHex(value);
  }, [theme]);

  // Effet de frappe terminal
  useEffect(() => {
    if (reducedMotion) {
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
  }, [name, reducedMotion]);

  return (
    <section className="relative min-h-screen flex items-center px-4 overflow-hidden pt-24 pb-12">
      {/* Emblème SentinelX réaliste en arrière-plan : grand, mais très discret */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center md:justify-end md:pr-[6%]" aria-hidden="true">
        <Image
          src="/icons/sentinelx-shield.png"
          alt=""
          width={512}
          height={512}
          className="w-80 md:w-[30rem] h-auto opacity-[0.14] mix-blend-screen"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Colonne gauche - Photo de profil */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative">
              {/* Cadre avec bordure animée */}
              <div className="w-48 h-48 md:w-64 md:h-64 relative border-[var(--accent)] border-2 rounded-lg overflow-hidden bg-gradient-to-br from-transparent to-transparent">
                {/* Effet de scan sur la bordure */}
                <motion.div
                  className="absolute inset-0 border-[var(--accent)] border-2 rounded-lg"
                  animate={
                    reducedMotion
                      ? undefined
                      : {
                          boxShadow: [
                            `0 0 5px ${accentHex}`,
                            `0 0 20px ${accentHex}`,
                            `0 0 5px ${accentHex}`,
                          ],
                        }
                  }
                  transition={
                    reducedMotion
                      ? undefined
                      : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                  }
                />

                {/* Photo de profil ou placeholder */}
                <div className="w-full h-full flex items-center justify-center bg-[var(--card-bg)]">
                  {data.hero.photoPath === '/photo-placeholder.svg' ? (
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
                      src={data.hero.photoPath}
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
              <span className="text-[var(--accent)]">{displayText}</span>
              {isTyping && <span className="cursor-blink">|</span>}
            </h1>

            {/* Titre */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-[var(--text-muted)] mb-4"
            >
              {data.hero.title}
            </motion.p>

            {/* Accroche */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl mb-8 font-semibold"
            >
              {data.hero.tagline}
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
                className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 bg-[var(--accent)] text-black hover:bg-[var(--accent-secondary)]"
              >
                {t.hero.viewProjects}
              </a>
              <a
                href={data.contact.cvPath}
                className="px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-300 hover:scale-105 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black"
              >
                {t.hero.downloadCv}
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Panneau d'audit SOC — entrée ascendante (scène qui monte) */}
        <AuditLogs reducedMotion={reducedMotion} />
      </div>
    </section>
  );
}

interface LogLine {
  id: number;
  time: string;
  text: string;
}

const LOGS_MAX = 6;
const LOG_INTERVAL = 2400; // ms entre deux lignes

// Panneau terminal "SOC — flux temps réel" : les lignes défilent en continu
function AuditLogs({ reducedMotion }: { reducedMotion: boolean }) {
  const { t } = useLanguage();
  const templates = t.audit.templates;
  const [lines, setLines] = useState<LogLine[]>([]);
  const idRef = useRef(0);
  const indexRef = useRef(0);
  const timeRef = useRef(0);

  useEffect(() => {
    // Horodatage glissant, initialisé au montage (évite les écarts SSR/client)
    timeRef.current = Date.now();

    const makeLine = (): LogLine => {
      timeRef.current += 12000 + Math.floor(Math.random() * 80000); // +12 s à +92 s
      const text = templates[indexRef.current % templates.length];
      indexRef.current += 1;
      return {
        id: idRef.current++,
        time: new Date(timeRef.current).toTimeString().slice(0, 8),
        text,
      };
    };

    // En mouvement réduit : un instantané statique, sans intervalle
    if (reducedMotion) {
      setLines(Array.from({ length: LOGS_MAX }, makeLine));
      return;
    }

    setLines(Array.from({ length: 3 }, makeLine));
    const timer = setInterval(() => {
      setLines((previous) => [...previous, makeLine()].slice(-LOGS_MAX));
    }, LOG_INTERVAL);

    return () => clearInterval(timer);
  }, [reducedMotion, templates]);

  return (
    // Scène qui monte : le panneau entre depuis le bas
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className="mt-10 md:mt-12 rounded-lg border border-[var(--border)] border-l-2 border-l-[var(--accent)] bg-[var(--card-bg)]/80 backdrop-blur-sm font-mono text-[11px] md:text-xs overflow-hidden"
      aria-hidden="true" // flux décoratif : non lu par les lecteurs d'écran
    >
      {/* En-tête du panneau */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--border)]">
        <span className="uppercase tracking-widest text-[10px] text-[var(--text-muted)]">
          {t.audit.header}
        </span>
        <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-[var(--accent)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
          </span>
          {t.audit.live}
        </span>
      </div>

      {/* Corps : fil continu — le nouveau log pousse toutes les lignes vers le
          haut (glissement animé), la plus ancienne sort par le dessus en fondu */}
      <div className="h-24 md:h-32 px-3 py-2 flex flex-col justify-end gap-1 overflow-hidden">
        <AnimatePresence initial={false} mode="popLayout">
          {lines.map((line) => (
            <motion.div
              key={line.id}
              layout
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="leading-5 whitespace-nowrap overflow-hidden text-ellipsis"
            >
              <span className="text-[var(--accent)] mr-2">{line.time}</span>
              <span className="text-[var(--text-muted)]">{line.text}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
