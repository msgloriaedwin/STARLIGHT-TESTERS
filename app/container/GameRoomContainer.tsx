"use client";

import { useState, useEffect, useRef } from "react";
import ChatInput from "@/app/components/game-screen/general/chatBoxWithEmoji";
import Avatars from "../components/game-screen/general/avatars-arch/circles/avatar";
import GamePlay from "../components/game-screen/room/in-game/game-master/GamePlay";

const players = [
	{
		username: "You",
		avatar: "/assets/images/avatar-1.png",
	},

	{
		username: "Ebun",
		avatar: "/assets/images/avatar-2.png",
	},

	{
		username: "i3cia",
		avatar: "/assets/images/avatar-3.png",
	},

	{
		username: "Farell",
		avatar: "/assets/images/avatar-5.png",
	},

	{
		username: "Farell",
		avatar: "/assets/images/avatar-6.png",
	},
];

export default function GameRoomContainer() {
	const [dimension, setDimension] = useState({ height: 0, width: 0 });

	const containerRef = useRef<HTMLElement>(null);
	const size = players.length > 8 ? 100 : players.length > 9 ? 80 : 150;

	useEffect(() => {
		setDimension({
			height: containerRef.current?.offsetHeight || 0,
			width: containerRef.current?.offsetWidth || 0,
		});
	}, []);

	return (
		<section
			ref={containerRef}
			className="container w-full relative overflow-x-hidden"
			style={{ paddingTop: `${size}px` }}>
			<div
				className={` min-h-[100%] absolute top-0 left-0 width-[100%] px-5`}></div>
			<Avatars dimension={dimension} avatars={players} size={size} />
			<GamePlay />
			<ChatInput
				sendMessage={(data: any) => {
					//   setMessage(data);
				}}
				handleSelectGif={(data: any) => {
					//   setGif(data);
				}}
			/>
		</section>
	);
}
