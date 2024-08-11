"use client";
import React, { useState } from "react";
import Image from "next/image";
import TickCircle from "@/public/tick-circle.svg";
import AddCardIcon from "@/public/add-card.svg"

type OnCardActivateProps = {
  value: string;
  activeState: boolean;
};

type LetterCardProps = {
  value?: string;
  onCardActivate?: ({ value, activeState }: OnCardActivateProps) => void;
};

const LetterCard = ({ value, onCardActivate }: LetterCardProps) => {
  const [isCardActive, setIsCardActive] = useState(false);

  const handleCardActive = () => {
    const activeState = true;
    setIsCardActive(true);
    if (onCardActivate && value) {
      onCardActivate({ value, activeState });
    }
  };

  return (
    <>
      {value ? (
        <div className={`font-["dm_sans"] flex`}>
          <div className="relative">
            <div
              onClick={() => !isCardActive && handleCardActive()}
              className={`z-1 relative cursor-pointer md:min-w-16 max-w-10 w-full max-h-14 md:max-h-20 rounded-tl rounded-tr-none rounded-br bg-[#AEDCB0] rounded-bl-none  box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-4 md:py-[1.5rem] px-[1rem] text-center text-[1.8rem] md:text-[2.7rem] border-b-[3px] border-solid border-primary-blue border-l-[3px] text-primary-900 ${
                isCardActive ? "bg-[#AEDCB0]" : "bg-primary-200 "
              }`}
            >
              <b className="relative leading-[140%]">{value}</b>
            </div>
            {isCardActive ? (
              <Image
                className="z-[2] absolute top-[-0.6rem] right-[-0.6rem] w-6 md:w-7"
                src={TickCircle}
                alt="green circle tick image"
                width="30"
                height="30"
              />
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        <div
          className={`cursor-pointer md:max-w-16 max-w-10 w-full max-h-14 md:max-h-20 relative rounded-tl rounded-tr-none rounded-br rounded-bl-none box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-[1.5rem] md:py-[1.3rem] px-[0.4rem] md:px-[0.7rem] text-center text-[1.8rem] md:text-[3rem] border-b-[3px] border-solid border-primary-blue border-l-[3px] bg-primary-200 text-transparent`}
        >
          <Image
            src={AddCardIcon}
            alt="Add card Button"
            width={60}
            height={60}
          />
        </div>
      )}
    </>
  );
};

export default LetterCard;
