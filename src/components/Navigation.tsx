// Navigation principale (liens traduits via useLanguage)
'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

// Ancres : l'ordre correspond aux libellés de t.nav
const SECTION_HREFS = ['#hero', '#about', '#skills', '#tools', '#projects', '#contact'];

export default function Navigation() {
  const { t } = useLanguage();
  const navItems = SECTION_HREFS.map((href, index) => ({
    name: t.nav[index],
    href,
  }));

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-40 border-b border-[var(--accent)] bg-[var(--background)]/80 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="text-xl font-bold text-[var(--accent)]">
            GC
          </a>

          {/* Liens de navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-[var(--accent)] transition-colors text-[var(--foreground)]"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Menu mobile (décalé pour laisser la place aux boutons thème/langue) */}
          <div className="md:hidden mr-24">
            <select
              onChange={(e) => {
                const href = e.target.value;
                if (href) window.location.href = href;
              }}
              className="px-3 py-2 rounded border border-[var(--accent)] bg-[var(--card-bg)] text-[var(--foreground)] text-sm"
              aria-label="Menu"
            >
              <option value="">Menu</option>
              {navItems.map((item) => (
                <option key={item.href} value={item.href}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
