import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
      className="text-white/80 hover:text-primary px-3 py-1 rounded-md hover:bg-white/10 transition-colors duration-200 font-medium text-sm"
    >
      {language === 'en' ? '🇩🇪 Deutsch' : '🇬🇧 English'}
    </button>
  );
}

export default LanguageToggle;