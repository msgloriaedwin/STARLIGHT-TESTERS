"use client";

import CustomButton from "@/app/components/shared/button/custombutton";
import FormCard from "@/app/components/shared/formcard/formCard";
import RBInput from "@/app/components/shared/input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/app/components/shared/navbars/Navbar";
import { useTranslations } from 'next-intl';


const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const t = useTranslations('newPassword');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.length < 8) {
      alert(t('passwordTooShortError'));
    } else if (password === confirmPassword) {
      alert(t('passwordChangedSuccess'));
      router.push("/auth/forgot-password/success");
    } else {
      alert(t('passwordsDoNotMatchError'));
    }
  };

  
  return (
    <>
    <Navbar />
      <div className='bg-body flex flex-col h-screen justify-center items-center'>
        <div className='mb-6 text-center'>
          <h3 className='text-2xl md:text-4xl mb-2 text-primary-900 '>{t('setNewPasswordTitle')}</h3>
          <p className='text-sm md:text-lg text-primary-900'>
           {t('setNewPasswordDescription')}
          </p>
        </div>
        <FormCard>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <RBInput
              label={t('newPasswordLabel')}
              placeholder='********'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <RBInput
              label={t('confirmPasswordLabel')}
              placeholder='********'
              type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
            />

            <CustomButton size={"lg"} className='w-full p-7 text-base md:text-lg' type='submit'>
              {t('resetPasswordButton')}
            </CustomButton>
          </form>
          <Link
            href={"/auth/login"}
            className='underline flex justify-center mt-10 text-base md:text-lg'
          >
           {t('backToSignInLink')}
          </Link>
        </FormCard>
      </div>
    </>
  );
};

export default NewPassword;
