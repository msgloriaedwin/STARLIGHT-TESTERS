"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { GameCardProps } from "@/lib/customPropTypes"





const GameCardLobby = ({ numberValue, onCardActivate, numberIndex, hiddenNumArrIndex }: GameCardProps) => {
    const [cardValue, setCardValue] = useState(numberValue)

    useEffect(() => {
        setCardValue(numberValue)
    }, [numberValue])

	const handleCardValue = () => {
		const activeState = true
		// setCardValue("")
		if (onCardActivate && numberValue) {
			onCardActivate({ numberValue, numberIndex, hiddenNumArrIndex ,activeState })
		}
	}

	return (
		<>
			{cardValue ? (
				<div className={`font-["dm_sans"] flex`}>
					<div className="relative">
						<div
							onClick={() => cardValue && handleCardValue()}
							className={`z-1 relative cursor-pointer md:min-w-16 max-w-10 w-full max-h-14 md:max-h-20 rounded-tl rounded-tr-none rounded-br rounded-bl-none  box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-4 md:py-[1.5rem] px-[1rem] text-center text-[1.8rem] md:text-[2.7rem] border-b-[3px] border-solid border-primary-blue border-l-[3px] text-primary-900 bg-primary-200`}>
							<b className="relative leading-[140%]">{cardValue}</b>
						</div>
					</div>
				</div>
			) : (
				<div
					className={`cursor-pointer md:max-w-16 max-w-10 w-full max-h-14 md:max-h-20 relative rounded-tl rounded-tr-none rounded-br rounded-bl-none  box-border overflow-hidden shrink-0 flex flex-col items-center justify-center py-[1.5rem] md:py-[1.3rem] px-[0.4rem] md:px-[0.7rem] text-center text-[1.8rem] md:text-[3rem] border-b-[3px] border-solid border-primary-blue border-l-[3px] bg-primary-200 text-transaprent`}>
					<Image
						src="./add-card.svg"
						alt="Add card Button"
						width={60}
						height={60}
					/>
				</div>
			)}
		</>
	)
}

export default GameCardLobby
