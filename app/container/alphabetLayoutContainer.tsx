"use client";

import { useState, useEffect, useRef } from "react";
import LetterCardSelection from "@/app/components/screen/room/lobby/gamecardselection/LetterCardSelection";
import Avatars from "@/app/components/screen/general/avatars-arch/circles/avatar";
import ChatInput from "@/app/components/screen/general/chatBoxWithEmoji";

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

export default function AlphabetLayoutContainer() {
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
			className="container relative px-5 overflow-x-hidden"
			style={{ paddingTop: `calc(${size}px - 60px)` }}>
			<div className="hidden md:block">
				<Avatars dimension={dimension} avatars={players} size={size} />
			</div>
			<LetterCardSelection />
			<ChatInput
				sendMessage={(data: any) => {
					//   setMessage(data);
				}}
				setMessage={() => {}}
				handleSelectGif={(data: any) => {
					//   setGif(data);
				}}
			/>
		</div>
	);
}
