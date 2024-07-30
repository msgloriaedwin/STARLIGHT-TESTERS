import React from "react";
import Image from "next/image";
import GameMaster from "../../../public/GameMaster.svg";
import GamesMasterHalf from "../../../public/GamesMasterHalf.svg";
import GamesMasterLeft from "../../../public/GamesMasterLeftRaised.svg";
import GamesMasterBingo from "../../../public/GamesMasterBingo.svg";

interface GameMasterProps {
  src: string;
  alt: string;
}

export const gameMaster = () => {
  return <Image src={GameMaster} alt="Game Master" />;
};

export const GameMasterHalf = () => {
  return <Image src={GamesMasterHalf} alt="Game Master with half his body" />;
};

export const GameMasterLeft = () => {
  return (
    <Image src={GamesMasterLeft} alt="Game Master with his left arm raised" />
  );
};

export const GameMasterBingo = () => {
  return <Image src={GamesMasterBingo} alt="Game Master with Bingo" />;
};

export default gameMaster;
