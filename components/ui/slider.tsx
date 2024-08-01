"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track
      className="relative h-5 w-full grow overflow-hidden rounded-[8px] bg-[#C5C5C5] border-[#00658B] "
      style={{
        boxShadow:
          "inset 0 0 0 1px #000000, 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <SliderPrimitive.Range className="bg-gradient-to-r from-pink-500 to-blue-400 absolute h-full " />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-7 w-7 rounded-full border border-[#FFFDFD] bg-[#9C27B0] ring-offset-background transition-colors focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.15)]"
      style={{
        fill: "var(--Secondary-Purple, #9C27B0)",
      }}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
