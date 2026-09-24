// Navigation principale
'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/lib/theme-context';

export default function Navigation() {
  const { theme } = useTheme();
  const accentColor = theme === 'terminal' ? 'text-[#00ff9d]' : 'text-[#ff6b6b]';
  const borderColor = theme === 'terminal' ? 'border-[#00ff9d]' : 'border-[#ff6b6b]';

  const navItems = [
    { name: 'Accueil', href: '#hero' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Outils', href: '#tools' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-40 border-b ${borderColor} bg-[var(--background)]/80 backdrop-blur-sm`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className={`text-xl font-bold ${accentColor}`}>
            GC
          </a>

          {/* Liens de navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium hover:${accentColor} transition-colors text-[var(--foreground)]`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Menu mobile */}
          <div className="md:hidden">
            <select
              onChange={(e) => {
                const href = e.target.value;
                if (href) window.location.href = href;
              }}
              className={`px-3 py-2 rounded border ${borderColor} bg-[var(--card-bg)] text-[var(--foreground)] text-sm`}
            >
              <option value="">Menu</option>
              {navItems.map((item) => (
                <option key={item.name} value={item.href}>
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