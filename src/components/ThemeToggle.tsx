// Bouton de changement de thème
'use client';

import { useTheme } from '@/lib/theme-context';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border transition-colors duration-300 hover:bg-[var(--accent-soft)]"
      whileTap={{ scale: 0.95 }}
      style={{
        backgroundColor: 'var(--background)',
        borderColor: 'var(--accent)',
        color: 'var(--accent)'
      }}
      aria-label="Changer de thème"
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        {theme === 'terminal' ? (
          // Icône SOC Alert (bouclier avec alerte)
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        ) : (
          // Icône Terminal (console)
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        )}
      </svg>
    </motion.button>
  );
}