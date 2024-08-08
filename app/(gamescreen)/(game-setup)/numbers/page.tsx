import WaitingRoomContainerNumbers from "@/app/container/waitingRoomContainerNumbers"
import JoinGameNavbar from "@/app/components/navbars/custom-navbars/JoinGameNavbar"

export default function WaitingRoomNumbers() {
	return (
		<div className="h-[100vh] md:min-h-[100vh] md:h-auto">
			<JoinGameNavbar showCup={false} />
			<main className="my-1 md:my-4 md:mx-4">
				<WaitingRoomContainerNumbers />
			</main>
		</div>
	)
}
