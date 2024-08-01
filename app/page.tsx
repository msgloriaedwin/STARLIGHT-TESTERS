"use client";

import React, { useState } from "react";
// import { ChooseAvatarField } from "./components/chooseAvatarField/chooseAvatarField";
import ForgotPasswordForm from "./components/forms/forgotPasswordForm/forgotPassword";
import OtpComponent from "./components/otp/otpcomponent";
import Slider from "./components/slider";
import PasswordResetForm from "./components/passwordResetForm/passwordResetForm";
import Footer from "./components/footer/footer";
import GameOverModal from "./components/GameOverModal/GameOverModal";
import CreateGameForm from "./components/forms/create-game-form/CreateGameForm";
import { ToggleControl } from "./components/ToggleControl/ToggleControl";
import GameCustomizeNavBar from "./components/navbars/custom-navbars/GameCustomizeNavBar";
import LandingPageNavbar from "./components/navbars/custom-navbars/LandingPageNavbar";
import GameCardSelection from "./components/gamecardselection/gamecardselection";
import GameCard from "./components/game-card/GameCard";

const players = [
  { name: "Precious", score: "3/5", imageUrl: "/assets/images/modalpic1.png" },
  { name: "Oluwole", score: "2/5", imageUrl: "/assets/images/modalpic3.png" },
  { name: "Sandra", score: "5/5", imageUrl: "/assets/images/modalpic4.png" },
  { name: "Farrell", score: "4/5", imageUrl: "/assets/images/modalpic2.png" },
];


const avatars = [
  "/assets/images/avatar-1.png",
  "/assets/images/avatar-2.png",
  "/assets/images/avatar-3.png",
  "/assets/images/avatar-4.png",
  "/assets/images/avatar-5.png",
  "/assets/images/avatar-6.png",
  "/assets/images/avatar-3.png",
  "/assets/images/avatar-2.png",
]

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
  const handleShowMenu = () => {
    setIsModalOpen(false);
  };
  const onSignUp = () => {
    setIsModalOpen(false);
  };
  const onLogin = () => {
    setIsModalOpen(false);
  };
  const handleHowToPlayClick = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="bg-body">
      <LandingPageNavbar
        onLogin={onLogin}
        onSignup={onSignUp}
        handleHowToPlayClick={handleHowToPlayClick}
        handleShowMenu={handleShowMenu}
      />
      <div className="flex justify-center bg-[#f7EEE7] items-center py-10 px-2">
        <OtpComponent email="amin***@gmail.com" />
      </div>

      <div className="flex items-center justify-center h-60">
        <button
          className="bg-blue-500 shadow-custom-inset text-white py-2 px-4 rounded"
          onClick={handleOpenModal}
        >
          Show Game Over Modal
        </button>
        <GameOverModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          players={players}
        />
      </div>

      <div className="flex justify-center my-6">
        <CreateGameForm avatars={avatars}/>
      </div>
      <div className="flex justify-center my-6">
        <ToggleControl />
      </div>

      <Slider mode="volume" />
      <Slider mode="level" className="mt-14" />
      <ForgotPasswordForm />
      <div className="flex justify-center py-10 px-2 ">
        <PasswordResetForm link="/" onSubmit={onSubmit} />
      </div>
      <GameCardSelection />
      <div className="flex gap-3 justify-center">
        <GameCard value={12}/>
        <GameCard value={'B'}/>
        <GameCard/>
        <GameCard value={1}/>
        <GameCard value={32}/>
      </div>
      <Footer />
    </main>
  );
}
