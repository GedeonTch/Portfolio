// Page /labs : galerie des environnements contrôlés (labs) documentés par captures
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BrandText from '@/components/BrandText';
import NetworkBackgroundClient from '@/components/NetworkBackgroundClient';
import { useLanguage } from '@/lib/language-context';
import { Lab } from '@/types';

export default function LabsPage() {
  const { t, data } = useLanguage();

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
            className="text-lg text-[var(--text-muted)] max-w-3xl mb-12 leading-relaxed"
          >
            {t.labsPage.intro}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {data.labs.map((lab, index) => (
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
        </div>
      </div>

      <Footer />
    </main>
  );
}

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
  // Si la capture n'est pas encore déposée dans /public/labs/, repli sur un
  // bloc placeholder plutôt qu'une image cassée
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
            <span className="font-mono text-xs uppercase tracking-widest">
              {capturePending}
            </span>
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
        {/* Tag du lab */}
        <div className="inline-block px-3 py-1 text-xs font-semibold rounded mb-3 bg-[var(--accent-soft)] text-[var(--accent)]">
          {lab.tag}
        </div>

        {/* Titre (SentinelX garde son X rouge de marque) */}
        <h2 className="text-xl md:text-2xl font-bold mb-3 text-[var(--accent)]">
          <BrandText text={lab.title} />
        </h2>

        <p className="text-[var(--text-muted)] mb-5 leading-relaxed">
          {lab.description}
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {/* Démo hébergée, si le lab en fournit une */}
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
        </div>
      </div>
    </motion.article>
  );
}
