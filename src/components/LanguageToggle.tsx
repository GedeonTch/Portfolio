// Sélecteur de langue FR/EN (fixé à côté du bouton de thème)
'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/language-context';

const LANGUAGES = [
  { code: 'fr' as const, label: 'Français' },
  { code: 'en' as const, label: 'English' },
];

export default function LanguageToggle() {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-4 right-16 z-50 flex rounded-lg border overflow-hidden"
      style={{ borderColor: 'var(--accent)', backgroundColor: 'var(--background)' }}
      role="group"
      aria-label="Langue / Language"
    >
      {LANGUAGES.map((language) => {
        const isActive = lang === language.code;
        return (
          <button
            key={language.code}
            onClick={() => {
              if (!isActive) toggleLanguage();
            }}
            aria-pressed={isActive}
            aria-label={language.label}
            className={`px-2.5 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
              isActive
                ? 'bg-[var(--accent)] text-black'
                : 'text-[var(--accent)] hover:bg-[var(--accent-soft)]'
            }`}
          >
            {language.code}
          </button>
        );
      })}
    </motion.div>
  );
}
