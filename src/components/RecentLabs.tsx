// Section d'accueil « Laboratoires récents » : expose les 2 labs les plus récents
// (le dernier Red Team et le dernier Blue Team) + un lien direct vers les
// chambres Red Team & Blue Team (/labs).
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import BrandText from '@/components/BrandText';
import LabBadgeStatut from '@/components/LabBadgeStatut';
import { useLanguage } from '@/lib/language-context';
import { Lab } from '@/types';

export default function RecentLabs() {
  const { t, data } = useLanguage();

  // Sélection du lab le plus récent de chaque chambre (ou des 2 premiers labs)
  const latestRed = data.labs.find((l) => l.team === 'red');
  const latestBlue = data.labs.find((l) => l.team === 'blue');
  const recentLabs: Lab[] = [latestRed, latestBlue].filter((l): l is Lab => Boolean(l));

  if (recentLabs.length === 0) return null;

  return (
    <section className="py-16 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* En-tête + bouton d'accès aux chambres */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-title text-3xl md:text-4xl font-bold mb-2 text-[var(--accent)]"
            >
              {t.labsPage.homeSectionTitle}
            </motion.h2>
            <p className="text-sm md:text-base text-[var(--text-muted)] max-w-2xl">
              {t.labsPage.homeSectionIntro}
            </p>
          </div>

          <Link
            href="/labs"
            className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg border border-[var(--accent)] bg-[var(--card-bg)] font-mono text-xs md:text-sm font-semibold text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black transition-all duration-200"
          >
            <span className="flex items-center gap-1" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-[#f87171]" />
              <span className="w-2 h-2 rounded-full bg-[#60a5fa]" />
            </span>
            <span>{t.labsPage.homeExploreRooms}</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </Link>
        </div>

        {/* Grille des 2 labs récents */}
        <div className="zone-labs rounded-xl border border-[var(--accent)]/40 bg-[var(--background)]/40 p-4 md:p-6">
          <div className="grid md:grid-cols-2 gap-5 items-stretch">
            {recentLabs.map((lab, index) => {
              const isRed = lab.team === 'red';
              const badgeBranche = isRed ? '🔴 Red Team' : '🔵 Blue Team';

              return (
                <motion.article
                  key={lab.slug}
                  data-team={lab.team}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/labs/${lab.slug}`}
                    className="group/card chambre-box flex flex-col justify-between h-full rounded-lg border border-[var(--team-border)] border-t-2 border-t-[var(--team)] bg-[var(--card-bg)]/75 hover:bg-[var(--card-bg)] p-4 md:p-5 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded border border-[var(--team-border)] bg-[var(--team-soft)] text-[var(--team)]">
                          {badgeBranche}
                        </span>
                        <LabBadgeStatut statut={lab.statut} t={t} />
                      </div>

                      <h3 className="text-lg md:text-xl font-bold mb-1.5 group-hover/card:text-[var(--team)] transition-colors">
                        <BrandText text={lab.title} />
                      </h3>

                      <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--team)] mb-2">
                        {'// '}
                        {lab.tag}
                      </div>

                      <p className="text-xs md:text-sm text-[var(--text-muted)] leading-snug mb-3.5 line-clamp-3">
                        {lab.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2.5 border-t border-[var(--team-border)]/50">
                      <div className="flex flex-wrap gap-1.5">
                        {lab.tags?.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-[var(--team-border)] text-[var(--foreground)]/90 bg-[var(--team-soft)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <span className="lab-cta-btn inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[var(--team)] bg-[var(--team-soft)] font-mono text-xs font-bold text-[var(--team)] group-hover/card:bg-[var(--team)] group-hover/card:text-black transition-all duration-200 shrink-0">
                        <span className="relative flex h-2 w-2" aria-hidden="true">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-75 animate-ping" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
                        </span>
                        <span>{t.labsPage.voirDetail}</span>
                        <svg
                          className="w-3.5 h-3.5 transition-transform duration-200 group-hover/card:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
