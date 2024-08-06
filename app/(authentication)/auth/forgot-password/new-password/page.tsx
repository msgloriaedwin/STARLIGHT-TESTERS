"use client";

import CustomButton from "@/app/components/button/custombutton";
import FormCard from "@/app/components/formcard/formCard";
import RBInput from "@/app/components/input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ForgotPasswordNavbar from "@/app/components/navbars/custom-navbars/ForgotPasswordNavbar";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
    } else if (password === confirmPassword) {
      alert("Password changed successfully");
      router.push("/auth/forgot-password/success");
    } else {
      alert("Passwords do not match");
    }
  };

  
  return (
    <>
    <ForgotPasswordNavbar/>
      <div className='bg-body flex flex-col h-screen justify-center items-center'>
        <div className='mb-6 text-center'>
          <h3 className='text-2xl md:text-4xl mb-2 text-primary-900 '>Set New Password</h3>
          <p className='text-sm md:text-lg text-primary-900'>
            Your new password must be different from the previous password
          </p>
        </div>
        <FormCard>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <RBInput
              label='New Password'
              placeholder='********'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <RBInput
              label='Confirm Password'
              placeholder='********'
              type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
            />

            <CustomButton size={"lg"} className='w-full p-7' type='submit'>
              Reset password
            </CustomButton>
          </form>
          <Link
            href={"/auth/login"}
            className='underline flex justify-center my-4'
          >
            Back to sign in
          </Link>
        </FormCard>
      </div>
    </>
  );
};

export default NewPassword;
