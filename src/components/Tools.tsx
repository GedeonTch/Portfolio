'use client';

import { motion } from 'framer-motion';
import { content } from '@/data/content';

function ToolIcon({ name }: { name: string }) {
  const common = { className: 'h-6 w-6', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, 'aria-hidden': true as const };
  const paths: Record<string, JSX.Element> = {
    python: <><path d="M12 3c-4 0-4 2-4 2v3h5v1H6c-3 0-3 4 0 4h2v-2" /><path d="M12 21c4 0 4-2 4-2v-3h-5v-1h7c3 0 3-4 0-4h-2v2" /><circle cx="10" cy="5" r=".7" fill="currentColor" /><circle cx="14" cy="19" r=".7" fill="currentColor" /></>,
    kali: <><path d="m4 17 5-10 3 5 3-3 5 8H4Z" /><path d="m8 17 4-5 2 3" /></>,
    nmap: <><circle cx="12" cy="12" r="8" /><path d="M4 12h16M12 4c2 2.2 3 4.9 3 8s-1 5.8-3 8c-2-2.2-3-4.9-3-8s1-5.8 3-8Z" /></>,
    docker: <><path d="M3 14h15a3 3 0 0 0 3-2c-2-.8-3-1-4-1V8H5v6Z" /><path d="M7 8V5h3v3m1 0V5h3v3M5 17h12" /></>,
    wireshark: <><path d="M12 3 7 12l5 9 5-9-5-9Z" /><path d="M7 12h10M9 8h6m-6 8h6" /></>,
    zap: <><path d="m13 2-8 11h6l-1 9 8-11h-6l1-9Z" /></>,
    wazuh: <><path d="M12 3 19 6v5c0 4-2.7 7.5-7 10-4.3-2.5-7-6-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>,
    sentinelx: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="2" /><path d="m12 4v6m8 2h-6m-2 8v-6m-8-2h6" /></>,
  };
  return <svg {...common}>{paths[name] ?? paths.sentinelx}</svg>;
}

export default function Tools() {
  return <section id="tools" className="relative px-5 py-24">
    <div className="mx-auto max-w-7xl"><p className="section-kicker mb-4">03 / Stack</p><h2 className="mb-10 text-3xl font-medium sm:text-4xl">Outils &amp; technologies</h2>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded border border-[var(--border)] bg-[var(--border)] sm:grid-cols-4">{content.tools.map((tool, index) => <motion.a key={tool.name} href={tool.url} target={tool.url.startsWith('#') ? undefined : '_blank'} rel={tool.url.startsWith('#') ? undefined : 'noopener noreferrer'} whileHover={{ y: -3 }} className="group bg-[var(--card-bg)] p-5 transition hover:bg-[var(--background)]"><div className="mb-9 flex h-10 w-10 items-center justify-center rounded border border-[var(--border)] text-[var(--accent)] transition group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)]/10"><ToolIcon name={tool.icon} /></div><p className="text-sm font-medium">{tool.name}</p><p className="mt-1 font-mono text-[10px] text-[var(--text-muted)]">outil {String(index + 1).padStart(2, '0')}</p></motion.a>)}</div>
    </div>
  </section>;
}
