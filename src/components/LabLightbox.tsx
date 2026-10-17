// Lightbox de la galerie d'un lab : overlay sombre, image centrée,
// navigation précédent/suivant (boutons + flèches clavier), fermeture par
// bouton, clic sur le fond ou touche Échap. Le scroll de la page est bloqué
// pendant l'ouverture ; le focus est posé sur la modale pour que les
// raccourcis clavier fonctionnent immédiatement.
'use client';

import { useEffect, useRef } from 'react';
import { LabImage } from '@/types';

interface LabLightboxProps {
  images: LabImage[];
  indexActif: number;
  onFermer: () => void;
  onNaviguer: (direction: 1 | -1) => void;
  libelles: { fermer: string; precedent: string; suivant: string };
}

export default function LabLightbox({
  images,
  indexActif,
  onFermer,
  onNaviguer,
  libelles,
}: LabLightboxProps) {
  const refDialog = useRef<HTMLDivElement>(null);
  const image = images[indexActif];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onFermer();
      if (e.key === 'ArrowLeft') onNaviguer(-1);
      if (e.key === 'ArrowRight') onNaviguer(1);
    };
    window.addEventListener('keydown', onKey);
    const overflowAvant = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    refDialog.current?.focus();

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflowAvant;
    };
  }, [onFermer, onNaviguer]);

  if (!image) return null;

  return (
    <div
      ref={refDialog}
      role="dialog"
      aria-modal="true"
      aria-label={image.legende}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center outline-none"
    >
      {/* Fond sombre : clic = fermer */}
      <button
        type="button"
        aria-label={libelles.fermer}
        onClick={onFermer}
        className="absolute inset-0 bg-black/90 cursor-zoom-out"
      />

      {/* Fermer */}
      <button
        type="button"
        onClick={onFermer}
        aria-label={libelles.fermer}
        className="absolute top-4 right-4 z-10 rounded-full border border-white/20 bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>

      {/* Précédent / Suivant */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => onNaviguer(-1)}
            aria-label={libelles.precedent}
            className="absolute left-3 md:left-6 z-10 rounded-full border border-white/20 bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => onNaviguer(1)}
            aria-label={libelles.suivant}
            className="absolute right-3 md:right-6 z-10 rounded-full border border-white/20 bg-white/10 p-3 text-white transition-colors hover:bg-white/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Image + légende (pointer-events-none : le clic autour ferme via le fond) */}
      <figure className="relative z-[1] w-[calc(100%-2rem)] max-w-6xl pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element -- contenu dynamique dimensionné par le navigateur ; next/image imposerait un ratio fixe */}
        <img
          src={image.src}
          alt={image.legende}
          className="mx-auto max-h-[78vh] w-auto max-w-full object-contain rounded border border-white/15 bg-black"
        />
        <figcaption className="mt-3 text-center font-mono text-xs text-[var(--text-muted)]">
          {indexActif + 1} / {images.length} — {image.legende}
        </figcaption>
      </figure>
    </div>
  );
}
