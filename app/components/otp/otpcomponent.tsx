"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import OtpInputComponent from "./otpinput";

interface OtpComponentProps {
  email: string;
}

const OtpComponent: React.FC<OtpComponentProps> = ({ email }) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [resendLoading, setResendLoading] = useState(false);

  const handleOtpSubmit = () => {
    const otpValue = otp.join("");
    console.log("OTP submitted:", otpValue);
  };

  const handleResendOtp = () => {
    console.log("Resend OTP clicked");
  };

  return (
    <div className="bg-[#F7EEE7] w-fit text-[#00222E] text-center">
      <h2 className="text-2xl xl:text-3xl mb-2 leading-[130%]">Password Reset</h2>
      <p className="mb-10 xl:text-lg text-sm">We have sent a code to {email}</p>
      <p className="mb-4 xl:text-lg text-sm">Enter password reset code here</p>
      <OtpInputComponent otp={otp} setOtp={setOtp} />
      <p className="mb-10 mt-4 xl:text-lg text-sm">
        <span>Didn’t receive a code?</span>{" "}
        <span
          className={`ml-1 text-[#00658B] cursor-pointer ${resendLoading ? 'opacity-50' : ''}`}
          onClick={!resendLoading ? handleResendOtp : undefined}
        >
          {resendLoading ? 'Resending...' : 'Resend'}
        </span>
      </p>
      <Button
        onClick={handleOtpSubmit}
        color="primary"
        className="shadow-[inset_2px_2px_0px_0px_rgba(255,255,255,0.4),_inset_-4px_-4px_0px_0px_rgba(0,0,0,0.32)] bg-[#FD0] hover:bg-[#FD0] border-1 border-[#665800] w-full rounded-md"
      >
        Verify
      </Button>
    </div>
  );
};

export default OtpComponent;
