"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import OtpInputComponent from "./otpinput";
import { useRouter } from "next/navigation";
import ForgotPasswordNavbar from "@/app/components/navbars/custom-navbars/ForgotPasswordNavbar";

const OtpComponent: React.FC = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [resendLoading, setResendLoading] = useState(false);
  const [censoredEmail, setCensoredEmail] = useState("");
  const router = useRouter();

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
      alert("Invalid OTP");
    }
  };

  const handleResendOtp = () => {
    setResendLoading(true);
    setTimeout(() => {
      setResendLoading(false);
      alert("OTP has been resent");
    }, 2000);
  };

  return (
    <>
    <ForgotPasswordNavbar/>
      <div className='bg-body h-screen flex justify-center items-center'>
        <div className='] w-fit text-primary-900 text-center'>
          <h2 className='text-2xl xl:text-3xl mb-2 leading-[130%]'>
            Password Reset
          </h2>
          <p className='mb-10 xl:text-lg text-sm'>
            We have sent a code to {censoredEmail}
          </p>
          <p className='mb-4 xl:text-lg text-sm'>
            Enter password reset code here
          </p>
          <OtpInputComponent otp={otp} setOtp={setOtp} />
          <p className='mb-10 mt-4 xl:text-lg text-sm'>
            <span>Didn’t receive a code?</span>{" "}
            <span
              className={`ml-1 text-primary-700 cursor-pointer ${
                resendLoading ? "opacity-50" : ""
              }`}
              onClick={!resendLoading ? handleResendOtp : undefined}
            >
              {resendLoading ? "Resending..." : "Resend"}
            </span>
          </p>
          <Button
            onClick={handleOtpSubmit}
            color='primary'
            className='shadow-[inset_2px_2px_0px_0px_rgba(255,255,255,0.4),_inset_-4px_-4px_0px_0px_rgba(0,0,0,0.32)] bg-[#FD0] hover:bg-[#FD0] border-1 border-yellow-800 w-full rounded-md p-7 text-base md:text-lg'
          >
            Verify
          </Button>
        </div>
      </div>
    </>
  );
};

export default OtpComponent;
