
import { useTranslations } from 'next-intl';  
import React from 'react';
import CustomButton from '../../shared/button/custombutton';
import Link from 'next/link';
import Image from 'next/image';
const Hero: React.FC = () => {
  const t = useTranslations('HomePage');
  return (
    <section className="pt-36 md:pt-[11.5rem] flex items-center flex-col gap-x-6 justify-between max-w-[1200px] mx-auto lg:flex-row pb-20">
      <div className=" mx-auto px-2 sm:px-4 text-center lg:text-start">
        <h1 className="text-[2.25rem] sm:text-[2.5rem] lg:text-[4rem] leading-[1.2] font-bold text-primary-700 mb-4">{t('title')}</h1>
        <p className="text-lg text-primary-700 lg:text-black mb-8">
        {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 w-full px-3 md:px-0">
          <Link href='/create-game' className=' !w-full'>
            <CustomButton variant='secondary' className='!h-12 !w-full' >
            {t('createGameButton')}
            </CustomButton>
          </Link>
          <form onSubmit={(e:any) => e.preventDefault()} className="flex  items-center pl-2 pr-2.5 justify-between border border-primary-700 h-12 bg-white rounded-lg w-full sm:max-w-[50%] ">
            <input
              type="text"
              placeholder={t('inputPlaceholder')}
              //value='234-546-ABC'
              className=" text-sm text-neutral-700 border-0 outline-0 !bg-transparent  max-w-[60%] h-12"
            />
            <Link href='/join-game'>
              <button type='submit' className=" text-primary-700 whitespace-nowrap text-sm">
              {t('joinGameButton')}
              </button>
            </Link>
          </form>
        </div>
      </div>
        <div className=" w-full px-3 md:px-0 lg:max-w-[50%] mx-auto">
          <Image priority width={530} height={480} src="/bingo-hero.png" alt="Bingo Card" className="mx-auto w-full object-contain"  />
        </div>
    
    </section>
  );
};

export default Hero;
