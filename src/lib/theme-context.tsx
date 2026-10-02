// Contexte React pour la gestion des thèmes
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';
import { Theme } from '@/types';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('terminal');
  const [mounted, setMounted] = useState(false);

  // Charger le thème depuis localStorage au montage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && (savedTheme === 'terminal' || savedTheme === 'soc')) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, []);

  // Sauvegarder le thème dans localStorage à chaque changement
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme);
      // Mettre à jour la classe sur le body
      document.body.className = theme;
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'terminal' ? 'soc' : 'terminal');
  };

  // Le Provider est rendu même avant montage : sinon, au prerender SSR, tout
  // composant appelant useTheme() planterait ("must be used within a ThemeProvider").
  // Le thème par défaut ('terminal') est déterministe côté serveur et client,
  // puis localStorage est appliqué après hydratation.
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* prefers-reduced-motion généralisé : framer-motion désactive les animations
          de transformation pour tous les composants descendants */}
      <MotionConfig reducedMotion="user">
        {children}
      </MotionConfig>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}