// Navigation principale : liens traduits + sélecteurs thème/langue intégrés dans la barre
// (fix du bug où les boutons flottants coupaient le lien Contact)
'use client';

import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';
import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';

// Routes absolues : fonctionnent depuis la page d'accueil et les sous-pages
// (l'ordre correspond aux libellés de t.nav — Labs inclus)
const SECTION_HREFS = ['/#hero', '/#about', '/#skills', '/#tools', '/#projects', '/labs', '/#contact'];

export default function Navigation() {
  const { t } = useLanguage();
  const pathname = usePathname();
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
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <a href="/#hero" className="text-xl font-bold text-[var(--accent)] font-mono shrink-0">
            GC
          </a>

          {/* Liens de navigation */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {navItems.map((item) => {
              const isActive = item.href === '/labs' && pathname.startsWith('/labs');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? 'text-[var(--accent)]' : 'text-[var(--foreground)] hover:text-[var(--accent)]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Menu mobile */}
          <div className="md:hidden flex-1 flex justify-end">
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

          {/* Sélecteurs de thème et de langue : dans le flux de la barre */}
          <div className="flex items-center gap-2 shrink-0">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
