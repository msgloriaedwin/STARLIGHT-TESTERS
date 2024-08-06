"use client";

import React, { useState, FC } from "react";
import { z } from "zod";
import RBInput from "@/app/components/input";
import FormCard from "@/app/components/formcard/formCard";
import CustomButton from "@/app/components/button/custombutton";
import Image from "next/image";
import Link from "next/link";
import DeleteLogoutNavbar from "@/app/components/navbars/custom-navbars/DeleteLogoutNavbar";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

type FormData = z.infer<typeof loginSchema>;

interface LoginPageProps {
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const LoginPage: FC<LoginPageProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

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

    if (name === "password" && value.length >= 8) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: undefined,
      }));
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
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm() && onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <>
      <DeleteLogoutNavbar />
      <div className='bg-body flex justify-center items-center h-screen bg-gray-100'>
        <FormCard variant='primary' size='lg'>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <RBInput
              label='Enter username'
              placeholder='Your username'
              name='username'
              value={formData.username}
              error={errors.username}
              onChange={handleChange}
            />
            <RBInput
              label='Enter Password'
              type='password'
              placeholder='Password'
              name='password'
              value={formData.password}
              error={errors.password}
              helperText=''
              onChange={handleChange}
            />
            <Link
              href={"/auth/login"}
              className='text-primary-400 flex justify-end'
            >
              Forgot Password?
            </Link>
            <CustomButton size={"lg"} className='w-full' type='submit'>
              Login
            </CustomButton>

            <section className='social-auth'>
              <Link
                href={"/auth/login"}
                className='w-full flex justify-center p-3 border rounded-md border-solid'
              >
                <Image
                  src={"/assets/icons/google.svg"}
                  alt='Google logo'
                  height={24}
                  width={24}
                />{" "}
                Sign in with Google
              </Link>

              <Link
                href={"/auth/login"}
                className='w-full mt-3 flex justify-center p-3 border rounded-md border-solid cursor-pointer'
              >
                <Image
                  src={"/assets/icons/facebook2.svg"}
                  alt='Facebook logo'
                  height={24}
                  width={24}
                />{" "}
                Sign in with Facebook
              </Link>
            </section>
            <p className='text-center'>
              Don&apos;t have an account?{" "}
              <Link href='/auth/login' className='text-primary-400'>
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
