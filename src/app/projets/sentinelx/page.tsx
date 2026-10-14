// Page de détail du projet SentinelX (V1 NetLab) — contenu 100 % aligné sur le dépôt
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BrandText from '@/components/BrandText';
import NetworkBackgroundClient from '@/components/NetworkBackgroundClient';
import { useLanguage } from '@/lib/language-context';

// Dépôt source unique du projet (page spécifique à SentinelX)
const REPO_URL = 'https://github.com/GedeonTch/sentinelX';

// Apparition douce, identique aux autres sections du site
const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const },
};

export default function SentinelXPage() {
  const { t } = useLanguage();
  const p = t.sentinelxPage;

  return (
    <main className="min-h-screen flex flex-col">
      <NetworkBackgroundClient />
      <Navigation />

      <div className="flex-1 pt-28 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Retour vers la liste des projets */}
          <motion.a
            href="/#projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
          >
            {p.backToProjects}
          </motion.a>

          {/* En-tête du projet */}
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-4">
              {/* Emblème officiel SentinelX */}
              <Image
                src="/icons/sentinelx-shield.png"
                alt="Emblème SentinelX"
                width={64}
                height={64}
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
              />
              <div>
                <h1 className="section-title text-3xl md:text-4xl font-bold text-[var(--accent)]">
                  <BrandText text="SentinelX" />
                </h1>
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mt-1">
                  {p.headerTag}
                </p>
              </div>
            </div>

            {/* Accroche */}
            <p className="text-lg md:text-xl leading-relaxed text-[var(--foreground)] mb-6">
              {p.tagline}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {p.badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded font-mono text-xs border border-[var(--accent)] text-[var(--accent)]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.header>

          {/* Le problème résolu */}
          <motion.section {...fadeUp} className="mb-12">
            <h2 className="section-title text-2xl md:text-3xl font-bold mb-4 text-[var(--accent)]">
              {p.problemTitle}
            </h2>
            <p className="leading-relaxed text-[var(--text-muted)] card-hover-glow p-6 rounded-lg border border-[var(--accent)] bg-[var(--card-bg)]">
              {p.problemBody}
            </p>
          </motion.section>

          {/* Architecture modulaire */}
          <motion.section {...fadeUp} className="mb-12">
            <h2 className="section-title text-2xl md:text-3xl font-bold mb-4 text-[var(--accent)]">
              {p.archiTitle}
            </h2>
            <p className="leading-relaxed text-[var(--text-muted)] mb-6">
              {p.archiNote}
            </p>

            {/* Schéma du pipeline (LEARN est planifié en V2 : pointillés) */}
            <div
              className="flex flex-wrap items-center gap-2 mb-8 p-4 rounded-lg border border-[var(--border)] bg-[var(--card-bg)]/60 font-mono text-xs md:text-sm"
              aria-label={p.pipeline.join(' → ')}
            >
              {p.pipeline.map((step, index) => {
                const isFuture = step.includes('(V2)');
                return (
                  <span key={step} className="flex items-center gap-2">
                    {index > 0 && (
                      <span className="text-[var(--text-muted)]" aria-hidden="true">
                        →
                      </span>
                    )}
                    <span
                      className={`px-2 py-1 rounded border ${
                        isFuture
                          ? 'border-dashed border-[var(--text-muted)] text-[var(--text-muted)]'
                          : 'border-[var(--accent)] text-[var(--accent)]'
                      }`}
                    >
                      {step}
                    </span>
                  </span>
                );
              })}
            </div>

            {/* Modules réellement implémentés */}
            <h3 className="text-lg font-semibold mb-4 text-[var(--foreground)]">
              {p.modulesTitle}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {p.modules.map((mod) => (
                <div
                  key={mod.title}
                  className="card-hover-glow p-5 rounded-lg border border-[var(--accent)] bg-[var(--card-bg)]"
                >
                  <h4 className="font-semibold text-[var(--accent)] mb-2">
                    {mod.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                    {mod.role}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Stack réelle */}
          <motion.section {...fadeUp} className="mb-12">
            <h2 className="section-title text-2xl md:text-3xl font-bold mb-4 text-[var(--accent)]">
              {p.stackTitle}
            </h2>
            <div className="flex flex-wrap gap-2">
              {p.stackItems.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded border border-[var(--accent)] bg-[var(--card-bg)] text-sm text-[var(--foreground)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.section>

          {/* État d'avancement — honnête et sourcé */}
          <motion.section {...fadeUp} className="mb-12">
            <h2 className="section-title text-2xl md:text-3xl font-bold mb-4 text-[var(--accent)]">
              {p.statusTitle}
            </h2>

            <div className="space-y-4 mb-8">
              <div className="card-hover-glow p-6 rounded-lg border border-[var(--accent)] bg-[var(--card-bg)]">
                <h3 className="font-semibold text-[var(--accent)] mb-2">
                  {p.statusNetlab.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {p.statusNetlab.body}
                </p>
              </div>

              <div className="card-hover-glow p-6 rounded-lg border border-dashed border-[var(--text-muted)] bg-[var(--card-bg)]">
                <h3 className="font-semibold text-[var(--foreground)] mb-2">
                  {p.statusBranch.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                  {p.statusBranch.body}
                </p>
              </div>
            </div>

            {/* Feuille de route : Insight et Nexus, planifiés uniquement */}
            <h3 className="text-lg font-semibold mb-4 text-[var(--foreground)]">
              {p.roadmapTitle}
            </h3>
            <ul className="space-y-3">
              {p.roadmap.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-wrap items-baseline gap-x-3 gap-y-1 p-4 rounded-lg border border-[var(--border)] bg-[var(--card-bg)]/60"
                >
                  <span className="font-semibold text-[var(--foreground)]">
                    {item.name}
                  </span>
                  <span className="px-2 py-0.5 rounded font-mono text-[10px] uppercase tracking-wider bg-[var(--accent-soft)] text-[var(--accent)]">
                    {item.badge}
                  </span>
                  <span className="w-full text-sm text-[var(--text-muted)]">
                    {item.line}
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>

          {/* Preuves + cadre d'usage */}
          <motion.section {...fadeUp}>
            <h2 className="section-title text-2xl md:text-3xl font-bold mb-4 text-[var(--accent)]">
              {p.proofTitle}
            </h2>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover-glow inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold border border-[var(--accent)] bg-[var(--card-bg)] text-[var(--accent)] transition-colors hover:bg-[var(--accent)] hover:text-black mb-6"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {p.proofGithub}
            </a>

            <p className="text-sm leading-relaxed text-[var(--text-muted)] p-4 rounded-lg border border-[var(--border)] bg-[var(--card-bg)]/60">
              {p.legalNote}
            </p>
          </motion.section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
