"use client";

import { useState, useEffect, useRef } from "react";
import ChatInput from "@/app/components/chatBoxWithEmoji";
import GameCardSelection from "@/app/components/gamecardselection/gamecardselection";
import Avatars from "@/app/components/avatars-arch/circles/avatar";
import LetterCardSelection from "@/app/components/gamecardselection/LetterCardSelection";

const players = [
  {
    username: "You",
    avatar: "/assets/images/avatar-1.png",
  },

  {
    username: "Ebun",
    avatar: "/assets/images/avatar-2.png",
  },

  {
    username: "i3cia",
    avatar: "/assets/images/avatar-3.png",
  },

  {
    username: "Farell",
    avatar: "/assets/images/avatar-5.png",
  },

  {
    username: "Farell",
    avatar: "/assets/images/avatar-6.png",
  },
];

export default function AlphabetLayoutContainer() {
  const [dimension, setDimension] = useState({ height: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const size = players.length > 8 ? 100 : players.length > 9 ? 80 : 150;

  useEffect(() => {
    setDimension({
      height: containerRef.current?.offsetHeight || 0,
      width: containerRef.current?.offsetWidth || 0,
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="container relative px-5 overflow-x-hidden"
      style={{ paddingTop: `${size}px` }}
    >
      <Avatars dimension={dimension} avatars={players} size={size} />
      <LetterCardSelection />
      <ChatInput
        sendMessage={(data: any) => {
          //   setMessage(data);
        }}
        handleSelectGif={(data: any) => {
          //   setGif(data);
        }}
      />
    </div>
  );
}
