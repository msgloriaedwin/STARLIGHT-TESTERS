"use client";

import React, { useState, FC } from "react";
import { z } from "zod";
import RBInput from "@/app/components/shared/input";
import FormCard from "@/app/components/shared/formcard/formCard";
import CustomButton from "@/app/components/shared/button/custombutton";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/shared/navbars/Navbar";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CircleCheck, Eye, EyeOff } from "lucide-react";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

type FormData = z.infer<typeof loginSchema>;

const LoginPage: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showCheckmarks, setShowCheckmarks] = useState({
    username: false,
    password: false,
  });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "username" && value.length > 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        username: undefined,
      }));
      setShowCheckmarks((prev) => ({ ...prev, username: true }));
    }

    if (name === "password" && value.length >= 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: undefined,
      }));
      setShowCheckmarks((prev) => ({ ...prev, password: true }));
    }
  };

  const validateForm = () => {
    const result = loginSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === "username") newErrors.username = err.message;
        if (err.path[0] === "password") newErrors.password = err.message;
      });
      setErrors(newErrors);
      setShowCheckmarks({ username: false, password: false });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const result = await signIn("credentials", {
          redirect: false,
          ...formData,
        });

        if (result?.error) {
        } else {
          window.location.href = "/"; // Example redirection
        }
      } catch (error) {
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleGoogleLogin = async () => {
    const googleAuthUrl = `https://api.staging.remote.bingo/api/v1/auth/google`;
    // await signIn("google", { callbackUrl: "/lobby/test" });
    window.location.href = googleAuthUrl;
  };

  return (
    <>
      <Navbar />
      <div className="bg-body flex justify-center items-center h-screen bg-gray-100">
        <FormCard variant="primary" size="lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <RBInput
                label="Enter username"
                placeholder="Your username"
                name="username"
                value={formData.username}
                error={errors.username}
                onChange={handleChange}
                className="p-4"
              />
              {showCheckmarks.username && (
                <CircleCheck className="absolute right-4 top-1/2 transform-translate-y-1/2 text-green-500" />
              )}
            </div>
            <div className="relative">
              <RBInput
                label="Enter Password"
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                error={errors.password}
                helperText=""
                onChange={handleChange}
                className="p-4"
              />

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
            </div>
            <Link
              href={"/auth/forgot-password"}
              className="text-primary-400 flex justify-end"
            >
              Forgot Password?
            </Link>
            <CustomButton
              size={"lg"}
              className="w-full p-6 text-base md:text-lg"
              type="submit"
              isDisabled={isSubmitting}
            >
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
                "Log In"
              )}
            </CustomButton>
            <section className="social-auth">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex justify-center p-4 border rounded-md border-[#C5C5C5]"
              >
                <Image
                  src={"/assets/icons/google.svg"}
                  alt="Google logo"
                  height={24}
                  width={24}
                  className="mr-3"
                />{" "}
                Sign in with Google
              </button>
            </section>
            <p className="text-center text-sm md:text-base">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup" className="text-primary-400">
                Sign Up
              </Link>
            </p>
          </form>
        </FormCard>
      </div>
    </>
  );
};

export default LoginPage;
