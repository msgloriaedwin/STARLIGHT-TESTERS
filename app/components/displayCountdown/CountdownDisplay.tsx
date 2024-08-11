"use client";

import React, { useState, useEffect } from "react";
import GameMaster from '../game-screen/room/in-game/gameMaster/gameMaster';

const CountdownDisplayLoader: React.FC = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 3));
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="flex">
        <GameMaster />
        <div className="-ml-16">
          <div className="flex flex-col w-full max-w-[240px] p-2 border-gray-200  bg-primary-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
              Bingo card displaying in
              <span className="bg-[#3D8C40] ml-2 rounded-full w-11 px-4 py-2">
                {count}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountdownDisplayLoader;
