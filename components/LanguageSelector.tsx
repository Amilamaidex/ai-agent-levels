import { LanguageCode } from '@/types';

interface LanguageSelectorProps {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
}

export function LanguageSelector({
  language,
  setLanguage,
}: LanguageSelectorProps) {
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={toggleLanguage}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white shadow-sm hover:bg-blue-50 transition-colors duration-200"
      >
        <span
          className={`font-medium ${
            language === 'en' ? 'text-blue-600' : 'text-gray-400'
          }`}
        >
          EN
        </span>
        <span className="text-gray-300 mx-1">|</span>
        <span
          className={`font-medium ${
            language === 'fr' ? 'text-blue-600' : 'text-gray-400'
          }`}
        >
          FR
        </span>
        <div className="ml-2 h-4 w-4 rounded-full bg-blue-100 relative">
          <div
            className={`absolute h-3 w-3 rounded-full bg-blue-600 top-0.5 transition-all duration-200 
            ${language === 'en' ? 'left-0.5' : 'left-2'}`}
          />
        </div>
      </button>
    </div>
  );
}
