import WaitingRoomContainer from "@/app/container/waitingRoomContainer";
import WaitingRoomLayout from "@/app/components/waitingRoomLayout/waitingRoomLayout";
import JoinGameNavbar from "@/app/components/navbars/custom-navbars/JoinGameNavbar";

export default function WaitingRoom() {
  return (
    <>
      {/* <WaitingRoomLayout /> */}
      <JoinGameNavbar showCup={false} />
      <main className="my-4 md:mx-4">
        <WaitingRoomContainer />
      </main>
    </>
  );
}
