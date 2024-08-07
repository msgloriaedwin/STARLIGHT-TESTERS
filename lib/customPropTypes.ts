export interface OnCardValueProps {
	numberValue: string | number
	activeState: boolean
	numberIndex: number
	hiddenNumArrIndex: number
}

export interface GameCardProps {
	hiddenNumArrIndex: number
	numberValue?: string | number
	numberIndex: number
	onCardActivate?: ({
		numberValue,
		activeState,
		numberIndex,
	}: OnCardValueProps) => void
}

export interface HiddenNumberObjectProps {
	numberValue: number | string;
	numberIndex: number;
}