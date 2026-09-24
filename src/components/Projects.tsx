'use client';

import { motion } from 'framer-motion';
import { content } from '@/data/content';
import type { Project } from '@/types';

export default function Projects() {
  return <section id="projects" className="relative px-5 py-24">
    <div className="mx-auto max-w-7xl"><p className="section-kicker mb-4">04 / Réalisations</p><div className="mb-10 flex items-end justify-between gap-5"><h2 className="text-3xl font-medium sm:text-4xl">Projets sélectionnés</h2><span className="hidden font-mono text-xs text-[var(--text-muted)] sm:block">GITHUB / OPEN SOURCE</span></div>
      <div className="grid gap-4 md:grid-cols-2">{content.projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
    </div>
  </section>;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <motion.a href={project.link} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .07 }} className={`surface group relative block p-7 transition hover:-translate-y-1 hover:border-[var(--accent)] ${project.featured ? 'md:col-span-2 md:p-10' : ''}`}>
    <div className="flex items-start justify-between gap-4"><span className="section-kicker">{project.tag}</span><span className="font-mono text-xs text-[var(--text-muted)]">0{index + 1}</span></div>
    <h3 className="mt-10 text-2xl font-medium tracking-tight group-hover:text-[var(--accent)]">{project.title}</h3><p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--text-muted)]">{project.description}</p>
    <div className="mt-7 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="rounded border border-[var(--border)] px-2.5 py-1 font-mono text-[10px] text-[var(--text-muted)]">{tech}</span>)}</div>
    <span className="mt-8 inline-flex items-center gap-2 text-sm text-[var(--accent)]">Voir le dépôt <span aria-hidden="true">↗</span></span>
  </motion.a>;
}
