// Bouton de changement de thème
import { useTheme } from '@/lib/theme-context';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-lg border transition-all duration-300 hover:scale-105"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        backgroundColor: theme === 'terminal' ? '#0a0e14' : '#1a1a2e',
        borderColor: theme === 'terminal' ? '#00ff9d' : '#ff6b6b',
        color: theme === 'terminal' ? '#00ff9d' : '#ff6b6b'
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