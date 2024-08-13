"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../../public/assets/images/Remote Bingo Logo A.png";
import { useTranslations } from 'next-intl';

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);
  const t = useTranslations('SplashScreen');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showSplash) {
    return null;
  }
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-body gap-6">
      <Image
        className="w-full h-auto max-w-[242.678px] max-h-[99.85px] md:max-w-[321.49px] md:max-h-[132.277px]"
        src={logo}
        alt="Remote Bingo"
      />
      <p className="text-center font-bold text-primary-900 font-dm-sans custom-font-features text-[27.175px] leading-[34.723px] md:text-[36px] md:leading-[46px]">
      {t('welcomeMessage')}
      </p>
    </div>
  );
};

export default SplashScreen;
