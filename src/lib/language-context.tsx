// Contexte React pour la langue (FR/EN)
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { content } from '@/data/content';
import { contentEn, ui, Language, UiTexts } from '@/data/translations';
import { ContentData } from '@/types';

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  t: UiTexts;
  data: ContentData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Défaut 'fr' déterministe : identique serveur/client (comme pour le thème)
  const [lang, setLang] = useState<Language>('fr');
  const [mounted, setMounted] = useState(false);

  // Charger la langue depuis localStorage au montage
  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Language;
    if (savedLang === 'fr' || savedLang === 'en') {
      setLang(savedLang);
    }
    setMounted(true);
  }, []);

  // Sauvegarder la langue + attribut lang du document
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('lang', lang);
      document.documentElement.lang = lang;
    }
  }, [lang, mounted]);

  const toggleLanguage = () => {
    setLang((previous) => (previous === 'fr' ? 'en' : 'fr'));
  };

  const value: LanguageContextType = {
    lang,
    toggleLanguage,
    t: ui[lang],
    data: lang === 'fr' ? content : contentEn,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
