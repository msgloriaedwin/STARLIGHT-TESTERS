"use client";

import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import showingCard from "@/public/showing-card.json";
import countDown from "@/public/countdown-display.json";
import gameStart from "@/public/game-start.json";
import winner from "@/public/winner.json";
import { useBackgroundSound } from "@/utils/game-sounds/useBackgroundMusic";
const animations = [
  { name: "Winner", data: winner },
  { name: "Card display", data: showingCard },
  { name: "Game start", data: gameStart },
  { name: "Countdown", data: countDown },
];

export default function AnimatedMaster() {
  const [activeTab, setActiveTab] = useState("Countdown");
  const { playSound, stopSound } = useBackgroundSound({
    soundSrc: "/assets/audios/win-game.mp3",
    enabled: true,
  });

  useEffect(() => {
    if (activeTab === "Countdown") {
      playSound();
    } else {
      stopSound();
    }
  }, [activeTab, playSound, stopSound]);

  const getLottieOptions = (animationData: any) => ({
    loop: true,
    autoplay: true,
    animationData: winner,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });
  return (
    <div>
      <Tabs
        defaultValue="Countdown"
        className="w-[400px]"
        onValueChange={(value) => setActiveTab(value)}
      >
        <TabsList>
          {animations.map((anim) => (
            <TabsTrigger key={anim.name} value={anim.name}>
              {anim.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {animations.map((anim) => (
          <TabsContent key={anim.name} value={anim.name}>
            <Lottie options={getLottieOptions(anim.data)} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
