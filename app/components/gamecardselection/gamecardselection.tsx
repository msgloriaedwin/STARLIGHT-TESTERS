'use client'
import React from 'react';
import { useState } from 'react';
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

const dummyNumberarray = Array.from({ length: 60 }, (_, index) => index + 1);

const hiddenNumbers = [
  {
    number: '?'
  },
  {
    number: '?'
  },
  {
    number: '?'
  },
  {
    number: '?'
  },
  {
    number: '?'
  }
]


export default function GameCardSelection() {
    const [numberArray, setNumberArray] = useState(dummyNumberarray);

    return (
      <div className='w-full h-full flex justify-center py-[50px]'>
        <div className={`${dm_sans.className} flex flex-col w-full max-w-[632px] justify-center h-fit`}>
          <section className='flex flex-col items-center w-full h-fit border-[1px] border-[#00A8E8] p-[16px] gap-[8px] rounded-[10px] bg-[#FFFFFF] bg-opacity-[.60]'>
            <h2 className='text-[24px] font-[700] leading-[28.8px] text-[#00658B]'>Select your cards</h2>
            <div className='w-full pr-[32px] items-center grid grid-rows-5 grid-cols-12 gap-[8px]'>
              {
                numberArray.map((info, index) => {
                  return (
                    <div key={index} className='w-[40px] h-[60px] flex justify-center items-center'>
                      <p className='text-[#400016] text-[24px] font-[700] leading-[33.6px] text-center'>{info}</p>
                    </div> 
                  )
                })
              }
            </div>
          </section>
          {/* <section className='w-full gap-[11px] bg-transparent flex flex-col mt-[22.14px]'>
            <h3 className='text-[16px] font-[700] leading-[32px] text-[#000] text-center'>Your numbers</h3>
            <div className='flex w-full flex-col gap-[20px] self-stretch items-center'>
              <div className='grid gap-x-[20px] grid-cols-5'>
                {
                  hiddenNumbers.map((info, index) => {
                    return(
                      <button type='button' key={index} className='bg-[#ACE8FF] border-b-[3px] border-l-[3px] border-[#00A8E8] relative w-[70px] h-[90px] rounded-tl-sm rounded-br-sm flex items-center justify-center'>
                          <Image width={30} height={70} src='/gamecardselectioncomponent/add.svg' className='object-contain' alt='illustration of a question mark' />
                        <p className={`${jua.className} text-[#00222E] text-[70px] font-[400] leading-normal text-center absolute inset-0 flex items-center justify-center`}>{info.number}</p>
                      </button>
                    )
                  })
                }
              </div>
              <div className='w-full flex items-center flex-col gap-[8px] max-w-[91px]'>
                <div className='w-[60px] h-[60px] rounded-full relative'>
                  <Image fill src="/gamecardselectioncomponent/shark.png" alt="illustration for player" className='object-cover'/>
                </div>
                <div className='w-full flex flex-row gap-[8px] items-center justify-center'>
                  <div className='w-[8px] h-[8px] rounded-full bg-[#FD0]'></div>
                  <p className='text-[18px] leading-[32px] font-[400] text-[#00222E]'>You</p>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    )
}
