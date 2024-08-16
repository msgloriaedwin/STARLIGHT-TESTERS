"use client";

import { useState, useEffect, useRef } from "react";
import ChatInput from "@/app/components/screen/general/chatBoxWithEmoji";
import Avatars from "../components/screen/general/avatars-arch/circles/avatar";
import GameCardSelectionLobby from "../components/screen/room/lobby/gamecardselection/GameCardSelectionLobbyNumber";

const players = [
	{
		username: "You",
		avatar: "/assets/images/avatar-1.png",
	},

	{
		username: "Ebun",
		avatar: "/assets/images/avatar-2.png",
	},

	// {
	// 	username: "i3cia",
	// 	avatar: "/assets/images/avatar-3.png",
	// },

	// {
	// 	username: "Farell",
	// 	avatar: "/assets/images/avatar-5.png",
	// },

	// {
	// 	username: "Farell",
	// 	avatar: "/assets/images/avatar-6.png",
	// },
	// {
	// 	username: "Farell",
	// 	avatar: "/assets/images/avatar-6.png",
	// },
	// {
	// 	username: "Farell",
	// 	avatar: "/assets/images/avatar-6.png",
	// },
	// {
	// 	username: "Farell",
	// 	avatar: "/assets/images/avatar-6.png",
	// },
	// {
	// 	username: "Farell",
	// 	avatar: "/assets/images/avatar-6.png",
	// },
];

export default function WaitingRoomContainerNumbers() {
	const [dimension, setDimension] = useState({ height: 0, width: 0 });
	const [mediumScreen, setMediumScreen] = useState<boolean>(true);
	const containerRef = useRef<HTMLDivElement>(null);
	const size = players.length > 8 ? 100 : players.length > 9 ? 80 : 150;

	useEffect(() => {
		setDimension({
			height: containerRef.current?.offsetHeight || 0,
			width: containerRef.current?.offsetWidth || 0,
		});
		setMediumScreen(window.innerWidth <= 600);
	}, []);

	return (
		<div className="box-border h-[80vh] md:h-auto">
			<div

				className={`container box-border relative px-5 overflow-x-hidden h-full`}
				style={{ paddingTop: mediumScreen ? "40px" : `${size}px` }}>
				<div ref={containerRef} className="absolute top-0 left-0 hidden md:flex w-full h-[85vh]">
					<Avatars dimension={dimension} avatars={players} size={size} />
				</div>
				<div className="flex flex-col w-full items-center justify-center lg:w-auto h-[100%] md:h-full">
					<div className=" md:max-w-[70%] lg:w-full">
						<GameCardSelectionLobby />
					</div>
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
}
