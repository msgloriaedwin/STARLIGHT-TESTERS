"use client";
import React, { useState } from "react";
import Link from "next/link";

import { z } from "zod";
import { signupSchema } from "@/utils/Validation Schema/signupSchema";

import AuthLink from "../authLinks";
import ForgotPasswordNavbar from "../../shared/navbars/custom-navbars/ForgotPasswordNavbar";
import RBInput from "../../shared/input";
import FormCard from "../../shared/formcard/formCard";
import CustomButton from "../../shared/button/custombutton";

type FormData = z.infer<typeof signupSchema>;

const SignupForm = () => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

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
    }

    if (name === "email" && value.length > 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: undefined,
      }));
    }

    if (name === "password" && value.length >= 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: undefined,
      }));
    }
  };

  const validateForm = () => {
    const result = signupSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === "username") newErrors.username = err.message;
        if (err.path[0] === "email") newErrors.email = err.message;
        if (err.path[0] === "password") newErrors.password = err.message;
      });
      setErrors(newErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully!");
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <ForgotPasswordNavbar />
      <div className="bg-body w-full flex-grow flex flex-col items-center justify-center px-9 bg-gray-100">
        <FormCard variant="primary" size="lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <RBInput
              label="Enter username"
              placeholder="Your username"
              name="username"
              value={formData.username}
              error={errors.username}
              onChange={handleChange}
              className="p-4"
            />
            <RBInput
              label="Enter Email"
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
              className="p-4"
            />
            <RBInput
              label="Choose Password"
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              error={errors.password}
              helperText=""
              onChange={handleChange}
              className="p-4"
            />

            <CustomButton size={"lg"} className="w-full p-6" type="submit">
              Sign up
            </CustomButton>

            <section className="social-auth space-y-4">
              <AuthLink
                href="/auth/login"
                src="/assets/icons/google.svg"
                alt="Google logo"
              >
                Sign Up with Google
              </AuthLink>

              <AuthLink
                href="/auth/login"
                src="/assets/icons/facebook2.svg"
                alt="Facebook logo"
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
