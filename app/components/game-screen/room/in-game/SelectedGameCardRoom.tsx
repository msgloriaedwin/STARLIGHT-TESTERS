"use client";
import React from "react";
import { useState, useEffect } from "react";
import GameCardRoom from "./GameCardRoom";

const SelectedGameCardRoom = () => {
	const [userNumbersArray, setUserNumbersArray] = useState<string[]>([]);

	useEffect(() => {
		const userSelectedNumbers = sessionStorage.getItem("userSelected");
		setUserNumbersArray(
			userSelectedNumbers ? JSON.parse(userSelectedNumbers) : [1, 1, 1, 1, 1]
		);
	}, []);

	return (
		<div className="w-full h-full flex justify-center py-[50px]">
			<div
				className={`flex flex-col w-full max-w-sm md:max-w-[600px] justify-center h-fit`}>
				{/* This is the bottom game card selection */}
				<section className="w-full gap-[11px] bg-transparent flex flex-col mt-[59] md:mt-[116px]">
					<h3 className="text-[16px] font-[700] leading-[32px] text-[#000] text-center">
						Your numbers
					</h3>
					<div className="flex w-full flex-col gap-[20px] self-stretch items-center">
						<div className="grid gap-x-[20px] grid-cols-5">
							{userNumbersArray.map((info, index) => {
								return <GameCardRoom key={index} value={info} />;
							})}
						</div>
					</div>
				</section>
			</div>
		</div>
	);
};

export default SelectedGameCardRoom;
