import React from "react";
import { cva } from "class-variance-authority";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "primaryOutline";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode; // Add this prop for the icon
  isLoading?: boolean; // Add this prop for loading state
  children: React.ReactNode;
  className?: string; // Add this prop for additional custom styles
}

// Define the class variants using cva
const buttonVariants = cva(
  "rounded-md flex items-center justify-center gap-2 cursor-pointer font-poppins",
  {
    variants: {
      variant: {
        primary:
          "bg-[#00658B] border border-[#00658B] text-[#D5F3FF] shadow-[2px_2px_0px_0px_rgba(255,_255,_255,_0.40)_inset,_-4px_-4px_0px_0px_rgba(0,_0,_0,_0.32)_inset] hover:bg-[#004c66]",
        secondary:
          "bg-[#FD0] border-2 border-[#665800] text-[#332C00] shadow-[2px_2px_0px_0px_rgba(255,_255,_255,_0.40)_inset,_-4px_-4px_0px_0px_rgba(0,_0,_0,_0.32)_inset] hover:bg-[#e5c800]",
        danger:
          "bg-[#F35] border-2 border-[#FF8CB3] text-[#FAFAFA] shadow-[2px_2px_0px_0px_rgba(255,_255,_255,_0.40)_inset,_-4px_-4px_0px_0px_rgba(0,_0,_0,_0.32)_inset] hover:bg-[#d14b5e]",
        primaryOutline:
          "bg-transparent border-2 border-[#00658B] text-[#00658B] shadow-none hover:bg-[#00658B33]",
      },
      size: {
        small: "py-2 px-4 text-xs",
        medium: "py-3 px-6 text-sm",
        large: "py-4 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

const RBButton = ({
  variant = "primary",
  size = "medium",
  children,
  icon,
  isLoading = false,
  className,
  disabled,
  ...buttonProps
}: ButtonProps) => {
  const buttonClassNames = `${buttonVariants({ variant, size })} ${
    className || ""
  } ${disabled || isLoading ? "opacity-50 cursor-not-allowed" : ""}`;

  return (
    <button
      className={buttonClassNames}
      disabled={disabled || isLoading}
      {...buttonProps}
    >
      {isLoading ? (
        <span className="flex items-center">
          {/* Replace with a spinner or loading icon */}
          <span className="loader"></span> Loading...
        </span>
      ) : (
        <>
          {icon && <span className="flex items-center">{icon}</span>}
          {children}
        </>
      )}
    </button>
  );
};

export default RBButton;