import { create } from 'zustand';
import { translations } from '../i18n/translations';

type Language = 'en' | 'de';

interface LanguageStore {
  language: Language;
  t: (key: string) => string;
  setLanguage: (lang: Language) => void;
}

export const useLanguage = create<LanguageStore>((set) => ({
  language: 'en',
  t: (key: string) => {
    const store = useLanguage.getState();
    const keys = key.split('.');
    let value = translations[store.language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value as string;
  },
  setLanguage: (lang: Language) => set({ language: lang })
}));