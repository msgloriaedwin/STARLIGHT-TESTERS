import WaitingRoomContainer from "@/app/container/waitingRoomContainer";
import JoinGameNavbar from "@/app/components/navbars/custom-navbars/JoinGameNavbar";

export default function WaitingRoom() {
  return (
    <>
      <JoinGameNavbar showCup={false} />
      <main className="my-4 md:mx-4">
        <WaitingRoomContainer />
      </main>
    </>
  );
}
