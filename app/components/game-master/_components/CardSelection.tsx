import { useState } from "react";
import GameCardLobby from "../../game-card/GameCardLobby";
import { OnCardValueProps } from "@/lib/customPropTypes";

export default function CardSelection() {
  const [playerCards, setPlayerCards] = useState<string[]>([
    "11",
    "14",
    "18",
    "26",
    "29",
  ]);

  const onCardValue = ({
    numberValue,
    activeState,
    numberIndex,
  }: OnCardValueProps) => {};
  return (
    <div className="flex gap-x-[20px] items-center justify-center">
      {playerCards.map((info, index) => (
        <GameCardLobby
          key={index}
          hiddenNumArrIndex={index}
          numberIndex={index}
          numberValue={info}
          onCardActivate={onCardValue}
        />
      ))}
    </div>
  );
}
