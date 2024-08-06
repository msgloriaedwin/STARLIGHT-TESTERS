import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex gap-x-1.5 items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 hover:scale-[1.02] shadow-custom-inset",
  {
    variants: {
      variant: {
        default:
          "bg-primary-yellow border-2 shadow-custom-inset border-primary-yellow-800 text-primary-900 hover:bg-primary-yellow-400 dark:bg-slate-50 dark:text-primary-900 dark:hover:bg-slate-50/90",
        destructive:
          "bg-error text-slate-50 hover:bg-error/90 dark:bg-red-900 dark:text-primary-50 dark:hover:bg-red-900/90",
        outline:
          "border border-primary-700 text-primary-700 !shadow-none hover:bg-primary-50 dark:border-slate-200 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary:
          "bg-primary-700 shadow-custom-inset text-primary-100 hover:bg-primary-700/90 dark:bg-slate-50 dark:text-primary-100 dark:hover:bg-slate-50/90",
        ghost:
          "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        subtle:
          "bg-primary-yellow-400 hover:bg-primary-yellow-300 hover:text-primary-yellow-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-primary-yellow-900 !shadow-none underline-offset-4 hover:underline dark:text-slate-50",
        loading: "!shadow-none text-primary-yellow-900",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
