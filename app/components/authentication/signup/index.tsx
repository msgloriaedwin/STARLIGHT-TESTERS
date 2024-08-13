"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CircleCheck, Eye, EyeOff, CheckCircle } from "lucide-react";
import CustomButton from "../../shared/button/custombutton";
import RBInput from "../../shared/input";
import ExtendedRBInput from "./extendedRBInput";
import ForgotPasswordNavbar from "../../shared/navbars/custom-navbars/ForgotPasswordNavbar";
import FormCard from "../../shared/formcard/formCard";
import AuthLink from "../authLinks";
import { signUpWithEmail, signUpWithGoogle } from "@/utils/auth/authService";
import { useToast } from "../../../../components/ui/use-toast";

const schema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Invalid Password"),
});

type FormData = z.infer<typeof schema>;

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordConditions, setPasswordConditions] = useState({
    hasUppercase: false,
    hasNumber: false,
    hasMinLength: false,
  });
  const { toast } = useToast();
  const router = useRouter();

  const calculatePasswordStrength = (password: string): void => {
    const conditions = {
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      hasMinLength: password.length >= 8,
    };
    setPasswordConditions(conditions);

    const strength = Object.values(conditions).filter(Boolean).length;
    setPasswordStrength(strength);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await signUpWithEmail(data.username, data.email, data.password);
      toast({
        title: "Sign up successful",
        description: "You have registered successfully.",
      });
      // router.push(`auth/verify-email?email=${encodeURIComponent(data.email)}`);
      // router.push(`auth/verify-email`);
      router.push(`/auth/login`);
    } catch (error) {
      toast({
        title: "Sign up failed",
        description: "An error occurred while signing up.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePasswordChange = (value: string) => {
    setValue("password", value);
    calculatePasswordStrength(value);
  };

  const handleGoogleSignUp = async () => {
    try {
      await signUpWithGoogle();
      toast({
        title: "Google sign up successful",
        description: "You have signed up with Google.",
      });

      router.push("/");
    } catch (error) {
      toast({
        title: "Google sign up failed",
        description: "An error occurred while signing up with Google.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ForgotPasswordNavbar />
      <div className="bg-body w-full flex-grow flex flex-col items-center justify-center px-9 bg-gray-100">
        <FormCard variant="primary" size="lg">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <RBInput
                  label="Enter username"
                  placeholder="Your username"
                  {...field}
                  error={errors.username?.message}
                  className="p-4"
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <RBInput
                  label="Enter Email"
                  type="email"
                  placeholder="Your Email"
                  {...field}
                  error={errors.email?.message}
                  className="p-4"
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <ExtendedRBInput
                  label="Choose Password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  {...field}
                  onChange={(e) => handlePasswordChange(e.target.value)}
                  error={errors.password?.message}
                  iconRight={
                    <button
                      type="button"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                      className="absolute right-4 top-1/2 transform-translate-y-1/2"
                    >
                      {passwordVisible ? (
                        <Eye className="h-5 w-5 text-gray-400" />
                      ) : (
                        <EyeOff className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                  }
                />
              )}
            />

            <div className="flex space-x-2">
              {Array.from({ length: 3 }, (_, index) => (
                <div
                  key={index}
                  className={`h-1 w-[60px] rounded-full ${
                    index < passwordStrength
                      ? passwordStrength === 1
                        ? "bg-red-500"
                        : passwordStrength === 2
                        ? "bg-yellow-500"
                        : "bg-green-500"
                      : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
            <p
              className={`text-sm mt-2 ${
                passwordStrength === 1
                  ? "text-red-500"
                  : passwordStrength === 2
                  ? "text-yellow-500"
                  : passwordStrength === 3
                  ? "text-green-500"
                  : "text-gray-400"
              }`}
            >
              {passwordStrength === 1
                ? "Password too weak"
                : passwordStrength === 2
                ? "Medium Password strength"
                : passwordStrength === 3
                ? "Strong Password"
                : ""}
            </p>

            <div className="space-y-1 text-sm text-gray-600">
              <div
                className={`flex items-center space-x-2 ${
                  passwordConditions.hasUppercase
                    ? "text-green-500"
                    : errors.password && getValues("password") !== ""
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
              >
                <CircleCheck className="h-4 w-4" />
                <span>Password must have at least 1 uppercase</span>
              </div>
              <div
                className={`flex items-center space-x-2 ${
                  passwordConditions.hasNumber
                    ? "text-green-500"
                    : errors.password && getValues("password") !== ""
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
              >
                <CircleCheck className="h-4 w-4" />
                <span>Password must have at least 1 number</span>
              </div>
              <div
                className={`flex items-center space-x-2 ${
                  passwordConditions.hasMinLength
                    ? "text-green-500"
                    : errors.password && getValues("password") !== ""
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
              >
                <CircleCheck className="h-4 w-4" />
                <span>Password must have at least 8 characters</span>
              </div>
            </div>
            <CustomButton size={"lg"} className="w-full p-6" type="submit">
              {isSubmitting ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                "Sign Up"
              )}
            </CustomButton>
            <section className="social-auth space-y-4">
              <AuthLink
                href="#"
                src="/assets/icons/google.svg"
                alt="Google logo"
                // onClick={handleGoogleSignUp}
              >
                Sign Up with Google
              </AuthLink>
              <AuthLink
                href="/auth/login"
                src="/assets/icons/facebook2.svg"
                alt="Facebook logo"
                onClick={handleGoogleSignUp}
              >
                Sign Up with Facebook
              </AuthLink>
            </section>
            <p className="text-center text-sm md:text-base flex gap-2 justify-center items-center">
              Have an account?
              <Link href="/auth/login" className="text-primary-400">
                Sign In
              </Link>
            </p>
          </form>
        </FormCard>
      </div>
    </div>
  );
};

export default SignupForm;
