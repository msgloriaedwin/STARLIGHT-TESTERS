"use client";

import dynamic from "next/dynamic";

const JoinGameNavbar = dynamic(
  () => import("@/app/components/shared/navbars/custom-navbars/JoinGameNavbar"),
  {
    ssr: false,
  }
);
const GameRoomContainer = dynamic(
  () => import("@/app/container/GameRoomContainer"),
  {
    ssr: false,
  }
);

const page = () => {
  return (
    <>
      <JoinGameNavbar isCopied showCup={false} />
      <section className="pt-6">
        <GameRoomContainer />
      </section>
    </>
  );
};

export default page;
