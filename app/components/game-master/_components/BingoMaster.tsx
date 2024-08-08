"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CallBubble from "./CallBubble";
import CallMaster from "./CallMaster";
import "./index.css";
import CallingCard from "./CallingCard";

const BingoMaster = () => {
  gsap.registerPlugin(useGSAP);
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useGSAP(
    () => {
      const calledCardTl = gsap.timeline({ paused: true });

      calledCardTl
        .to(".master .arm-down", { autoAlpha: 0, duration: 0.5 })
        .to(".master .arm-up", { autoAlpha: 1, duration: 1 }, "<")
        .to(
          ".master .mouth-full",
          { autoAlpha: 0, duration: 1, ease: "back.in" },
          "<"
        )
        .to(".master .mouth-wide", { autoAlpha: 1, ease: "back.out" }, "-=0.5");

      const waitingTl = gsap.timeline({ paused: true });

      waitingTl
        .to(".waiting-master .second-leg", {
          autoAlpha: 0,
        })
        .to(
          ".waiting-master .right-leg",
          { autoAlpha: 1, duration: 1 },
          "-=0.5"
        )
        .to(".waiting-master .first-leg", { autoAlpha: 0 }, "<")
        .to(".waiting-master .left-leg", { autoAlpha: 1, duration: 1 }, "<")
        .to(
          ".waiting-master .mouth-full",
          { autoAlpha: 1, duration: 1 },
          "-=0.5"
        );

      count <= 0 ? waitingTl.play() : calledCardTl.play();
    },
    { dependencies: [count] }
  );

  const cardMaster = useMemo(() => {
    return <CallingCard />;
  }, []);

  const callMaster = useMemo(() => {
    return (
      <div className="game-master-call relative inline-block">
        <div className="absolute left-[42%] -top-[20%]">
          <CallBubble className="h-[100px] w-[800px]" />
          <p className="absolute -left-[34%] top-[20%] w-full text-center font-bold text-xs">
            Bingo Card displays in{" "}
            <span className="bg-green-500 rounded-full text-white px-2 py-1">
              {count}
            </span>
          </p>
        </div>
        <CallMaster className="h-[174px] w-[197px]" />
      </div>
    );
  }, [count]);

  return (
    <div className="relative h-[300px] max-w-[300px] w-full mx-auto flex justify-center items-center">
      {count <= 0 ? cardMaster : callMaster}
    </div>
  );
};

export default BingoMaster;
