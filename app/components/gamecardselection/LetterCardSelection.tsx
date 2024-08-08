"use client";
import React, { useState, useEffect } from "react";
import { DM_Sans } from "next/font/google";
import LetterCard from "../game-card/LetterCard";

const dm_sans = DM_Sans({
  weight: ["700"],
  subsets: ["latin"],
});

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const generateUniqueRandomLetters = (count: number): string[] => {
  const uniqueLetters = new Set<string>();

  while (uniqueLetters.size < count) {
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    uniqueLetters.add(randomLetter);
  }

  return Array.from(uniqueLetters);
};

export default function LetterCardSelection() {
  const [letterArray, setLetterArray] = useState<string[]>([]);
  const [hiddenLettersArray, setHiddenLettersArray] = useState<string[]>([]);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(
    new Set()
  );

  useEffect(() => {
    const initialLetters = generateUniqueRandomLetters(26);
    setLetterArray(initialLetters);
    setHiddenLettersArray(["", "", "", "", ""]);
  }, []);

  const revealLetter = (letterIndex: number) => {
    if (letterArray[letterIndex] === " ") {
      return;
    }
    const letterToReveal = letterArray[letterIndex];
    const emptyIndex = hiddenLettersArray.findIndex((item) => item === "");

    if (emptyIndex !== -1) {
      const updatedHiddenLettersArray = [...hiddenLettersArray];
      updatedHiddenLettersArray[emptyIndex] = letterToReveal;

      setHiddenLettersArray(updatedHiddenLettersArray);
      setRevealedIndices((prev) => new Set(prev).add(letterIndex));
    }
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div
        className={`${dm_sans.className} flex flex-col w-full max-w-sm md:max-w-[600px] justify-center h-fit`}
      >
        <section className="flex flex-col items-center w-full h-fit p-0 md:p-[16px] gap-[24px] md:gap-[8px] rounded-[10px] bg-transparent">
          <h1 className="text-primary-700 font-bold text-5xl mb-4">
            H _ _ _ _ _ Y
          </h1>
          <h2 className="text-[16px] md:text-[24px] font-[700] leading-[28.8px] text-primary-700">
            Select your letters
          </h2>
          <div className="w-full h-fit pt-[8px] md:pt-[32px] pb-[16px] px-[16px] items-center grid grid-rows-3 grid-cols-12 gap-[12px]">
            {letterArray.map((info, index) => {
              const columnIndex = (index % 12) + 1;
              const isRevealed = revealedIndices.has(index);
              return (
                <button
                  type="button"
                  onClick={() => revealLetter(index)}
                  key={index}
                  className={`w-[27.7px] md:w-[40px] h-[41.5px] md:h-[60px] ${
                    columnIndex % 2 === 0 ? "relative top-[-30px]" : ""
                  } h-fit flex justify-center items-center ${
                    isRevealed
                      ? "border-l-[3px] border-b-[3px] bg-[#90C0D2] border-[#A8AEB6] rounded-tl-[4px] rounded-br-[4px] shadow[-4px_4px_2px_0px_rgba(180,_180,_180,_0.24)]"
                      : ""
                  }`}
                >
                  <p className="text-[#404040] cursor-pointer text-[16px] md:text-[24px] font-[700] leading-[33.6px] text-center">
                    {info}
                  </p>
                </button>
              );
            })}
          </div>
        </section>
        <section className="w-full gap-[11px] bg-transparent flex flex-col ">
          <h3 className="text-[16px] font-[700] leading-[32px]  text-[#000] text-center">
            Your letters
          </h3>
          <div className="flex w-full flex-col gap-[20px] self-stretch items-center">
            <div className="grid  gap-x-[20px] grid-cols-5">
              {hiddenLettersArray.map((info, index) => {
                return <LetterCard key={index} value={info} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
