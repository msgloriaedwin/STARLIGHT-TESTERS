"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"
import { cn } from "@/lib/utils"

const ToggleControlSettings = React.forwardRef<
	React.ElementRef<typeof SwitchPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
		thumbClassName?: string
	}
>(({ className, thumbClassName, ...props }, ref) => (
	<SwitchPrimitives.Root
		className={cn(
			"peer inline-flex h-10 w-20 p-[1.5px] shrink-0 cursor-pointer items-center rounded-[5rem] border-[0.79px] border-solid border-[#00658B] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-50 data-[state=unchecked]:bg-[#616161]  data-[state=checked]:border-primary-100]",
			className
		)}
		{...props}
		ref={ref}>
		<SwitchPrimitives.Thumb
			className={cn(
				"pointer-events-none block h-9 w-9 rounded-full  ring-0 transition-transform data-[state=checked]:translate-x-10 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-[#fafafa]  data-[state=checked]:bg-secondary-green",
				thumbClassName
			)}
		/>
	</SwitchPrimitives.Root>
))
ToggleControlSettings.displayName = SwitchPrimitives.Root.displayName

export { ToggleControlSettings }
