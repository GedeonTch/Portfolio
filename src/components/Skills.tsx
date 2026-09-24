'use client';

import { motion } from 'framer-motion';
import { content } from '@/data/content';

export default function Skills() {
  return <section id="skills" className="relative px-5 py-24">
    <div className="mx-auto max-w-7xl"><p className="section-kicker mb-4">02 / Capacités</p><div className="mb-10 flex flex-wrap items-end justify-between gap-5"><h2 className="text-3xl font-medium sm:text-4xl">Compétences opérationnelles</h2><p className="max-w-sm text-sm leading-relaxed text-[var(--text-muted)]">Un socle orienté investigation, réseau et automatisation.</p></div>
      <div className="grid gap-px overflow-hidden rounded border border-[var(--border)] bg-[var(--border)] md:grid-cols-2 lg:grid-cols-3">{content.skills.map((skill, index) => <motion.div key={skill.category} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className="bg-[var(--card-bg)] p-7"><span className="font-mono text-xs text-[var(--accent)]">0{index + 1}</span><h3 className="mt-8 text-lg font-medium">{skill.category}</h3><ul className="mt-5 space-y-2 text-sm text-[var(--text-muted)]">{skill.items.map((item) => <li key={item} className="flex items-center gap-3"><span className="h-px w-4 bg-[var(--accent)]" />{item}</li>)}</ul></motion.div>)}</div>
    </div>
  </section>;
}
