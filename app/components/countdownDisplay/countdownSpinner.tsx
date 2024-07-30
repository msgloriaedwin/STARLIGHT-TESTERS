"use client";

import React, { useState, useEffect } from "react";

const SpinningCountdownLoader: React.FC = () => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 3));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="relative w-48 h-48">
        <svg className="w-full h-full animate-spin" viewBox="0 0 100 100">
          {/* Outer circle segments */}
          <path
            d="M50 5 A45 45 0 0 1 95 50 L85 50 A35 35 0 0 0 50 15 Z"
            fill="#1E3C57"
          />
          <path
            d="M95 50 A45 45 0 0 1 50 95 L50 85 A35 35 0 0 0 85 50 Z"
            fill="#9DD6FF"
          />
          <path
            d="M50 95 A45 45 0 0 1 5 50 L15 50 A35 35 0 0 0 50 85 Z"
            fill="#1E3C57"
          />
          <path
            d="M5 50 A45 45 0 0 1 50 5 L50 15 A35 35 0 0 0 15 50 Z"
            fill="#9DD6FF"
          />

          <circle cx="50" cy="50" r="30" fill="#1E3C57" />
        </svg>
        {/* Inner circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#1E3C57] rounded-full flex items-center justify-center">
          <span className="text-5xl font-bold text-white">{count}</span>
        </div>
      </div>
      <p className="mt-8 text-3xl font-semibold text-[#1E3C57]">
        Here we go...
      </p>
    </div>
  );
};

export default SpinningCountdownLoader;
