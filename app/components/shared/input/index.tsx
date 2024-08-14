import React, { ReactNode } from "react";
import RBInputLabel from "./InputLabel";
import { Input, InputProps } from "@/components/ui/input";
import RBInputErrorMessage from "./InputErrorMessage";
import RBInputHelperText from "./InputHelperText";

interface InputFieldProps extends InputProps {
  error?: string | React.ReactNode;
  label?: string;
  helperText?: string | React.ReactNode;
  labelClassName?: string;
  errorClassName?: string;
  helperTextClassName?: string;

  iconRight?: ReactNode;
}

const RBInput = React.forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      error,
      label,
      helperText,
      labelClassName,
      errorClassName,
      helperTextClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="my-4 space-y-2">
        {label && <RBInputLabel label={label} className={labelClassName} />}

        <Input
          {...rest}
          ref={ref} // Forward the ref here
          className={`w-full p-4 rounded-md border border-[#C5C5C5] bg-[#FFFDFD] h-12 ${rest.className}`}
          aria-invalid={!!error}
        />

        {error && (
          <RBInputErrorMessage error={error} className={errorClassName} />
        )}

        {helperText && (
          <RBInputHelperText
            helperText={helperText}
            className={helperTextClassName}
          />
        )}
      </div>
    );
  }
);

RBInput.displayName = "RBInput";

export default RBInput;
