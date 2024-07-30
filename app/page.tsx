"use client";

import React, { useState } from "react";
// import { ChooseAvatarField } from "./components/chooseAvatarField/chooseAvatarField";
import ForgotPasswordForm from "./components/forms/forgotPasswordForm/forgotPassword";
import OtpComponent from "./components/otp/otpcomponent";
import Slider from "./components/slider";
import LandingPageNavbar from "./components/navbars/custom-navbars/LandingPageNavbar";

export default function Home() {
  const onSubmit = (data: any) => {
    console.log(data, "data");
  };
  const onLogin = () => {
    //Login code here
    console.log('clicked');
  }
  const onSignup = () => {
    //Login code here
    console.log('clicked');
  }
  const handleHowToPlayClick = () => {
    //Logic to Display how to play content here
    console.log('clicked');
  }
  const handleShowMenu = () => {
    //Logic to Display leaderboard content here
    console.log('clicked');
  }



  return <main>
    <LandingPageNavbar onLogin={onLogin} onSignup={onSignup} handleHowToPlayClick={handleHowToPlayClick} handleShowMenu={handleShowMenu} />
    <div className="flex justify-center bg-[#f7EEE7] items-center py-10 px-2">
      <OtpComponent email="amin***@gmail.com" />
    </div>
    <Slider mode="volume" />
    <ForgotPasswordForm />
  </main>;
}
