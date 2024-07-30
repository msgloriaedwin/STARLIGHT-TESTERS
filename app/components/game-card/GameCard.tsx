"use client"
import { useState } from 'react';

type GameCardProps = {
  value: string | number,
  onCardActivate: (value: string | number) => void
}

const GameCard = ({value, onCardActivate}: GameCardProps) => {
  const [isCardActive, setIsCardActive] = useState(false);

  const handleCardActive =()=>{
    const newIsCardActive = !isCardActive
    setIsCardActive(newIsCardActive)
    console.log(newIsCardActive)
    newIsCardActive ? onCardActivate( value ) : console.log(`Card ${value} is inactive`)
  }

  return (
    <div onClick={() => handleCardActive()} className={`cursor-pointer md:max-w-14 max-w-10 w-full max-h-14 md:max-h-20 relative rounded-tl rounded-tr-none rounded-br rounded-bl-none  box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-4 md:py-[1.5rem] px-[1rem] text-center text-[1.8rem] md:text-[3rem] border-b-[3px] border-solid border-[#00a8e8] border-l-[3px] ${isCardActive ? "bg-[#00435d] text-[#00a8e8]" : "bg-[#ace8ff] text-[#00222e]"}`}>
      <b className="relative leading-[140%]">{value}</b>
    </div>
  )
}

export default GameCard
