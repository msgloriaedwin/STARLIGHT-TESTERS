import WaitingRoomContainerNumbers from "@/app/container/waitingRoomContainerNumbers"
import Navbar from "@/app/components/shared/navbars/Navbar"

export default function WaitingRoomNumbers() {
	return (
		<div className="h-[100vh] md:min-h-[100vh] md:h-auto">
			<Navbar />
			<main className="my-1 md:my-4 md:mx-4">
				<WaitingRoomContainerNumbers />
			</main>
		</div>
	)
}
