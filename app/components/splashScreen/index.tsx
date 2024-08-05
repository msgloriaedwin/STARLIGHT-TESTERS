"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/assets/images/Remote Bingo Logo.svg";

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

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
    <div className="bg-body flex flex-col items-center justify-center w-screen h-screen gap-6">
      <Image
        className="w-full h-auto max-w-[242.678px] max-h-[99.85px] md:max-w-[321.49px] md:max-h-[132.277px] flex-shrink-0 animate-bounce"
        src={logo}
        alt="Remote Bingo"
      />
      <p
        className="text-center font-dm-sans font-bold text-primary-900 custom-font-features
        text-[27.175px] leading-[34.723px] 
        md:text-[36px] md:leading-[46px] 
      "
      >
        Welcome to Remote Bingo
      </p>
    </div>
  );
};

export default SplashScreen;
