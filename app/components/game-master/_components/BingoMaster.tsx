"use client";

import React, { useEffect, useMemo, useState } from "react";
import CallBubble from "./CallBubble";
import CallMaster from "./CallMaster";
import CallingCard from "./CallingCard";

const BingoMaster = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
        <CallMaster />
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
