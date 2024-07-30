// "use client";

// import * as React from "react";
// import * as SwitchPrimitives from "@radix-ui/react-switch";

// import { cn } from "@/lib/utils";

// const ToggleControl = React.forwardRef<
//   React.ElementRef<typeof SwitchPrimitives.Root>,
//   React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
// >(({ className, ...props }, ref) => (
//   <SwitchPrimitives.Root
//     className={cn(
//       "peer inline-flex h-10 w-20 shrink-0 cursor-pointer items-center rounded-[5rem] border-1 border-solid transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#F1FBFF] data-[state=unchecked]:bg-[#616161]  data-[state=checked]:border-[#D5F3FF] p-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_8px_rgba(67,_67,_67,_0.25)_inset]",
//       className
//     )}
//     {...props}
//     ref={ref}
//   >
//     <SwitchPrimitives.Thumb
//       className={cn(
//         "pointer-events-none block h-8 w-8 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-full data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-white  data-[state=checked]:bg-[#4CAF50]  "
//       )}
//     />
//   </SwitchPrimitives.Root>
// ));
// ToggleControl.displayName = SwitchPrimitives.Root.displayName;

// export { ToggleControl };



"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const ToggleControl = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    thumbClassName?: string;
  }
>(({ className, thumbClassName, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-10 w-20 shrink-0 cursor-pointer items-center rounded-[5rem] border-1 border-solid transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#F1FBFF] data-[state=unchecked]:bg-[#616161]  data-[state=checked]:border-[#D5F3FF] p-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_8px_rgba(67,_67,_67,_0.25)_inset]",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-8 w-8 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-10 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-[#fafafa]  data-[state=checked]:bg-[#4CAF50]",
        thumbClassName
      )}
    />
  </SwitchPrimitives.Root>
));
ToggleControl.displayName = SwitchPrimitives.Root.displayName;

export { ToggleControl };
