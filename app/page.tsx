"use client";

import React, { useState } from "react";
// import { ChooseAvatarField } from "./components/chooseAvatarField/chooseAvatarField";
import ForgotPasswordForm from "./components/forms/forgotPasswordForm/forgotPassword";
import OtpComponent from "./components/otp/otpcomponent";
import Slider from "./components/slider";
import PasswordResetForm from "./components/passwordResetForm/passwordResetForm";
import Footer from "./components/footer/footer";

export default function Home() {
  const onSubmit = (data: any) => {
    console.log(data, "data");
  };

  return (
    <main>
      <div className="flex justify-center bg-[#f7EEE7] items-center py-10 px-2">
        <OtpComponent email="amin***@gmail.com" />
      </div>

      <Slider mode="volume" />
      <ForgotPasswordForm />
      <div className="flex justify-center py-10 px-2 ">
        <PasswordResetForm link="/" onSubmit={onSubmit} />
      </div>
        <Footer/>
    </main>
  );
}
