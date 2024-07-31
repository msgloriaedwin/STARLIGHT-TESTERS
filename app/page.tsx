"use client";

import React, { useState } from "react";
// import { ChooseAvatarField } from "./components/chooseAvatarField/chooseAvatarField";
import ForgotPasswordForm from "./components/forms/forgotPasswordForm/forgotPassword";
import OtpComponent from "./components/otp/otpcomponent";
import Slider from "./components/slider";
import PasswordResetForm from "./components/passwordResetForm/passwordResetForm";
import Footer from "./components/footer/footer";
import GameOverModal from "./components/GameOverModal/GameOverModal";


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
      <div className="flex justify-center bg-[#f7EEE7] items-center py-10 px-2">
        <OtpComponent email="amin***@gmail.com" />
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleOpenModal}>
        Show Game Over Modal
      </button>
      <GameOverModal isOpen={isModalOpen} onClose={handleCloseModal} players={players} />
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
