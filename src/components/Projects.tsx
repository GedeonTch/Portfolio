// Section Projets avec cards : affiche le Top 4 sur l'accueil (SentinelX en tête,
// suivi de MAYUNDO, ETCH et PERMIS+) + bouton « Voir plus de projets » placé
// directement à côté de PERMIS+ dans la grille.
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import BrandText from '@/components/BrandText';
import { Project } from '@/types';

// Version animée du Link Next (pour les liens internes au site)
const MotionLink = motion(Link);

const TOP_PROJECTS_LIMIT = 4;

export default function Projects() {
  const { t, data } = useLanguage();
  const topProjects = data.projects.slice(0, TOP_PROJECTS_LIMIT);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title text-3xl md:text-4xl font-bold mb-10 text-[var(--accent)]"
        >
          {t.projects.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5 items-stretch">
          {topProjects.map((project, index) => (
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

          {/* Case « Voir plus de projets » logée à côté de PERMIS+ dans la 2e colonne */}
          <MotionLink
            href="/projets"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            whileHover={{ scale: 1.02 }}
            className="card-hover-glow group relative flex flex-col items-center justify-center text-center p-5 rounded-lg border border-dashed border-[var(--accent)] bg-[var(--card-bg)]/60 hover:bg-[var(--card-bg)] hover:border-solid transition-all duration-300 min-h-[180px]"
          >
            <div className="w-11 h-11 rounded-full border border-[var(--accent)] bg-[var(--accent-soft)] flex items-center justify-center mb-3 text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-black transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
              </svg>
            </div>
            <span className="text-lg font-bold text-[var(--accent)] group-hover:underline mb-1">
              {t.projects.viewMore}
            </span>
            <span className="text-xs text-[var(--text-muted)] max-w-xs leading-snug">
              {t.projects.allProjectsIntro}
            </span>
          </MotionLink>
        </div>
      </div>
    </section>
  );
}

export function ProjectCard({
  project,
  index,
  featuredLabel,
  linkLabel,
}: {
  project: Project;
  index: number;
  featuredLabel: string;
  linkLabel: string;
}) {
  const isFeatured = project.featured;
  const isGithubLink = project.link.includes('github.com');
  // Lien interne au portfolio (page de détail) : navigation Next sans nouvel onglet
  const isInternal = project.link.startsWith('/');
  const CardComponent = isInternal ? MotionLink : motion.a;

  return (
    <CardComponent
      href={project.link}
      {...(!isInternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={`${
        isFeatured ? 'md:col-span-2' : ''
      } card-hover-glow group relative flex flex-col justify-between p-4 md:p-5 rounded-lg border border-[var(--accent)] bg-[var(--card-bg)] hover:shadow-xl transition-all duration-300`}
    >
      <div>
        {/* Indicateur featured */}
        {isFeatured && (
          <div className="absolute top-0 right-0 px-3 py-1 text-xs font-bold bg-[var(--accent)] text-black rounded-bl-lg">
            {featuredLabel}
          </div>
        )}

        {/* Tag du projet */}
        <div className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded mb-2 bg-[var(--accent-soft)] text-[var(--accent)]">
          {project.tag}
        </div>

        {/* Titre (SentinelX garde son X rouge de marque) */}
        <h3 className="text-lg md:text-xl font-bold mb-2 text-[var(--accent)]">
          <BrandText text={project.title} />
        </h3>

        {/* Description plus compacte */}
        <p className="text-sm text-[var(--text-muted)] mb-3 leading-snug">
          {project.description}
        </p>
      </div>

      <div>
        {/* Stack technique */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.stack.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-2 py-0.5 text-[11px] rounded border border-[var(--accent)]/70 text-[var(--foreground)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Lien du projet (interne, GitHub ou site live) */}
        <div className="flex items-center gap-2 text-sm text-[var(--accent)] font-semibold group-hover:underline">
          {isInternal ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          ) : isGithubLink ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          )}
          <span>{linkLabel}</span>
        </div>
      </div>
    </CardComponent>
  );
}
