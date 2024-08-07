"use client";

import React from "react";
import Lottie from "react-lottie";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import showingCard from "@/public/showing-card.json";
import countDown from "@/public/countdown-display.json";
import gameStart from "@/public/game-start.json";
import winner from "@/public/winner.json";

const animations = [
  { name: "Winner", data: winner },
  { name: "Card display", data: showingCard },
  { name: "Game start", data: gameStart },
  { name: "Countdown", data: countDown },
];

export default function AnimatedMaster() {
  const getLottieOptions = (animationData: any) => ({
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });

  return (
    <div>
      <Tabs defaultValue="Countdown" className="w-[400px]">
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
