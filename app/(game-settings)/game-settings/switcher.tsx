
import { useState, useEffect } from "react";
import { languages } from "@/utils/language";
import { Locale } from "@/utils/config";
import { setUserLocale, getUserLocale } from "@/utils/locale";

const LocaleSwitcher: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Locale>("en");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const initializeLanguage = async () => {
      try {
        const currentLocale = await getUserLocale();
        if (currentLocale && ["en", "es", "fr"].includes(currentLocale)) {
          setSelectedLanguage(currentLocale as Locale);
        }
      } catch (error) {
        setSelectedLanguage("en");
      }
    };

    initializeLanguage();
  }, []);

  const handleLanguageChange = (language: Locale) => {
    setUserLocale(language);
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getLanguageInfo = (code: Locale) => {
    return languages.find((lang) => lang.code === code) || languages[0];
  };

  const selectedLanguageInfo = getLanguageInfo(selectedLanguage);
  const otherLanguages = languages.filter(lang => lang.code !== selectedLanguage);

  const formatLanguage = (lang: typeof languages[0]) => {
    return `${lang.name}`;
  };

  return (
    <>
      <div className="relative max-w-[411px]">
        <div
          className="flex items-center justify-between w-full h-[56px] px-4 cursor-pointer rounded-md relative bg-primary-100 border border-primary-900"
          onClick={toggleDropdown}
        >
          <div className="text-primary-700 text-[16px]">
            {formatLanguage(selectedLanguageInfo)}
          </div>
          <svg
            className={`w-4 h-4 text-primary-700 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
        {isOpen && (
          <div className="z-50 absolute mt-2 list-none bg-primary-100 rounded-[10px] shadow w-full max-h-[100px]">
            <ul className="font-medium" role="none">
              {otherLanguages.map((language) => (
                <li key={language.code}>
                  <div
                    className="relative px-4 transition-all duration-800 ease-in-out w-full h-[43px] text-[16px] flex items-center gap-2 text-primary-700 cursor-pointer hover:bg-primary-yellow-300 hover:rounded-[6px]"
                    onClick={() =>
                      handleLanguageChange(language.code as Locale)
                    }
                  >
                    <span className="text-sm">{formatLanguage(language)}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default LocaleSwitcher;