import { Bangers } from "next/font/google";
import { DM_Sans } from "next/font/google";

export const bangers = Bangers({
    weight: ["400",],
    subsets: ['latin'],
})

export const dmSans = DM_Sans({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900", "1000"],
    subsets: ['latin'],
})