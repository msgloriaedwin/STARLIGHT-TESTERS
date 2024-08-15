import React from "react";
import CustomButton from "@/app/components/shared/button/custombutton";
import FormCard from "@/app/components/shared/formcard/formCard";
import Link from "next/link";
import Navbar from "@/app/components/shared/navbars/Navbar";
import { useTranslations } from 'next-intl';

const PasswordResetSuccess = () => {
  const t = useTranslations('navpasswordResetSuccess');

  return (
    <>
    <Navbar />
      <div className='bg-body flex flex-col h-screen justify-center items-center'>
        <div className='mb-6 text-center'>
          <h3 className='text-2xl md:text-4xl mb-2'>{t('passwordResetTitle')}</h3>
          <p className='text-sm md:text-lg'>
          {t('passwordResetDescription')}
          </p>
        </div>
        <FormCard>
          <Link  href={"/auth/login"}>
          <CustomButton size={"lg"} className='w-full p-7 text-base md:text-lg'>
           {t('continueButton')}
          </CustomButton>
          </Link>
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

export default PasswordResetSuccess;
