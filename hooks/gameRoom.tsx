"use cient";

import { useRoom } from "./useApiQueries";
import { useJoinRoom, useLeaveRoom, useSendMessage } from "./useApiMutations";
import { getCentrifugeToken, getChannelSubscriptionToken } from "@/actions";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Centrifuge, SubscriptionState } from "centrifuge";

const GameRoom = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const roomId = searchParams.roomId;
  const { user, setUser } = useAuthContext();
  const router = useRouter();
  const [text, setText] = useState("");

  const { data: roomsData } = useRoom(user.access_token!, roomId);
  const joinRoomMutation = useJoinRoom();
  const leaveRoomMutation = useLeaveRoom();
  const sendMessageMutation = useSendMessage();

  async function handleJoinRoom() {
    try {
      await joinRoomMutation.mutateAsync({ token: user.access_token!, roomId });
    } catch (error) {
      console.error("Failed to join room:", error);
      //   setUser(emptyContext);
      router.push("/auth/login");
    }
  }

  async function handleLeaveRoom() {
    try {
      await leaveRoomMutation.mutateAsync({ token: user.access_token!, roomId });
    } catch (error) {
      console.error("Failed to leave room:", error);
    //   setUser(emptyContext);
      router.push("/");
    }
  }

  const handleSendMessage = async () => {
    try {
      await sendMessageMutation.mutateAsync({
        message: text,
        token: user.access_token!,
        roomId,
      });
      setText("");
    } catch (error) {
      console.error("Failed to send message:", error);
    //   setUser(emptyContext);
    //   router.push("/");
    }
  };

  const getToken = async() => {
    const request = await getCentrifugeToken(user.access_token!);
    if(request.status_code === 401){
        router.push('/')
    }

    if(request.status_code !== 200){
        console.error("Error occured")
    }

    console.log(request);
    return request.token;
  }

  useEffect(() => {
    let centrifuge: Centrifuge | null = null;
    const init = async () => {
      centrifuge = new Centrifuge(`${process.env.NEXT_PUBLIC_WEBSOCKET_URL}`, {
        debug: true,
        getToken: getToken,
      });
  
      // ... rest of the Centrifuge initialization code
    };

    init();

    centrifuge!.connect();

    const channel = `${roomsData.data.name}`
    return () => {
      if (centrifuge) {
        console.log("Centrifuge disconnected");
        centrifuge?.disconnect();
      }
    };
  }, []);

  return <div></div>;
};

export default GameRoom;
