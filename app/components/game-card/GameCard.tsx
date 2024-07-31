"use client"
import { useState } from 'react';
import Image from "next/image";

type OnCardActivateProps = {
    value: string | number,
    activeState: boolean
}

type GameCardProps = {
  value?: string | number,
  onCardActivate?: ({value, activeState}: OnCardActivateProps) => void
}

const GameCard = ({value, onCardActivate}: GameCardProps) => {
  const [isCardActive, setIsCardActive] = useState(false);

  const handleCardActive = () => {
    const activeState = true
    setIsCardActive(true)
    if (onCardActivate && value) {
      onCardActivate({ value, activeState })
    }
  }

  return (
        <>
        {
          value
            ?
            <div className='relative'>
              <div onClick={() => !isCardActive && handleCardActive()} className={`z-1 relative cursor-pointer md:max-w-16 max-w-10 w-full max-h-14 md:max-h-20 rounded-tl rounded-tr-none rounded-br rounded-bl-none  box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-4 md:py-[1.5rem] px-[1rem] text-center text-[1.8rem] md:text-[2.7rem] border-b-[3px] border-solid border-primaryBlue border-l-[3px] text-[#00222e] ${isCardActive ? "bg-green-dirty-green" : "bg-form-blue"}`}>
                <b className="relative leading-[140%]">{value}</b>
              </div>
              {
                isCardActive 
                ? <Image className="z-[2] absolute top-[-0.6rem] right-[-0.6rem] w-6 md:w-7" src="./tick-circle.svg" alt="green circle tick image" width="30" height="30"/> 
                : ""
              }
            </div>
          :
          <div className={`cursor-pointer md:max-w-16 max-w-10 w-full max-h-14 md:max-h-20 relative rounded-tl rounded-tr-none rounded-br rounded-bl-none  box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-[1.5rem] md:py-[1.3rem] px-[0.4rem] md:px-[0.7rem] text-center text-[1.8rem] md:text-[3rem] border-b-[3px] border-solid border-primaryBlue border-l-[3px] bg-form-blue text-transaprent`}>
            <Image src="./add-card.svg" alt="Add card Button" width={60} height={60}/>
          </div>
        }
        </>
  )
}

export default GameCard
