"use client";
import Avatars from "@/app/components/screen/general/avatars-arch/circles/avatar";
import ChatInput from "@/app/components/screen/general/chatBoxWithEmoji";
import AlphabetSelectionLobby from "@/app/components/screen/room/lobby/gamecardselection/AlphabetSelectionLobby";
import GameCardSelectionLobby from "@/app/components/screen/room/lobby/gamecardselection/GameCardSelectionLobbyNumber";
import LetterCardSelection from "@/app/components/screen/room/lobby/gamecardselection/LetterCardSelection";
import JoinGameNavbar from "@/app/components/shared/navbars/custom-navbars/JoinGameNavbar";
import GameRoomContainer from "@/app/container/GameRoomContainer";
import WaitingRoomContainer from "@/app/container/waitingRoomContainer";
import { useRoom } from "@/hooks/useApiQueries";
import { useQueryClient } from "@tanstack/react-query";
import { log } from "console";
import { useContext, useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";


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



const GameRoomPage = ({ searchParams }: { searchParams: { [key: string]: string } }) => {
    const [gameStatus, setGameStatus] = useState<'pending' | 'active' | 'completed'>('pending');
    const queryClient = useQueryClient();
    const id = searchParams.roomId
    // const token = user.access_token || null

    //using hook to fetch room data
    const { data: room, isLoading } = useRoom(id)
    console.log(room);

    const [dimension, setDimension] = useState({ height: 0, width: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const size = players.length > 8 ? 65 : players.length > 9 ? 55 : 60;

    useEffect(() => {

    }, [])

    useEffect(() => {
        setDimension({
            height: containerRef.current?.offsetHeight || 0,
            width: containerRef.current?.offsetWidth || 0,
        });
    }, []);



    const renderContent = () => {
        switch (gameStatus) {
            case 'pending':
                return null
            case 'active':
                return <GameRoomContainer />;
            case 'completed':
                return <p>Game Completed</p>;
            default:
                return null;
        }
    };



    return (
        <div className="w-full min-h-screen">
            <JoinGameNavbar showCup={false} />
            <div
                ref={containerRef}
                className={`flex flex-col item-center min-h-[calc(100vh-80px)]`}
                style={{ paddingTop: `30px` }}>
                <div className="relative w-screen !max-h-[calc(80vh-80px)]">
                    {isLoading ? <p>Almost in the room</p> : <Avatars dimension={dimension} avatars={room?.data?.participants || []} size={size} />}
                </div>
                <section className="overflow-y-auto">
                    {renderContent()}
                </section>
                <div>
                    <ChatInput
                        sendMessage={(data: any) => {
                            //   setMessage(data);
                        }}
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
