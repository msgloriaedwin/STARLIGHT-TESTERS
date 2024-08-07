import WaitingRoomContainer from '@/app/container/waitingRoomContainer'
import WaitingRoomLayout from '@/app/components/waitingRoomLayout/waitingRoomLayout'

export default function WaitingRoom() {
  return (
    <>
      <WaitingRoomLayout />
      <main>
        <WaitingRoomContainer />
      </main>
    </>
  )
}

