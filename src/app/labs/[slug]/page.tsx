// Page détail d'un lab (/labs/[slug]) : scénario, boutons rapport,
// galerie ordonnée avec lightbox, lien dépôt, retour aux Labs.
//
// Les données viennent de data.labs (content.ts / translations.ts) : tout lab
// doté d'un `detail` a sa page ; sans `detail` (ou slug inconnu), on affiche
// l'écran « Lab introuvable » plutôt qu'un 404 brut.
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BrandText from '@/components/BrandText';
import NetworkBackgroundClient from '@/components/NetworkBackgroundClient';
import LabBadgeStatut from '@/components/LabBadgeStatut';
import LabLightbox from '@/components/LabLightbox';
import { useLanguage } from '@/lib/language-context';

export default function PageDetailLab() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const { t, data } = useLanguage();
  const [indexLightbox, setIndexLightbox] = useState<number | null>(null);

  const lab = data.labs.find((l) => l.slug === slug);
  const detail = lab?.detail;

  // Slug inconnu, ou lab sans contenu détaillé : message dédié + retour
  if (!lab || !detail) {
    return (
      <main className="min-h-screen flex flex-col">
        <NetworkBackgroundClient />
        <Navigation />
        <div className="flex-1 pt-32 pb-20 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <p
              className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--accent)]/70 mb-6"
              aria-hidden
            >
              ~/laboratoires/{slug || '…'}
            </p>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--accent)]">
              {t.labsPage.introuvableTitre}
            </h1>
            <p className="text-[var(--text-muted)] mb-8 leading-relaxed">
              {t.labsPage.introuvableDetail}
            </p>
            <Link
              href="/labs"
              className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:underline"
            >
              {t.labsPage.retourLabs}
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  // Limite de 6 captures clés pour garder la fiche synthétique (~30 s de lecture)
  const images = (detail.images ?? []).slice(0, 6);
  const urlRapportGithub = detail.rapportUrl || lab.repoUrl;
  const brancheFil =
    lab.team === 'red' ? 'red-team' : lab.team === 'blue' ? 'blue-team' : 'outils';
  const lienRetour = lab.team ? `/labs?chambre=${lab.team}` : '/labs';
  const libelleRetour =
    lab.team === 'red'
      ? t.labsPage.retourChambreRed
      : lab.team === 'blue'
        ? t.labsPage.retourChambreBlue
        : t.labsPage.retourLabs;

  return (
    <main className="min-h-screen flex flex-col">
      <NetworkBackgroundClient />
      <Navigation />

      <div className="flex-1 pt-24 pb-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="zone-labs max-w-4xl mx-auto rounded-xl border border-[var(--border)] p-5 md:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <Link
              href={lienRetour}
              className="inline-flex items-center gap-2 text-sm text-[var(--accent)] font-semibold hover:underline"
            >
              {libelleRetour}
            </Link>
            {lab.team && (
              <Link
                href="/labs"
                className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                {t.labsPage.quitterChambre}
              </Link>
            )}
          </div>

          {/* Fil d'Ariane technique */}
          <div
            data-team={lab.team}
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--accent)]/70 mb-4"
            aria-hidden
          >
            ~/laboratoires/{brancheFil}/{lab.slug}
          </div>

          {/* En-tête : titre, statut, tag, tags */}
          <div data-team={lab.team}>
            <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
              <h1 className="text-2xl md:text-3xl font-bold text-[var(--accent)]">
                <BrandText text={lab.title} />
              </h1>
              <LabBadgeStatut statut={lab.statut} t={t} />
            </div>
            <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--team)] mb-4">
              {'// '}
              {lab.tag}
            </div>
            {lab.tags && lab.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
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
          </div>

          {/* Scénario */}
          <section className="mb-9">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent)]/80 mb-4">
              {t.labsPage.scenarioTitre}
            </h2>
            <div className="space-y-4 text-[var(--foreground)]/90 leading-relaxed">
              {detail.scenario.map((paragraphe, index) => (
                <p key={index}>{paragraphe}</p>
              ))}
            </div>
          </section>

          {/* Rapport complet & dépôt GitHub */}
          <section className="mb-9">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent)]/80 mb-4">
              {t.labsPage.rapportTitre}
            </h2>
            {urlRapportGithub ? (
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={urlRapportGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg font-semibold bg-[var(--accent)] text-black transition-opacity hover:opacity-85"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>{t.labsPage.voirRapport}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                {detail.rapportUrl && lab.repoUrl && detail.rapportUrl !== lab.repoUrl && (
                  <a
                    href={lab.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:underline"
                  >
                    <span>{t.labsPage.viewRepo}</span>
                  </a>
                )}
              </div>
            ) : (
              <p className="font-mono text-xs text-[var(--text-muted)] border border-dashed border-[var(--border)] rounded-lg p-3.5">
                {'// '}
                {t.labsPage.rapportEnPreparation}
              </p>
            )}
          </section>

          {/* Galerie des 4 à 6 captures clés du scénario (ordre du tableau detail.images) */}
          <section id="captures">
            <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent)]/80 mb-1.5">
              {t.labsPage.galerieTitre}
            </h2>
            <p className="text-xs text-[var(--text-muted)] mb-4">
              {t.labsPage.galerieSousTitre}
            </p>
            {images.length === 0 ? (
              <div
                className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-[var(--border)] py-12 text-[var(--text-muted)]"
                role="img"
                aria-label={t.labsPage.capturePending}
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
                <span className="font-mono text-xs uppercase tracking-widest">
                  {t.labsPage.capturePending}
                </span>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {images.map((img, index) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setIndexLightbox(index)}
                    aria-label={`${img.legende}`}
                    className="group relative aspect-video overflow-hidden rounded border border-[var(--border)] bg-[var(--background)] cursor-zoom-in"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element -- miniatures dynamiques ; fallback non nécessaire (chemins déclarés dans le contenu) */}
                    <img
                      src={img.src}
                      alt={img.legende}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-black/70 font-mono text-[10px] px-2 py-1 text-left text-[var(--foreground)] truncate">
                      {String(index + 1).padStart(2, '0')} — {img.legende}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </section>

          <div className="mt-10 pt-6 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3">
            <Link
              href={lienRetour}
              className="inline-flex items-center gap-2 text-sm text-[var(--accent)] font-semibold hover:underline"
            >
              {libelleRetour}
            </Link>
            {lab.team && (
              <Link
                href="/labs"
                className="font-mono text-xs text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
              >
                {t.labsPage.quitterChambre}
              </Link>
            )}
          </div>
        </motion.div>
      </div>

      <Footer />

      {/* Lightbox galerie */}
      {indexLightbox !== null && images[indexLightbox] && (
        <LabLightbox
          images={images}
          indexActif={indexLightbox}
          onFermer={() => setIndexLightbox(null)}
          onNaviguer={(direction) =>
            setIndexLightbox((courant) =>
              courant === null ? courant : (courant + direction + images.length) % images.length
            )
          }
          libelles={{
            fermer: t.labsPage.lightboxFermer,
            precedent: t.labsPage.lightboxPrecedent,
            suivant: t.labsPage.lightboxSuivant,
          }}
        />
      )}
    </main>
  );
}
