"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import OtpInputComponent from "./otpinput";
import { useRouter } from "next/navigation";
import { useTranslations } from 'next-intl';
import Navbar from "@/app/components/shared/navbars/Navbar";

const OtpComponent: React.FC = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [resendLoading, setResendLoading] = useState(false);
  const [censoredEmail, setCensoredEmail] = useState("");
  const router = useRouter();
  const t = useTranslations('otpComponent');

  useEffect(() => {
    const email = localStorage.getItem("resetEmail");
    if (email) {
      setCensoredEmail(censorEmail(email));
    } else {
      router.push("/auth/forgot-password");
    }
  }, [router]);

  const censorEmail = (email: string) => {
    const [user, domain] = email.split("@");
    const censoredUser = user.slice(0, 3) + "***";
    return `${censoredUser}@${domain}`;
  };

  const handleOtpSubmit = () => {
    const otpValue = otp.join("");
    
    if (otpValue) {
      router.push("/auth/forgot-password/new-password");
    } else {
      alert(t('invalidOtpError'));
    }
  };

  const handleResendOtp = () => {
    setResendLoading(true);
    setTimeout(() => {
      setResendLoading(false);
      alert(t('otpResentAlert'));
    }, 2000);
  };

  return (
    <>
    <Navbar />
      <div className='bg-body h-screen flex justify-center items-center'>
        <div className='] w-fit text-primary-900 text-center'>
          <h2 className='text-2xl xl:text-3xl mb-2 leading-[130%]'>
            {t('passwordResetTitle')}
          </h2>
          <p className='mb-10 xl:text-lg text-sm'>
           {t('codeSentToEmailMessage')} {censoredEmail}
          </p>
          <p className='mb-4 xl:text-lg text-sm'>
           {t('enterCodePrompt')}
          </p>
          <OtpInputComponent otp={otp} setOtp={setOtp} />
          <p className='mb-10 mt-4 xl:text-lg text-sm'>
            <span> {t('noCodeReceivedMessage')}</span>{" "}
            <span
              className={`ml-1 text-primary-700 cursor-pointer ${
                resendLoading ? "opacity-50" : ""
              }`}
              onClick={!resendLoading ? handleResendOtp : undefined}
            >
              {resendLoading ? t('resendingStatus') : t('resendLinkText')}
            </span>
          </p>
          <Button
            onClick={handleOtpSubmit}
            color='primary'
            className='shadow-[inset_2px_2px_0px_0px_rgba(255,255,255,0.4),_inset_-4px_-4px_0px_0px_rgba(0,0,0,0.32)] bg-[#FD0] hover:bg-[#FD0] border-1 border-yellow-800 w-full rounded-md p-7 text-base md:text-lg'
          >
            {t('verifyButtonText')}
          </Button>
        </div>
      </div>
    </>
  );
};

export default OtpComponent;
