"use client";
const Avatars = dynamic(
  () => import("@/app/components/screen/general/avatars-arch/circles/avatar")
);
const ChatInput = dynamic(
  () => import("@/app/components/screen/general/chatBoxWithEmoji")
);
const AlphabetSelectionLobby = dynamic(
  () =>
    import(
      "@/app/components/screen/room/lobby/gamecardselection/AlphabetSelectionLobby"
    )
);
const GameCardSelectionLobby = dynamic(
  () =>
    import(
      "@/app/components/screen/room/lobby/gamecardselection/GameCardSelectionLobbyNumber"
    )
);
const LetterCardSelection = dynamic(
  () =>
    import(
      "@/app/components/screen/room/lobby/gamecardselection/LetterCardSelection"
    )
);
const JoinGameNavbar = dynamic(
  () => import("@/app/components/shared/navbars/custom-navbars/JoinGameNavbar")
);
const GameRoomContainer = dynamic(
  () => import("@/app/container/GameRoomContainer")
);
const WaitingRoomContainer = dynamic(
  () => import("@/app/container/waitingRoomContainer")
);

import { useRoom } from "@/hooks/useApiQueries";
import { useQueryClient } from "@tanstack/react-query";
import { log } from "console";
import dynamic from "next/dynamic";
import { Centrifuge, SubscriptionState } from "centrifuge";
import { useContext, useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { getCentrifugeToken, getChannelSubscriptionToken, sendMessage } from "@/actions";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useSendMessage } from "@/hooks/useApiMutations";
import { toast } from "@/components/ui/use-toast";
import MessageBubble from "@/app/components/messageBubble/MessageBubble";

const players: {
  username: string;
  avatar: string;
  comment?: string;
  timer?: number;
}[] = [
    {
      username: "You",
      avatar: "/assets/images/avatar-1.png",
      comment: "Girl, stop playing 🤣",
      timer: 0,
    },

    {
      username: "Ebun",
      avatar: "/assets/images/avatar-2.png",
      timer: 45,
      comment: "Girl, stop playing 🤣",
    },

    {
      username: "i3cia",
      avatar: "/assets/images/avatar-3.png",
      timer: 60,
    },

    {
      username: "Farell",
      comment: "Yes, that will be me in a few minutes. Watch this space.",
      avatar: "/assets/images/avatar-5.png",
      timer: 0,
    },

    {
      username: "Farell",
      avatar: "/assets/images/avatar-6.png",
      comment: "Girl, stop playing 🤣",
      timer: 0,
    },
  ];

const GameRoomPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const [gameStatus, setGameStatus] = useState<
    "pending" | "active" | "completed"
  >("pending");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [isCopied, setIsCopied] = useState(false);

  const queryClient = useQueryClient();
  const id = searchParams.roomId;
  const { user, setUser } = useAuthContext();
  const router = useRouter()
  const sendMessageMutation = useSendMessage();
  // const token = user.access_token || null

  //using hook to fetch room data
  const { data: room, isLoading } = useRoom(id);
  console.log(room);

  const [dimension, setDimension] = useState({ height: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const size = players.length > 8 ? 65 : players.length > 9 ? 55 : 60;


  const getToken = async () => {
    const request = await getCentrifugeToken(user.access_token!);
    if (request.status_code === 401) {

    }

    if (request.status_code !== 200) {
      console.error("Error occured");
    }

    console.log(request);
    return request.token;
  };

  // const handleNewMessage = (message: any) => {
  //   const { type, body } = message;

  //   switch (type) {
  //     case "message_added":
  //       queryClient.invalidateQueries({ queryKey: ["room"] });
  //       break;
  //     case "user_joined": {
  //       queryClient.invalidateQueries({ queryKey: ["room"] });
  //       break;
  //     }
  //     case "user_left":
  //       queryClient.invalidateQueries({ queryKey: ["room"] });
  //       break;
  //     default:
  //       console.log("Invalid message type");
  //   }
  // };

  function onPublication(publication: any) {
    const respone = publication;
    handleNewMessage(respone);
  }

  const handleShareGameLink = () => {
    setIsCopied(true);
    const returnToUrl = `https://staging.remote.bingo/join-game?roomId=${searchParams.roomId}`
    if (navigator.clipboard) {
      navigator.clipboard.writeText(returnToUrl);

      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  };

  // Handle sending of message
  const handleNewMessage = (message: any) => {
    const { type, body } = message;

    switch (type) {
      case "message_added":
        queryClient.invalidateQueries({ queryKey: ["room"] });
        break;

      case "user_joined": {
        queryClient.invalidateQueries({ queryKey: ["room"] });
        toast({
          title: "User Joined",
          description: `${body.username} joined the room`
        })
        break;
      }
      case "user_left":
        queryClient.invalidateQueries({ queryKey: ["room"] });
        toast({
          title: "User Left",
          description: `${body.username} left the room`
        })
        break;

      default:
        console.log("Invalid message type");
    }
  };



  // Initialize new centrifugo connection
  useEffect(() => {
    let centrifuge: Centrifuge | null = null;
    const init = async () => {
      centrifuge = new Centrifuge(`${process.env.NEXT_PUBLIC_WEBSOCKET_URL}`, {
        debug: true,
        getToken: getToken,
      });

      centrifuge!.connect();

      const roomChannel = `${replaceSpacesWithUnderscores(
        room?.data?.name
      )}:${user.id}`;

      async function getPersonalChannelSubscriptionToken() {
        return await getChannelSubscriptionToken({
          channel: roomChannel,
          token: user.access_token!,
        });
      }

      const subscription = centrifuge!.newSubscription(roomChannel, {
        getToken: getPersonalChannelSubscriptionToken,
      });

      subscription.on("state", (ctx) => {
        console.log(ctx.newState);
        if (ctx.newState == SubscriptionState.Subscribed) {
          setIsSubscribed(true);
        } else {
          setIsSubscribed(false);
        }
      });

      centrifuge!.on("connecting", (ctx) => {
        console.log(ctx.code);
        console.log(ctx.reason);
      });

      centrifuge!.on("connected", (ctx) => {
        console.log("Web socket connected", ctx.transport);
      });

      subscription.on("publication", (ctx) => {
        console.log("new publication");
        onPublication(ctx.data);
      });

      subscription.subscribe();
    };

    init();

    return () => {
      if (centrifuge) {
        console.log("Centrifuge disconnected");
        centrifuge?.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    setDimension({
      height: containerRef.current?.offsetHeight || 0,
      width: containerRef.current?.offsetWidth || 0,
    });
  }, []);

  const handleSendMessage = async (message: string) => {
    try {
      await sendMessageMutation.mutateAsync({
        message: message,
        token: user.access_token!,
        roomId: id
      });
      setMessage("");
    } catch (error) {
      console.error("Failed to send message:", error);
      //   setUser(emptyContext);
      //   router.push("/");
    }
  };

  const renderContent = () => {
    switch (gameStatus) {
      case "pending":
        return null;
      case "active":
        return <GameRoomContainer />;
      case "completed":
        return <p>Game Completed</p>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen">
      <JoinGameNavbar isCopied={isCopied} handleShareGameLink={handleShareGameLink} showCup={false} />
      <div
        className={`container flex flex-col relative item-center min-h-[calc(100vh-160px)] overflow-hidden pb-10`}
        style={{ paddingTop: `30px` }}
      >
        <div className="absolute top-0 left-0 w-full h-[calc(90vh-80px)]"
          ref={containerRef}
        >
          {isLoading ? (
            <p>Almost in the room</p>
          ) : (
            <div>
              <Avatars
                dimension={dimension}
                avatars={room?.data?.participants || []}
                size={size}
              />
              
            </div>
          )}
        </div>
        <section className="overflow-y-auto">{renderContent()}</section>
        <div className="fixed w-full bottom-6 -translate-x-[50%] left-[50%]">
          <ChatInput
            sendMessage={(data: any) => {
              //   setMessage(data);
              handleSendMessage(message)
            }}
            message={message}
            setMessage={setMessage}
            handleSelectGif={(data: any) => {
              //   setGif(data);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GameRoomPage;


export function replaceSpacesWithUnderscores(input: string) {
  return input?.replace(/ /g, '_');
}