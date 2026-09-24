'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { content } from '@/data/content';
import { useTheme } from '@/lib/theme-context';

const logs = [
  '08:14:39  SCAN    Analyse du périmètre externe lancée',
  '08:15:11  ALERTE  3 tentatives suspectes — IP bloquée',
  '08:15:12  ACTION  Compte verrouillé, client notifié en 41 s',
  '08:17:48  INFO    Correctif critique déployé sur 12 serveurs',
  '08:21:05  SCAN    0 vulnérabilité critique détectée ce matin',
];

export default function Hero() {
  const { theme } = useTheme();
  const [displayText, setDisplayText] = useState('');
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(reduce);
    if (reduce) { setDisplayText(content.hero.name); return; }
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setDisplayText(content.hero.name.slice(0, index));
      if (index >= content.hero.name.length) window.clearInterval(timer);
    }, 75);
    return () => window.clearInterval(timer);
  }, []);
  const accent = theme === 'terminal' ? 'var(--accent)' : 'var(--accent)';

  return <section id="hero" className="relative min-h-screen overflow-hidden px-5 pb-20 pt-36">
    <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
      <div className="relative z-10">
        <p className="section-kicker mb-5">Security operations / Bujumbura, Burundi</p>
        <h1 className="max-w-4xl font-mono text-4xl font-medium leading-tight tracking-[-.04em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
          {displayText}<span className="cursor-blink text-[var(--accent)]">_</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">{content.hero.title}</p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--foreground)]">{content.hero.tagline}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a href="#projects" className="rounded border border-[var(--accent)] bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#071018] transition hover:brightness-110">Voir les projets</a>
          <a href={content.contact.cvPath} className="rounded border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]">Télécharger le CV</a>
        </div>
        <div className="mt-12 flex gap-8 border-t border-[var(--border)] pt-5 font-mono text-[11px] text-[var(--text-muted)]">
          <span><strong className="text-[var(--accent)]">01</strong> SOC &amp; détection</span><span><strong className="text-[var(--accent)]">02</strong> Pentest contrôlé</span>
        </div>
      </div>
      <div className="relative min-h-[390px]">
        <NetworkGraphic accent={accent} />
        <div className="surface absolute bottom-3 left-0 w-full max-w-sm p-4 font-mono text-[10px] leading-6 text-[var(--text-muted)] sm:left-8">
          <div className="mb-2 flex items-center justify-between border-b border-[var(--border)] pb-2 text-[var(--accent)]"><span>LIVE / AUDIT STREAM</span><span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" /></div>
          {logs.slice(0, reducedMotion ? 3 : 5).map((log) => <div key={log}>{log}</div>)}
        </div>
      </div>
    </div>
  </section>;
}

function NetworkGraphic({ accent }: { accent: string }) {
  return <svg aria-label="Réseau de nœuds de sécurité" role="img" viewBox="0 0 520 400" className="h-full w-full">
    <g className="network-line"><path d="M90 95 220 52 350 112 455 70M90 95l25 180 180-56 105 86M220 52l75 167 160-149M350 112l-55 107 115 84M115 275l-70 58M295 219l-40 130M410 305l65 43" /></g>
    {[[90,95],[220,52],[350,112],[455,70],[115,275],[295,219],[410,305],[255,349],[45,333]].map(([cx,cy]) => <g key={`${cx}-${cy}`}><circle cx={cx} cy={cy} r="6" className="network-node" /><circle cx={cx} cy={cy} r="13" fill={accent} opacity=".08" /></g>)}
    <path d="M180 168 238 135 296 168 296 235 238 269 180 235Z" fill="none" stroke={accent} strokeWidth="1.5" opacity=".8" /><path d="M238 153v97M197 187h82M197 217h82" className="network-line" />
  </svg>;
}
