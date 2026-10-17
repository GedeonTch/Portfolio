// Page /labs : architecture imbriquée en deux « chambres » (Red Team / Blue Team)
// + section « Outils & projets documentés ».
//
// Imbrication à 3 niveaux :
//   1. Hall des laboratoires (/labs) → les 2 portes de chambres (Red Team / Blue Team)
//   2. Intérieur d'une chambre (/labs?chambre=red | /labs?chambre=blue) → cartes des labs stockés
//   3. Fiche complète d'un lab (/labs/[slug]) → scénario, rapport, galerie + lightbox
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
  // Un lab peut être à la fois dans une chambre ET dans « Outils & projets » (ex. MAYUNDO)
  const labsOutils = data.labs.filter((lab) => !lab.team || lab.alsoInTools);

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

      <div className="flex-1 pt-28 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title text-3xl md:text-4xl font-bold mb-4 text-[var(--accent)]"
          >
            {t.labsPage.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-[var(--text-muted)] max-w-3xl mb-10 leading-relaxed"
          >
            {t.labsPage.intro}
          </motion.p>

          {/* Zone laboratoires : hall des 2 chambres OU intérieur de la chambre sélectionnée */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            data-team={chambreActive ?? undefined}
            className="zone-labs rounded-xl border border-[var(--border)] p-5 md:p-8 mb-14 transition-colors"
          >
            {/* Barre supérieure terminal : fil d'Ariane + navigation entre chambres */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-[var(--border)]">
              <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
                {filAriane}
              </div>

              {chambreActive ? (
                <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
                  <button
                    type="button"
                    onClick={() => changerChambre(null)}
                    className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {t.labsPage.quitterChambre}
                  </button>
                  <button
                    type="button"
                    onClick={() => changerChambre(chambreActive === 'red' ? 'blue' : 'red')}
                    className="text-[var(--accent)] hover:underline"
                  >
                    {chambreActive === 'red' ? t.labsPage.basculerBlue : t.labsPage.basculerRed}
                  </button>
                </div>
              ) : (
                <span className="font-mono text-xs text-[var(--text-muted)]">
                  {t.labsPage.chambrePrompt}
                </span>
              )}
            </div>

            <AnimatePresence mode="wait">
              {chambreActive === null ? (
                /* ── NIVEAU 1 : Les deux portes de Chambres (Red Team & Blue Team) ── */
                <motion.div
                  key="hall-chambres"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="grid lg:grid-cols-2 gap-6 md:gap-8"
                >
                  <PorteChambre
                    equipe="red"
                    icone="🔴"
                    titre={t.labsPage.redTeamTitle}
                    sousTitre={t.labsPage.redTeamSubtitle}
                    description={t.labsPage.redTeamDesc}
                    labs={labsRed}
                    t={t}
                    onEntrer={() => changerChambre('red')}
                  />
                  <PorteChambre
                    equipe="blue"
                    icone="🔵"
                    titre={t.labsPage.blueTeamTitle}
                    sousTitre={t.labsPage.blueTeamSubtitle}
                    description={t.labsPage.blueTeamDesc}
                    labs={labsBlue}
                    noteProchains={t.labsPage.prochainsLabsNote}
                    t={t}
                    onEntrer={() => changerChambre('blue')}
                  />
                </motion.div>
              ) : (
                /* ── NIVEAU 2 : Intérieur de la Chambre ouverte (liste des cartes de labs) ── */
                <motion.div
                  key={`chambre-${chambreActive}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <InterieurChambre
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
                    labs={chambreActive === 'red' ? labsRed : labsBlue}
                    noteProchains={
                      chambreActive === 'blue' ? t.labsPage.prochainsLabsNote : undefined
                    }
                    t={t}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.section>

          {/* Outils & projets documentés (avec MAYUNDO également présent ici) */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-[var(--accent)]">
              {t.labsPage.outilsTitle}
            </h2>
            <p className="text-[var(--text-muted)] mb-8 max-w-3xl leading-relaxed">
              {t.labsPage.outilsIntro}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {labsOutils.map((lab, index) => (
                <LabCard
                  key={lab.slug}
                  lab={lab}
                  index={index}
                  capturePending={t.labsPage.capturePending}
                  viewRepo={t.labsPage.viewRepo}
                  viewDemo={t.labsPage.viewDemo}
                />
              ))}
            </div>
          </motion.section>
        </div>
      </div>

      <Footer />
    </main>
  );
}

/** Porte d'accès à une chambre (Red Team ou Blue Team) dans le hall principal */
function PorteChambre({
  equipe,
  icone,
  titre,
  sousTitre,
  description,
  labs,
  noteProchains,
  t,
  onEntrer,
}: {
  equipe: LabEquipe;
  icone: string;
  titre: string;
  sousTitre: string;
  description: string;
  labs: Lab[];
  noteProchains?: string;
  t: UiTexts;
  onEntrer: () => void;
}) {
  return (
    <div
      data-team={equipe}
      onClick={onEntrer}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onEntrer();
        }
      }}
      className="group cursor-pointer rounded-xl border border-[var(--border)] hover:border-[var(--team)] bg-[var(--card-bg)]/60 p-6 transition-all flex flex-col justify-between"
    >
      <div>
        {/* En-tête de la porte */}
        <div className="flex items-center justify-between gap-3 mb-2">
          <div className="flex items-center gap-2.5">
            <span aria-hidden className="text-base">
              {icone}
            </span>
            <h2 className="text-xl font-bold text-[var(--team)]">{titre}</h2>
          </div>
          <span className="font-mono text-xs px-2.5 py-0.5 rounded border border-[var(--border)] bg-[var(--team-soft)] text-[var(--team)]">
            {labs.length} {labs.length > 1 ? 'labs' : 'lab'}
          </span>
        </div>

        <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--text-muted)] mb-4">
          {sousTitre}
        </p>

        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">{description}</p>

        {/* Aperçu façon répertoire terminal des labs stockés dans la chambre */}
        <div className="rounded-lg border border-[var(--border)] bg-[var(--background)]/70 p-3.5 mb-5 font-mono text-xs space-y-2">
          {labs.length > 0 ? (
            labs.map((lab) => (
              <div key={lab.slug} className="flex items-center justify-between gap-2">
                <span className="truncate text-[var(--foreground)]">
                  <span className="text-[var(--team)] mr-2">▸</span>
                  <BrandText text={lab.title} />
                </span>
                <LabBadgeStatut statut={lab.statut} t={t} />
              </div>
            ))
          ) : (
            <div className="text-[var(--text-muted)]">
              {'// '}
              {t.labsPage.brancheVide}
            </div>
          )}
          {noteProchains && (
            <div className="pt-2 border-t border-dashed border-[var(--border)] text-[11px] text-[var(--text-muted)]">
              {'// '}
              {noteProchains}
            </div>
          )}
        </div>
      </div>

      {/* Bouton d'entrée dans la chambre */}
      <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider font-semibold text-[var(--team)] group-hover:translate-x-1 transition-transform">
        <span>{t.labsPage.entrerChambre}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
        </svg>
      </div>
    </div>
  );
}

/** Vue intérieure d'une chambre ouverte : affiche toutes les cartes des labs stockés */
function InterieurChambre({
  equipe,
  icone,
  titre,
  sousTitre,
  labs,
  noteProchains,
  t,
}: {
  equipe: LabEquipe;
  icone: string;
  titre: string;
  sousTitre: string;
  labs: Lab[];
  noteProchains?: string;
  t: UiTexts;
}) {
  return (
    <div data-team={equipe}>
      <div className="flex items-center gap-2.5 mb-1">
        <span aria-hidden className="text-lg">
          {icone}
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-[var(--team)]">{titre}</h2>
      </div>
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)] mb-6">
        {sousTitre}
      </p>

      {labs.length === 0 ? (
        <p className="font-mono text-xs text-[var(--text-muted)] border border-dashed border-[var(--border)] rounded-lg p-6">
          {'// '}
          {t.labsPage.brancheVide}
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {labs.map((lab, index) => (
            <CarteBranche key={lab.slug} lab={lab} index={index} t={t} />
          ))}
        </div>
      )}

      {noteProchains && (
        <p className="mt-6 font-mono text-xs text-[var(--text-muted)] border border-dashed border-[var(--border)] rounded-lg p-4">
          {'// '}
          {noteProchains}
        </p>
      )}
    </div>
  );
}

/** Carte d'un lab à l'intérieur d'une chambre : entièrement cliquable vers /labs/[slug] */
function CarteBranche({ lab, index, t }: { lab: Lab; index: number; t: UiTexts }) {
  const urlDetail = lab.detail ? `/labs/${lab.slug}` : null;

  const contenu = (
    <>
      <div>
        <div className="flex items-start justify-between gap-3 mb-1.5">
          <h3 className="font-bold text-base md:text-lg leading-snug group-hover:text-[var(--team)] transition-colors">
            <BrandText text={lab.title} />
          </h3>
          <LabBadgeStatut statut={lab.statut} t={t} />
        </div>

        <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--team)] mb-3">
          {'// '}
          {lab.tag}
        </div>

        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{lab.description}</p>
      </div>

      <div>
        {lab.tags && lab.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {lab.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] px-2 py-0.5 rounded border border-[var(--border)] text-[var(--text-muted)] bg-[var(--team-soft)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {urlDetail && (
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] group-hover:underline">
            {t.labsPage.voirDetail}
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        )}
      </div>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      {urlDetail ? (
        <Link
          href={urlDetail}
          className="group flex flex-col justify-between h-full rounded-lg border border-[var(--border)] hover:border-[var(--team)] bg-[var(--card-bg)] p-5 transition-colors"
        >
          {contenu}
        </Link>
      ) : (
        <div className="flex flex-col justify-between h-full rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-5">
          {contenu}
        </div>
      )}
    </motion.article>
  );
}

/** Carte galerie d'origine (groupe « Outils & projets ») */
function LabCard({
  lab,
  index,
  capturePending,
  viewRepo,
  viewDemo,
}: {
  lab: Lab;
  index: number;
  capturePending: string;
  viewRepo: string;
  viewDemo: string;
}) {
  const [imageBroken, setImageBroken] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="card-hover-glow group rounded-lg border border-[var(--accent)] bg-[var(--card-bg)] overflow-hidden"
    >
      {/* Zone capture 16/9 */}
      <div className="relative aspect-video border-b border-[var(--border)] bg-[var(--background)]">
        {imageBroken ? (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[var(--text-muted)]"
            role="img"
            aria-label={`${lab.title} — ${capturePending}`}
          >
            <svg
              className="w-10 h-10 opacity-60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="font-mono text-xs uppercase tracking-widest">{capturePending}</span>
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element -- fallback onError non géré par next/image
          <img
            src={lab.image}
            alt={`${lab.title} — capture de laboratoire`}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImageBroken(true)}
          />
        )}
      </div>

      <div className="p-6">
        <div className="inline-block px-3 py-1 text-xs font-semibold rounded mb-3 bg-[var(--accent-soft)] text-[var(--accent)]">
          {lab.tag}
        </div>

        <h2 className="text-xl md:text-2xl font-bold mb-3 text-[var(--accent)]">
          <BrandText text={lab.title} />
        </h2>

        <p className="text-[var(--text-muted)] mb-5 leading-relaxed">{lab.description}</p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {lab.demoUrl && (
            <a
              href={lab.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded font-semibold bg-[var(--accent)] text-black transition-opacity hover:opacity-85"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>{viewDemo}</span>
            </a>
          )}

          {lab.repoUrl && (
            <a
              href={lab.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:underline"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>{viewRepo}</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
