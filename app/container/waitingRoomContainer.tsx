"use client";

import { useState, useEffect, useRef } from "react";
import ChatInput from "@/app/components/screen/general/chatBoxWithEmoji";
import Avatars from "../components/screen/general/avatars-arch/circles/avatar";
import GameCardSelectionLobby from "../components/screen/room/lobby/gamecardselection/GameCardSelectionLobbyNumber";

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

export default function WaitingRoomContainer() {
	const [dimension, setDimension] = useState({ height: 0, width: 0 });
	const containerRef = useRef<HTMLDivElement>(null);
	const size = players.length > 8 ? 100 : players.length > 9 ? 80 : 150;

	useEffect(() => {
		setDimension({
			height: containerRef.current?.offsetHeight || 0,
			width: containerRef.current?.offsetWidth || 0,
		});
	}, []);

	return (
		<div
			ref={containerRef}
			className={`container relative overflow-x-hidden min-h-[85vh]`}
			style={{ paddingTop: `${size}px` }}>
			<Avatars dimension={dimension} avatars={players} size={size} />
			<GameCardSelectionLobby />
			<ChatInput
				sendMessage={(data: any) => {
					//   setMessage(data);
				}}
				handleSelectGif={(data: any) => {
					//   setGif(data);
				}}
			/>
		</div>
	);
}
