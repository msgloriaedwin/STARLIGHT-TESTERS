import { useState, useEffect } from 'react';
import { languages } from '@/utils/language';
import Image from "next/image";
import { Language } from '@/utils/language';
import { Locale } from '@/utils/config';
import { setUserLocale, getUserLocale } from '@/utils/locale';

const LocaleSwitcher: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<Locale>('en');
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        
        const initializeLanguage = async () => {
            try {
                const currentLocale = await getUserLocale();
                if (currentLocale && ['en', 'es', 'fr'].includes(currentLocale)) {
                    setSelectedLanguage(currentLocale as Locale);
                }
            } catch (error) {
                console.error('Error fetching user locale:', error);
                
                setSelectedLanguage('en');
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

    const findFlag = (code: Locale) => {
        const language = languages.find(lang => lang.code === code);
        return language ? language.flag : '/en.svg';
    };
    
    const flagPath = findFlag(selectedLanguage);
    return (
        <>
            <div className='relative'>
                <div className="w-[110px] flex cursor-pointer justify-center items-center"
                    onClick={toggleDropdown}
                >
                    <Image src={flagPath} alt='' width={36} height={24}/> 
                    <div className='text-primary-700 font-bold mx-2 uppercase text-lg'>{selectedLanguage}</div>
                    <svg
                    className={`w-4 h-4  transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                     width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.08147 8.32129L7.31147 8.32129L12.9215 8.32129C13.8815 8.32129 14.3615 7.16129 13.6815 6.48129L8.50147 1.30129C7.67147 0.471289 6.32147 0.471289 5.49147 1.30129L3.52147 3.27129L0.311472 6.48129C-0.358528 7.16129 0.121472 8.32129 1.08147 8.32129Z" fill="#00658B"/>
                  </svg>
                </div>
                {isOpen && (
                    <div
                        className="z-50 absolute top-full -left-full my-4 list-none bg-white rounded-[16px] shadow w-[194px] px-4"
                    >
                        <ul className="py-2 font-medium" role="none"><div className='text-xs  text-[#9F9F9F] my-2'>SELECT YOUR LANGUAGE</div>
                            {languages.map((language) => (
                                <li key={language.code}>
                                    <div
                                        className="  transition-all duration-800 ease-in-out flex items-center gap-2 py-4 text-[#00222E] cursor-pointer hover:justify-center hover:bg-[#F1FBFF] hover:rounded-[6px]"
                                        onClick={() => handleLanguageChange(language.code as Locale)}
                                    >
                                        <Image src={language.flag} width={24} height={16} alt='flg' />
                                        <div className="text-sm">
                                            {language.name}
                                        </div>
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
