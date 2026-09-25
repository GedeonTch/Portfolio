'use client';

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
  const [photoSrc, setPhotoSrc] = useState(content.hero.photoPath);
  const [, setReducedMotion] = useState(false);
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

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-5 pb-20 pt-36">
    <div className="pointer-events-none absolute inset-0 z-0 opacity-70">
      {/* Client-only 3D scene: fallback to SVG when not supported */}
      <div className="absolute inset-0 hidden md:block">
        {/* NetworkScene is dynamically imported in a client environment elsewhere; keep SVG as low-end fallback for server */}
        <NetworkGraphic accent={accent} />
      </div>
      <div className="absolute inset-0 md:hidden">
        <NetworkGraphic accent={accent} />
      </div>
    </div>
    <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
      <div>
      <div className="mb-8 flex items-center gap-5">
        <div className="profile-frame h-44 w-44 shrink-0 overflow-hidden rounded-full border-2 bg-[var(--card-bg)] sm:h-56 sm:w-56">
          <img
            src={photoSrc}
            alt="Portrait de Gédéon Cibanvunya"
            className="h-full w-full object-cover"
            onError={() => setPhotoSrc('/photo-placeholder.svg')}
          />
        </div>
      </div>
        <div className="font-mono text-[10px] uppercase tracking-[.18em] text-[var(--text-muted)]">
          <span className="mb-1 block text-[var(--accent)]">Identité vérifiée</span>
          Profil cybersécurité
        </div>
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
        <div className="surface absolute bottom-3 left-0 w-full max-w-sm p-4 font-mono text-[10px] leading-6 text-[var(--text-muted)] sm:left-8">
          <div className="mb-2 flex items-center justify-between border-b border-[var(--border)] pb-2 text-[var(--accent)]"><span>LIVE / AUDIT STREAM</span><span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" /></div>
          <div className="audit-stream">
            <div className="audit-track">
              {[...logs, ...logs].map((log, index) => <div key={`${log}-${index}`} className="whitespace-nowrap">{log}</div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

function NetworkGraphic({ accent }: { accent: string }) {
  return <svg aria-label="Réseau de nœuds de sécurité" role="img" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
    <path d="M510 250 600 195 690 250 690 355 600 410 510 355Z" fill="var(--card-bg)" stroke={accent} strokeWidth="2" opacity=".8" />
    <path d="M600 215v175M535 275h130M535 325h130" className="network-line" />
    <g className="network-line"><path d="M80 110 290 60 510 170 740 75 1080 150M80 110l110 410 320-120 260 180 310-190M290 60l150 370 160-235 260 180 220-225M740 75l-140 120 170 255 310-300M190 520 60 650M510 460 430 650M770 640l170-110M1080 150l100 180" /></g>
    {[[80,110],[290,60],[510,170],[740,75],[1080,150],[190,520],[510,460],[770,640],[1080,490],[1180,330]].map(([cx,cy]) => <g key={`${cx}-${cy}`}><circle cx={cx} cy={cy} r="8" className="network-node" /><circle cx={cx} cy={cy} r="22" fill={accent} opacity=".08" /></g>)}
  </svg>;
}
