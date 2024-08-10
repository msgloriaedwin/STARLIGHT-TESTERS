"use client";
import JoinGameNavbar from "@/app/components/navbars/custom-navbars/JoinGameNavbar";
import GameRoomContainer from "@/app/container/GameRoomContainer";
const page = () => {
  return (
    <>
      <JoinGameNavbar showCup={false} />
      <section className="pt-6">
        <GameRoomContainer />
      </section>
    </>
  );
};

export default page;
