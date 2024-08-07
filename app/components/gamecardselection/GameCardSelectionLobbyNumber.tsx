"use client";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import GameCardLobby from "../game-card/GameCardLobby";
import { initialNumbers } from "@/data/data";
import { OnCardValueProps } from "@/lib/customPropTypes";

const GameCardSelectionLobby = () => {
  const [numberArray, setNumberArray] = useState<(number | string)[]>([]);
  const [hiddenNumbersArray, setHiddenNumbersArray] = useState<
    Array<number | string>
  >([]);
  const [revealedIndices, setRevealedIndices] = useState<number[]>([]);

  useEffect(() => {
    const initialSelected = sessionStorage.getItem("userSelected");
    const storedNumbers = sessionStorage.getItem("storedNumber");
    setNumberArray(storedNumbers ? JSON.parse(storedNumbers) : initialNumbers);
    setRevealedIndices(initialSelected ? JSON.parse(initialSelected) : []);
    setHiddenNumbersArray(
      initialSelected ? JSON.parse(initialSelected) : ["", "", "", "", ""]
    );
  }, []);

  useEffect(() => {
    if (revealedIndices.length === 5) {
      sessionStorage.setItem(
        "userSelected",
        JSON.stringify(hiddenNumbersArray)
      );
      sessionStorage.setItem("storedNumber", JSON.stringify(numberArray));
    }
  }, [revealedIndices, hiddenNumbersArray, numberArray]);

  const revealNumber = (index: number, info: number | string) => {
    if (numberArray[index] === " ") {
      return;
    }
    if (revealedIndices.length === 5) {
      return;
    }
    setRevealedIndices((prev) => [...prev, +info]);

    setHiddenNumbersArray((prev) => {
      const foundHidden = prev.findIndex((item) => item === "");
      const newArray = prev.map((item, idx) => {
        if (idx === foundHidden) {
          return info;
        }
        return item;
      });
      return newArray;
    });
  };

  const onCardValue = ({
    numberValue,
    hiddenNumArrIndex,
  }: OnCardValueProps) => {
    setHiddenNumbersArray((previousHiddenNumber) => {
      const newHidddenNumbers = [...previousHiddenNumber];
      newHidddenNumbers.splice(hiddenNumArrIndex, 1, "");
      return newHidddenNumbers;
    });
    setRevealedIndices((prev) => prev.filter((item) => item !== numberValue));
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className={`flex flex-col w-full max-w-sm md:max-w-[600px] h-fit`}>
        <section className="flex flex-col items-center w-full h-fit p-0 md:p-[16px] gap-[24px] md:gap-[8px] rounded-[10px] bg-transparent]">
          <h2 className="text-[16px] md:text-[24px] font-[700] leading-[28.8px] text-[#00658B]">
            Select your numbers
          </h2>
          <div className="w-full h-fit pt-[11px] md:pt-[40px] pb-[20px] px-[16px] items-center grid grid-rows-3 grid-cols-12 gap-[12px]">
            {numberArray.map((info, index) => {
              const columnIndex = (index % 12) + 1;
              const isRevealed = revealedIndices.includes(+info);
              return (
                <button
                  type="button"
                  onClick={() => revealNumber(index, info)}
                  key={index}
                  className={`w-[27.7px] md:w-[40px] h-[41.5px] md:h-[60px] ${
                    columnIndex % 2 === 0 ? "relative top-[-30px]" : ""
                  } h-fit flex justify-center items-center ${
                    isRevealed
                      ? "border-l-[3px] border-b-[3px] bg-[#D9D9D9] border-[#A8AEB6] rounded-tl-[4px] rounded-br-[4px] shadow[-4px_4px_2px_0px_rgba(180,_180,_180,_0.24)]"
                      : ""
                  }`}
                >
                  <p className="text-[#404040] cursor-pointer text-[16px] md:text-[24px] font-[700] leading-[33.6px] text-center">
                    {info as number}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        <section className="w-full gap-[11px] bg-transparent flex flex-col">
          <h3 className="text-[16px] font-[700] leading-[32px] text-[#000] text-center">
            Your numbers
          </h3>
          <div className="flex w-full flex-col self-stretch items-center">
            <div className="grid gap-2 md:gap-x-[20px] grid-cols-5">
              {hiddenNumbersArray.map((info, index) => {
                const numberIndex = index;
                const numberValue = info;
                return (
                  <GameCardLobby
                    key={index}
                    hiddenNumArrIndex={index}
                    numberIndex={numberIndex}
                    numberValue={numberValue}
                    onCardActivate={onCardValue}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GameCardSelectionLobby;
