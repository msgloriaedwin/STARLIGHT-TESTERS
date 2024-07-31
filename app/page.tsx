"use client";

import React, { useState } from "react";
// import { ChooseAvatarField } from "./components/chooseAvatarField/chooseAvatarField";
import ForgotPasswordForm from "./components/forms/forgotPasswordForm/forgotPassword";
import OtpComponent from "./components/otp/otpcomponent";
import Slider from "./components/slider";
import PasswordResetForm from "./components/passwordResetForm/passwordResetForm";
import Footer from "./components/footer/footer";
import GameOverModal from "./components/GameOverModal/GameOverModal";

import GameCardSelection from "./components/gamecardselection/gamecardselection";
import CardSelectionNavbar from "./components/navbars/custom-navbars/CardSelectionNavbar";
import CountDownNavbar from "./components/navbars/custom-navbars/CountDownNavbar";
import ForgotPasswordNavbar from "./components/navbars/custom-navbars/ForgotPasswordNavbar";
import GameScreenNavbar from "./components/navbars/custom-navbars/GameScreenNavbar";
import GameStartNavbar from "./components/navbars/custom-navbars/GameStartNavbar";
import LandingPageNavbar from "./components/navbars/custom-navbars/LandingPageNavbar";
import SignUpNavbar from "./components/navbars/custom-navbars/signUpNavbar";
import InputContainer from "./components/input/page";
import OtpInputComponent from "./components/otp/otpinput";
import CreateGameForm from "./components/forms/create-game-form/CreateGameForm";
import { SidebarComp } from "./components/settings/sidebar";
import SettingsHeader from "./components/settings/header";


const players = [
  { name: 'Precious', score: '3/5', imageUrl: '/assets/images/modalpic1.png' },
  { name: 'Oluwole', score: '2/5', imageUrl: '/assets/images/modalpic3.png' },
  { name: 'Sandra', score: '5/5', imageUrl: '/assets/images/modalpic4.png' },
  { name: 'Farrell', score: '4/5', imageUrl: '/assets/images/modalpic2.png' },
];

export default function Home() {
  const onSubmit = (data: any) => {
    console.log(data, "data");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <p className="text-center text-lg mt-5"> Navbars</p>
       <CardSelectionNavbar/>
      <CountDownNavbar/>
      <ForgotPasswordNavbar/>
      <GameScreenNavbar/>
       <GameStartNavbar/>
       <LandingPageNavbar/>
       <SignUpNavbar/>
      <SettingsHeader />
       <hr/>
      <div className=" mx-auto">
       <p className="text-center text-lg mt-5"> Forms</p>
      <div className="flex justify-center py-10 px-2 ">
        <PasswordResetForm link="/" onSubmit={onSubmit} />
      </div>

        <div className="flex justify-center bg-[#f7EEE7] items-center py-10 px-2">
          <OtpComponent email="amin***@gmail.com" />
        </div>

        <Slider mode="volume" />
        <ForgotPasswordForm />
        <InputContainer />
     
        </div>
      <hr/>

      <div className="mx-auto block space-y-3 w-full">
        <p className="text-center text-lg mt-5"> Game Components</p>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleOpenModal}>
            Show Game Over Modal
          </button>
          <GameOverModal isOpen={isModalOpen} onClose={handleCloseModal} players={players} />
        </div>
        <div className="w-full flex flex-col items-center justify-center mx-auto">
           <CreateGameForm />
        </div>
         <GameCardSelection/>
      </div>
     <hr/>
     <div>
     <p className="text-center text-lg mt-5"> Sidebar for settings page (Go to /settings)</p>
       <SidebarComp />
     </div>
     
     
     
      <Footer />
    </main>
  );
}
