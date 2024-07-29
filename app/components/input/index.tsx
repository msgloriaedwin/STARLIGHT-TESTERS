import React from "react";
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
}

const RBInput: React.FC<InputFieldProps> = ({
  error,
  label,
  helperText,
  labelClassName,
  errorClassName,
  helperTextClassName,
  ...rest
}) => {
  return (
    <div className="my-4 space-y-2">
      {label && <RBInputLabel label={label} className={labelClassName} />}

      <Input
        {...rest}
        className={`w-full p-4 rounded-[8px] border border-[#00222E] bg-[#FFFDFD] ${rest.className}`}
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
};

export default RBInput;
