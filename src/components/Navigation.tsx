'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme-context';

const navItems = [
  ['Accueil', '#hero'], ['À propos', '#about'], ['Compétences', '#skills'],
  ['Outils', '#tools'], ['Projets', '#projects'], ['Contact', '#contact'],
];

export default function Navigation() {
  const { theme } = useTheme();
  return (
    <motion.nav initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      className="fixed inset-x-0 top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5">
        <a href="#hero" className="flex items-center gap-3 font-mono text-sm tracking-wider">
          <span className="grid h-8 w-8 place-items-center rounded border border-[var(--accent)] text-[var(--accent)]">GC</span>
          <span className="hidden text-[var(--foreground)] sm:inline">TCHIBANVUNYA<span className="text-[var(--accent)]">.</span>SEC</span>
        </a>
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map(([name, href]) => <a key={href} href={href} className="text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]">{name}</a>)}
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden font-mono text-[10px] uppercase tracking-widest text-[var(--text-muted)] sm:inline">{theme === 'terminal' ? 'Terminal' : 'SOC alert'}</span>
          <select aria-label="Navigation mobile" onChange={(e) => e.target.value && (window.location.href = e.target.value)}
            className="max-w-[5.5rem] rounded border border-[var(--border)] bg-[var(--card-bg)] px-2 py-2 text-xs text-[var(--foreground)] lg:hidden">
            <option value="">Menu</option>{navItems.map(([name, href]) => <option key={href} value={href}>{name}</option>)}
          </select>
          <ThemeSwitch />
        </div>
      </div>
    </motion.nav>
  );
}

function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  return <button onClick={toggleTheme} aria-label="Changer de thème" className="flex items-center gap-2 rounded-full border border-[var(--border)] px-2.5 py-1.5 text-[10px] text-[var(--text-muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
    <span className={`h-2 w-2 rounded-full ${theme === 'terminal' ? 'bg-[var(--accent)]' : 'bg-[var(--signal)]'}`} /> {theme === 'terminal' ? 'T' : 'S'}
  </button>;
}
