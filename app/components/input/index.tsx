import React from "react";
import RBInputLabel from "./InputLabel";
import { Input, InputProps } from "@/components/ui/input";
import RBInputErrorMessage from "./InputErrorMessage";
import RBInputHelperText from "./InputHelperText";

interface InputFieldProps extends InputProps {
  error?: string | React.ReactNode;
  label?: string;
  helperText?: string | React.ReactNode;
}

const RBInput: React.FC<InputFieldProps> = ({
  error,
  label,
  helperText,
  ...rest
}) => {
  return (
    <div className="my-4 space-y-2">
      {label && <RBInputLabel label={label} />}

      <Input
        {...rest}
        className={`w-full p-4 rounded-[8px] border border-[#00222E] bg-[#FFFDFD] ${rest.className}`}
        aria-invalid={!!error}
      />

      {error && <RBInputErrorMessage error={error} />}

      {helperText && <RBInputHelperText helperText={helperText} />}
    </div>
  );
};

export default RBInput;
