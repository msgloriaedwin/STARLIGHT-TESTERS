'use client'
import React from 'react';
import { useState, useEffect } from 'react';
import { DM_Sans } from 'next/font/google';
import { Jua } from 'next/font/google';
import Image from 'next/image';

const dm_sans = DM_Sans({
  weight: ["700"],
  subsets: ["latin"]
});

const jua = Jua({
  weight: ["400"],
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

export default function GameCardSelection() {
  const [numberArray, setNumberArray] = useState<number[]>([]);
  const [hiddenNumbersArray, setHiddenNumbersArray] = useState<string[]>([]);

  useEffect(() => {
    const initialNumbers = generateUniqueRandomNumbers(36, 1, 99);
    setNumberArray(initialNumbers);
    setHiddenNumbersArray(['+', '+', '+', '+', '+']);
  }, []);

  const revealNumber = (numberIndex: number) => {
    if (hiddenNumbersArray[numberIndex] === '+') {
      if (numberArray.length > 0) {
        const randomIndex = Math.floor(Math.random() * numberArray.length);
        const randomNumber = numberArray[randomIndex];
        const updatedNumberArray = numberArray.filter((_, index) => index !== randomIndex);

        const updatedHiddenNumbersArray = [...hiddenNumbersArray];
        updatedHiddenNumbersArray[numberIndex] = randomNumber.toString();

        setNumberArray(updatedNumberArray);
        setHiddenNumbersArray(updatedHiddenNumbersArray);
      }
    }
  };
  

    return (
      <div className='w-full h-full flex justify-center py-[50px]'>
        <div className={`${dm_sans.className} flex flex-col w-full max-w-[600px] justify-center h-fit`}>
          <section className='flex flex-col items-center w-full h-fit p-[16px] gap-[8px] rounded-[10px] bg-[#FFFFFF] bg-opacity-[.60]'>
            <h2 className='text-[24px] font-[700] leading-[28.8px] text-[#00658B]'>Select your cards</h2>
            <div className='w-full h-fit pt-[40px] pb-[20px] px-[16px] items-center grid grid-rows-3 grid-cols-12 gap-[12px]'>
              {
                numberArray.map((info, index) => {
                  const columnIndex = (index % 12) + 1; 
                  return (
                    <div key={index} className={`${columnIndex % 2 === 0 ? 'relative top-[-30px]' : ''} h-fit flex justify-center items-center py-[13px]`}>
                      <p className='text-[#404040] text-[24px] font-[700] leading-[33.6px] text-center'>{info}</p>
                    </div> 
                  )
                })
              }
            </div>
          </section>
          <section className='w-full gap-[11px] bg-transparent flex flex-col mt-[22.14px]'>
            <h3 className='text-[16px] font-[700] leading-[32px] text-[#000] text-center'>Your numbers</h3>
            <div className='flex w-full flex-col gap-[20px] self-stretch items-center'>
              <div className='grid gap-x-[20px] grid-cols-5'>
                {
                  hiddenNumbersArray.map((info, index) => {
                    return( //Remove the button component below when adding yours, revealNumber is the function your component will perform when clicked
                      <button onClick={() => revealNumber(index)} type='button' key={index} className='bg-[#ACE8FF] hover:bg-[#9CCBFF] border-b-[3px] border-l-[3px] border-[#00A8E8] relative w-[70px] h-[90px] rounded-tl-sm rounded-br-sm flex items-center justify-center'>
                        {
                          (info === '+')
                          ?
                          (
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
                              <path d="M24.5 15.8604V16.3604H25H35C36.1935 16.3604 37.3381 16.8345 38.182 17.6784C39.0259 18.5223 39.5 19.6669 39.5 20.8604C39.5 22.0538 39.0259 23.1984 38.182 24.0423C37.3391 24.8852 36.1963 25.3592 35.0043 25.3603L25.0089 25.1829L24.5 25.1739V25.6829V35.8604C24.5 37.0538 24.0259 38.1984 23.182 39.0423C22.3381 39.8862 21.1935 40.3604 20 40.3604C18.8065 40.3604 17.6619 39.8862 16.818 39.0423C15.9751 38.1994 15.5011 37.0565 15.5 35.8646L15.6774 25.6916L15.6865 25.1739L15.1688 25.1829L4.99577 25.3603C3.80382 25.3592 2.66094 24.8852 1.81802 24.0423C0.974105 23.1984 0.5 22.0538 0.5 20.8604C0.5 19.6669 0.974105 18.5223 1.81802 17.6784C2.66193 16.8345 3.80653 16.3604 5 16.3604H15.1775H15.6865L15.6774 15.8515L15.5 5.85605C15.5011 4.66413 15.9751 3.52127 16.818 2.67837C17.6619 1.83446 18.8065 1.36035 20 1.36035C21.1935 1.36035 22.3381 1.83446 23.182 2.67837C24.0259 3.52228 24.5 4.66688 24.5 5.86035V15.8604Z" fill="#F7EEE7" stroke="#00222E"/>
                            </svg>
                          )
                          :
                          (<p className={`${jua.className} text-[40px] font-[400] leading-normal text-center absolute inset-0 flex items-center justify-center flex-shrink-0 text-[#F7EEE7]`}>{info}</p>)
                        }
                      </button>
                    )
                  })
                }
              </div>
              <div className='w-full flex items-center flex-col gap-[8px] max-w-[91px]'>
                <div className='w-[60px] h-[60px] rounded-full relative'>
                  <Image unoptimized fill src="https://s3-alpha-sig.figma.com/img/f410/5de7/2bc2c1d78f6553034df182ab879faf82?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hSHhfwG0DN1jRZ0JcB1kMSNkFQHm1RlkpvwNv1nfyQRhqZGcnAgG75WsoFDQeGv57JdZ8FZlwS57W0-5pbIPY5-wtwRs19fEc4xuM96hYoddjx2d0ICiTS2WQcR1KJTHLBiupyY0CMGRgab7V9UjMwr5WswT8BYMiK8k80JydOcaJhjpFPBL2UySueFbvxghU6IRXSY8W0kSS2CI4~9zkdCqIKThwmwQCJ~1d5lWBWsDJRHOV9jLGeXhqleho-AeDjg93wc0o9wUcgbcFzIyNwtaVYjljPppMzXOfqpEKeS7qgIY-XN~zU85kvUOfio3uFW7~WSCxBQGsdPE8ktpEw" alt="illustration for player" className='object-cover'/>
                </div>
                <div className='w-full flex flex-row gap-[8px] items-center justify-center'>
                  <div className='w-[8px] h-[8px] rounded-full bg-[#FD0]'></div>
                  <p className='text-[18px] leading-[32px] font-[400] text-[#00222E]'>You</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
}
