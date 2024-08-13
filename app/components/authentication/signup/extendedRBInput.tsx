import React, { ReactNode } from "react";

import RBInput from "../../shared/input/index";

// Define the props that RBInput accepts
interface RBInputProps {
  label?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  error?: string;
  helperText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
  // Add any other props that RBInput accepts
}

// Define the props for our ExtendedRBInput, including iconRight
interface ExtendedRBInputProps extends RBInputProps {
  iconRight?: ReactNode;
}

const ExtendedRBInput = React.forwardRef<
  HTMLInputElement,
  ExtendedRBInputProps
>(({ iconRight, ...props }, ref) => {
  return (
    <div className="relative">
      <RBInput {...props} ref={ref} />
      {iconRight && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {iconRight}
        </div>
      )}
    </div>
  );
});

ExtendedRBInput.displayName = "ExtendedRBInput";

export default ExtendedRBInput;
