// Page /projets : catalogue complet de tous les projets (au-delà du Top 4 affiché sur l'accueil)
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NetworkBackgroundClient from '@/components/NetworkBackgroundClient';
import { ProjectCard } from '@/components/Projects';
import { useLanguage } from '@/lib/language-context';

export default function AllProjectsPage() {
  const { t, data } = useLanguage();

  return (
    <main className="min-h-screen flex flex-col">
      <NetworkBackgroundClient />
      <Navigation />

      <div className="flex-1 pt-28 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm text-[var(--accent)] font-semibold hover:underline"
            >
              {t.projects.backToHome}
            </Link>
            <Link
              href="/labs"
              className="inline-flex items-center gap-2 font-mono text-xs text-[var(--accent)] hover:underline"
            >
              <span>{t.hero.exploreLabs}</span>
              <span aria-hidden>→</span>
            </Link>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-title text-3xl md:text-4xl font-bold mb-4 text-[var(--accent)]"
          >
            {t.projects.allProjectsTitle}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-[var(--text-muted)] max-w-3xl mb-12 leading-relaxed"
          >
            {t.projects.allProjectsIntro}
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6">
            {data.projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                index={index}
                featuredLabel={t.projects.featured}
                linkLabel={
                  project.link.startsWith('/')
                    ? t.projects.discoverProject
                    : project.link.includes('github.com')
                      ? t.projects.viewOnGithub
                      : t.projects.visitSite
                }
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
