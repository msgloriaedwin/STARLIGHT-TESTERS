import WaitingRoomContainer from "@/app/container/waitingRoomContainer";
import JoinGameNavbar from "@/app/components/shared/navbars/custom-navbars/JoinGameNavbar";

export default function WaitingRoom() {
  return (
    <>
      <JoinGameNavbar showCup={false} />
      <main className="md:px-3">
        <WaitingRoomContainer />
      </main>
    </>
  );
}
