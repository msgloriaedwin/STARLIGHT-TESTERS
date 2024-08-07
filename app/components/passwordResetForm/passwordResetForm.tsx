import React from "react";
import { useForm } from "react-hook-form";
import FormCard from "../formcard/formCard";
import RBInput from "../input";
import RBButton from "../button/custombutton";
import Link from "next/link";

interface PasswordResetFormProps {
  link: string;
  onSubmit: (data: any) => void;
}

interface FormValues {
  newPassword: string;
  confirmPassword: string;
}

const PasswordResetForm: React.FC<PasswordResetFormProps> = ({
  link,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const handleFormSubmit = (data: FormValues) => {
    onSubmit(data);
  };

  return (
    <FormCard variant="primary" size="lg">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <RBInput
          type="password"
          label="New Password"
          {...register("newPassword", {
            required: "New password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
          placeholder="*********"
          error={errors.newPassword?.message}
        />

        <RBInput
          type="password"
          label="Confirm Password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("newPassword") || "Passwords do not match",
          })}
          placeholder="*********"
          error={errors.confirmPassword?.message}
        />

        <RBButton
          type="submit"
          variant="secondary"
          className="w-full py-[7px] px-4 text-xs sm:py-2 sm:px-6 sm:text-sm md:py-3 md:px-8 md:text-base"
        >
          Reset Password
        </RBButton>

        <div className="text-center mt-4">
          <Link href={link} className="text-[#00222E] text-sm underline">
            Back to Sign In
          </Link>
        </div>
      </form>
    </FormCard>
  );
};

export default PasswordResetForm;
