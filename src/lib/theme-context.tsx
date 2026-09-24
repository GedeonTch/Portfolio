'use client';

// Contexte React pour la gestion des thèmes
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
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

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
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