'use client';

import { motion } from 'framer-motion';
import { content } from '@/data/content';

export default function Tools() {
  return <section id="tools" className="relative px-5 py-24">
    <div className="mx-auto max-w-7xl"><p className="section-kicker mb-4">03 / Stack</p><h2 className="mb-10 text-3xl font-medium sm:text-4xl">Outils &amp; technologies</h2>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded border border-[var(--border)] bg-[var(--border)] sm:grid-cols-4">{content.tools.map((tool, index) => <motion.a key={tool.name} href={tool.url} target={tool.url.startsWith('#') ? undefined : '_blank'} rel={tool.url.startsWith('#') ? undefined : 'noopener noreferrer'} whileHover={{ y: -3 }} className="group bg-[var(--card-bg)] p-5 transition hover:bg-[var(--background)]"><div className="mb-9 flex h-10 w-10 items-center justify-center rounded border border-[var(--border)] font-mono text-sm text-[var(--accent)] transition group-hover:border-[var(--accent)]">{tool.name.slice(0, 2).toUpperCase()}</div><p className="text-sm font-medium">{tool.name}</p><p className="mt-1 font-mono text-[10px] text-[var(--text-muted)]">outil {String(index + 1).padStart(2, '0')}</p></motion.a>)}</div>
    </div>
  </section>;
}
