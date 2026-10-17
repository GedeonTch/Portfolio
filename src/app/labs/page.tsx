// Page /labs : deux chambres (« Red Team » et « Blue Team ») clairement séparées
// par des bordures et une ligne médiane visible, contenant chacune leurs cartes
// de labs compactes (calibrées pour afficher 3+ labs par colonne) cliquables
// vers /labs/[slug]. On peut aussi isoler une chambre en plein écran (?chambre=red|blue).
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BrandText from '@/components/BrandText';
import NetworkBackgroundClient from '@/components/NetworkBackgroundClient';
import LabBadgeStatut from '@/components/LabBadgeStatut';
import { useLanguage } from '@/lib/language-context';
import { UiTexts } from '@/data/translations';
import { Lab, LabEquipe } from '@/types';

export default function LabsPage() {
  const { t, data } = useLanguage();
  const [chambreActive, setChambreActive] = useState<LabEquipe | null>(null);

  // Lecture initiale du paramètre ?chambre=red|blue (retour depuis une fiche lab)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const c = params.get('chambre');
    if (c === 'red' || c === 'blue') {
      setChambreActive(c);
    }
  }, []);

  const changerChambre = (equipe: LabEquipe | null) => {
    setChambreActive(equipe);
    const url = equipe ? `/labs?chambre=${equipe}` : '/labs';
    window.history.replaceState(null, '', url);
  };

  const labsRed = data.labs.filter((lab) => lab.team === 'red');
  const labsBlue = data.labs.filter((lab) => lab.team === 'blue');

  const filAriane =
    chambreActive === 'red'
      ? `${t.labsPage.zoneLabel}/red-team`
      : chambreActive === 'blue'
        ? `${t.labsPage.zoneLabel}/blue-team`
        : t.labsPage.zoneLabel;

  return (
    <main className="min-h-screen flex flex-col">
      <NetworkBackgroundClient />
      <Navigation />

      <div className="flex-1 pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title text-3xl md:text-4xl font-bold mb-3 text-[var(--accent)]"
          >
            {t.labsPage.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-sm md:text-base text-[var(--text-muted)] max-w-3xl mb-7 leading-relaxed"
          >
            {t.labsPage.intro}
          </motion.p>

          {/* Zone laboratoires : cadre cyber visible + 2 chambres séparées par une ligne nette */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-team={chambreActive ?? undefined}
            className="zone-labs rounded-xl border border-[var(--accent)]/45 bg-[var(--background)]/40 p-4 md:p-6 transition-colors"
          >
            {/* Barre supérieure terminal : fil d'Ariane + sélecteur rapide de chambre */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 mb-5 border-b border-[var(--accent)]/35">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                {filAriane}
              </div>

              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                {chambreActive ? (
                  <>
                    <button
                      type="button"
                      onClick={() => changerChambre(null)}
                      className="px-2.5 py-1 rounded border border-[var(--accent)]/50 text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      {t.labsPage.quitterChambre}
                    </button>
                    <button
                      type="button"
                      onClick={() => changerChambre(chambreActive === 'red' ? 'blue' : 'red')}
                      className="px-2.5 py-1 rounded border border-[var(--accent)]/50 text-[var(--accent)] hover:bg-[var(--accent-soft)] transition-colors"
                    >
                      {chambreActive === 'red' ? t.labsPage.basculerBlue : t.labsPage.basculerRed}
                    </button>
                  </>
                ) : (
                  <span className="text-[11px] text-[var(--text-muted)]">
                    {t.labsPage.chambrePrompt}
                  </span>
                )}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {chambreActive === null ? (
                /* ── Vue des 2 Chambres côte à côte avec ligne de séparation bien visible ── */
                <motion.div
                  key="deux-chambres"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid lg:grid-cols-[1fr_auto_1fr] gap-5 lg:gap-6 items-stretch"
                >
                  <ChambreColonne
                    equipe="red"
                    icone="🔴"
                    titre={t.labsPage.redTeamTitle}
                    sousTitre={t.labsPage.redTeamSubtitle}
                    description={t.labsPage.redTeamDesc}
                    labs={labsRed}
                    repoBrancheUrl="https://github.com/GedeonTch/Red-Team-Labs"
                    repoBrancheLabel={t.labsPage.redTeamRepoLabel}
                    t={t}
                    isolee={false}
                    onBasculerIsolation={() => changerChambre('red')}
                  />

                  {/* Ligne de séparation visible entre Red Team et Blue Team */}
                  <div
                    aria-hidden="true"
                    className="hidden lg:flex flex-col items-center justify-center py-2"
                  >
                    <div className="w-[2px] flex-1 bg-gradient-to-b from-[#f87171]/70 via-[var(--accent)]/80 to-[#60a5fa]/70 rounded-full" />
                    <div className="my-2 w-2.5 h-2.5 rotate-45 border border-[var(--accent)] bg-[var(--card-bg)]" />
                    <div className="w-[2px] flex-1 bg-gradient-to-b from-[#60a5fa]/70 via-[var(--accent)]/80 to-[#f87171]/70 rounded-full" />
                  </div>
                  <div
                    aria-hidden="true"
                    className="lg:hidden h-[2px] w-full bg-gradient-to-r from-[#f87171]/70 via-[var(--accent)]/80 to-[#60a5fa]/70 rounded-full my-1"
                  />

                  <ChambreColonne
                    equipe="blue"
                    icone="🔵"
                    titre={t.labsPage.blueTeamTitle}
                    sousTitre={t.labsPage.blueTeamSubtitle}
                    description={t.labsPage.blueTeamDesc}
                    labs={labsBlue}
                    noteProchains={t.labsPage.prochainsLabsNote}
                    t={t}
                    isolee={false}
                    onBasculerIsolation={() => changerChambre('blue')}
                  />
                </motion.div>
              ) : (
                /* ── Vue d'une Chambre isolée en pleine largeur ── */
                <motion.div
                  key={`chambre-${chambreActive}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <ChambreColonne
                    equipe={chambreActive}
                    icone={chambreActive === 'red' ? '🔴' : '🔵'}
                    titre={
                      chambreActive === 'red'
                        ? t.labsPage.redTeamTitle
                        : t.labsPage.blueTeamTitle
                    }
                    sousTitre={
                      chambreActive === 'red'
                        ? t.labsPage.redTeamSubtitle
                        : t.labsPage.blueTeamSubtitle
                    }
                    description={
                      chambreActive === 'red'
                        ? t.labsPage.redTeamDesc
                        : t.labsPage.blueTeamDesc
                    }
                    labs={chambreActive === 'red' ? labsRed : labsBlue}
                    noteProchains={
                      chambreActive === 'blue' ? t.labsPage.prochainsLabsNote : undefined
                    }
                    repoBrancheUrl={
                      chambreActive === 'red'
                        ? 'https://github.com/GedeonTch/Red-Team-Labs'
                        : undefined
                    }
                    repoBrancheLabel={
                      chambreActive === 'red' ? t.labsPage.redTeamRepoLabel : undefined
                    }
                    t={t}
                    isolee={true}
                    onBasculerIsolation={() => changerChambre(null)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>
        </div>
      </div>

      <Footer />
    </main>
  );
}

/** Chambre Red Team ou Blue Team : conteneur encadré où sont stockés ses labs */
function ChambreColonne({
  equipe,
  icone,
  titre,
  sousTitre,
  description,
  labs,
  noteProchains,
  repoBrancheUrl,
  repoBrancheLabel,
  t,
  isolee,
  onBasculerIsolation,
}: {
  equipe: LabEquipe;
  icone: string;
  titre: string;
  sousTitre: string;
  description: string;
  labs: Lab[];
  noteProchains?: string;
  repoBrancheUrl?: string;
  repoBrancheLabel?: string;
  t: UiTexts;
  isolee: boolean;
  onBasculerIsolation: () => void;
}) {
  const libelleActionChambre = isolee
    ? t.labsPage.quitterChambre
    : equipe === 'red'
      ? t.labsPage.entrerRed
      : t.labsPage.entrerBlue;

  return (
    <div
      data-team={equipe}
      className="group/chambre chambre-box rounded-xl border border-[var(--team-border)] border-t-2 border-t-[var(--team)] bg-[var(--card-bg)]/65 hover:bg-[var(--card-bg)]/85 p-4 md:p-5 flex flex-col justify-between"
    >
      <div>
        {/* En-tête de la chambre */}
        <div className="pb-3 mb-3.5 border-b border-[var(--team-border)]">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
            <button
              type="button"
              onClick={onBasculerIsolation}
              className="flex items-center gap-2.5 text-left group/titre"
              title={libelleActionChambre}
            >
              {/* Voyant lumineux réactif au toucher/survol de la chambre */}
              <span className="relative flex h-3 w-3 items-center justify-center" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--team)] opacity-40 group-hover/chambre:opacity-80 group-hover/chambre:animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--team)] shadow-[0_0_8px_var(--team)]" />
              </span>
              <span aria-hidden className="text-base">
                {icone}
              </span>
              <h2 className="text-lg md:text-xl font-bold text-[var(--team)] group-hover/titre:underline">
                {titre}
              </h2>
              <span className="font-mono text-[11px] px-2 py-0.5 rounded border border-[var(--team-border)] bg-[var(--team-soft)] text-[var(--team)]">
                {labs.length} {labs.length > 1 ? 'labs' : 'lab'}
              </span>
            </button>

            <button
              type="button"
              onClick={onBasculerIsolation}
              className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md border border-[var(--team)] bg-[var(--team-soft)] text-[var(--team)] hover:bg-[var(--team)] hover:text-black transition-all duration-200"
            >
              {libelleActionChambre}
            </button>
          </div>

          <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)] mb-1.5">
            {sousTitre}
          </p>
          <p className="text-xs text-[var(--text-muted)] leading-snug">{description}</p>
        </div>

        {/* Liste des cartes de labs stockés dans la chambre (compactes : 3+ par colonne) */}
        {labs.length === 0 ? (
          <p className="font-mono text-xs text-[var(--text-muted)] border border-dashed border-[var(--team-border)] rounded-lg p-4">
            {'// '}
            {t.labsPage.brancheVide}
          </p>
        ) : (
          <div className={isolee ? 'grid md:grid-cols-2 gap-3.5' : 'space-y-3'}>
            {labs.map((lab, index) => (
              <CarteBranche key={lab.slug} lab={lab} index={index} t={t} />
            ))}
          </div>
        )}
      </div>

      {(noteProchains || (repoBrancheUrl && repoBrancheLabel)) && (
        <div className="mt-3.5 pt-3 border-t border-[var(--team-border)]/50 space-y-2.5">
          {noteProchains && (
            <p className="font-mono text-[11px] text-[var(--text-muted)] border border-dashed border-[var(--team-border)] rounded-lg px-3 py-2">
              {'// '}
              {noteProchains}
            </p>
          )}
          {repoBrancheUrl && repoBrancheLabel && (
            <a
              href={repoBrancheUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-3.5 py-2 rounded-lg border border-[var(--team)] bg-[var(--team-soft)] hover:bg-[var(--team)] text-[var(--team)] hover:text-black font-mono text-xs font-bold transition-all duration-200"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>{repoBrancheLabel}</span>
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

/** Carte compacte d'un lab dans sa chambre (calibrée pour tenir à 3+ par colonne) */
function CarteBranche({ lab, index, t }: { lab: Lab; index: number; t: UiTexts }) {
  const urlDetail = lab.detail ? `/labs/${lab.slug}` : null;

  const contenu = (
    <>
      <div>
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-sm md:text-base leading-snug group-hover/card:text-[var(--team)] transition-colors">
            <BrandText text={lab.title} />
          </h3>
          <LabBadgeStatut statut={lab.statut} t={t} />
        </div>

        <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--team)] mb-1.5">
          {'// '}
          {lab.tag}
        </div>

        <p className="text-xs md:text-[13px] text-[var(--text-muted)] leading-snug mb-2.5 line-clamp-3">
          {lab.description}
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[var(--team-border)]/50">
        {lab.tags && lab.tags.length > 0 ? (
          <div className="flex flex-wrap gap-1.5">
            {lab.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-[var(--team-border)] text-[var(--foreground)]/90 bg-[var(--team-soft)]"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <span />
        )}

        {urlDetail && (
          <span className="lab-cta-btn inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-[var(--team)] bg-[var(--team-soft)] font-mono text-xs font-bold text-[var(--team)] group-hover/chambre:shadow-[0_0_14px_var(--team-glow)] group-hover/card:bg-[var(--team)] group-hover/card:text-black transition-all duration-200 shrink-0">
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
        )}
      </div>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      {urlDetail ? (
        <Link
          href={urlDetail}
          className="group/card flex flex-col justify-between h-full rounded-lg border border-[var(--team-border)] border-l-2 border-l-[var(--team)] hover:border-[var(--team)] bg-[var(--background)]/80 hover:bg-[var(--background)] hover:-translate-y-0.5 hover:shadow-[0_0_20px_-4px_var(--team-glow)] p-3.5 transition-all duration-200"
        >
          {contenu}
        </Link>
      ) : (
        <div className="flex flex-col justify-between h-full rounded-lg border border-[var(--team-border)] bg-[var(--background)]/75 p-3.5">
          {contenu}
        </div>
      )}
    </motion.article>
  );
}
