import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, getNestedTranslation } from '@/lib/translations';

type Language = 'en' | 'vi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('olym3-language') as Language;
    if (saved && (saved === 'en' || saved === 'vi')) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('olym3-language', language);
  }, [language]);

  const t = (key: string): string => {
    return getNestedTranslation(translations[language], key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
