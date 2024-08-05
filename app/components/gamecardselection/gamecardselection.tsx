import React from 'react';
import { useState, useEffect } from 'react';
import { DM_Sans } from 'next/font/google';
import GameCard from '../game-card/GameCard';

const dm_sans = DM_Sans({
  weight: ["700"],
  subsets: ["latin"]
});

const generateUniqueRandomNumbers = (count: number, min: number, max: number): number[] => {
  const uniqueNumbers = new Set<number>();

  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueNumbers.add(randomNumber);
  }

  return Array.from(uniqueNumbers);
};

const formatNumber = (number: number): string => {
  return number < 10 ? `0${number}` : `${number}`;
};

export default function GameCardSelection() {
  const [numberArray, setNumberArray] = useState<(number | string)[]>([]);
  const [hiddenNumbersArray, setHiddenNumbersArray] = useState<string[]>([]);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());

  useEffect(() => {
    const initialNumbers = generateUniqueRandomNumbers(36, 1, 99);
    setNumberArray(initialNumbers);
    setHiddenNumbersArray(['', '', '', '', '']);
  }, []);

  const revealNumber = (numberIndex: number) => {
    if (numberArray[numberIndex] === ' ') {
      return; 
    }
    const numberToReveal = numberArray[numberIndex] as number;
    const emptyIndex = hiddenNumbersArray.findIndex(item => item === '');

    if (emptyIndex !== -1) {
      const updatedHiddenNumbersArray = [...hiddenNumbersArray];
      updatedHiddenNumbersArray[emptyIndex] = formatNumber(numberToReveal);

      setHiddenNumbersArray(updatedHiddenNumbersArray);
      setRevealedIndices(prev => new Set(prev).add(numberIndex));
    }
  };

  return (
    <div className='w-full h-full flex justify-center py-[50px]'>
      <div className={`${dm_sans.className} flex flex-col w-full max-w-sm md:max-w-[600px] justify-center h-fit`}>
        <section className='flex flex-col items-center w-full h-fit p-0 md:p-[16px] gap-[24px] md:gap-[8px] rounded-[10px] bg-transparent]'>
          <h2 className='text-[16px] md:text-[24px] font-[700] leading-[28.8px] text-[#00658B]'>Select your numbers</h2>
          <div className='w-full h-fit pt-[11px] md:pt-[40px] pb-[20px] px-[16px] items-center grid grid-rows-3 grid-cols-12 gap-[12px]'>
            {
              numberArray.map((info, index) => {
                const columnIndex = (index % 12) + 1;
                const isRevealed = revealedIndices.has(index);
                return (
                  <button
                    type='button'
                    onClick={() => revealNumber(index)}
                    key={index}
                    className={`w-[27.7px] md:w-[40px] h-[41.5px] md:h-[60px] ${columnIndex % 2 === 0 ? 'relative top-[-30px]' : ''} h-fit flex justify-center items-center ${isRevealed ? 'border-l-[3px] border-b-[3px] bg-[#D9D9D9] border-[#A8AEB6] rounded-tl-[4px] rounded-br-[4px] shadow[-4px_4px_2px_0px_rgba(180,_180,_180,_0.24)]' : ''}`}>
                    <p className='text-[#404040] cursor-pointer text-[16px] md:text-[24px] font-[700] leading-[33.6px] text-center'>
                      {formatNumber(info as number)}
                    </p>
                  </button>
                )
              })
            }
          </div>
        </section>
        <section className='w-full gap-[11px] bg-transparent flex flex-col mt-[59] md:mt-[116px]'>
          <h3 className='text-[16px] font-[700] leading-[32px] text-[#000] text-center'>Your numbers</h3>
          <div className='flex w-full flex-col gap-[20px] self-stretch items-center'>
            <div className='grid gap-x-[20px] grid-cols-5'>
              {
                hiddenNumbersArray.map((info, index) => {
                  return (
                    <GameCard 
                      key={index} 
                      value={info} 
                    />
                  )
                })
              }
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
