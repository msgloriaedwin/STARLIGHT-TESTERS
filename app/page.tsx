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
import MessageBubble from "./components/messageBubble/MessageBubble";
import Player from "./components/player/Player";
import ColorScheme from "./components/guides/colorscheme";
import ChatInput from "./components/chatbox";
import SampleButtons from "./components/button/page";
import GettingStarted from "./components/guides/getting-started";
import { ChevronDownCircle, ChevronRight } from "lucide-react";
import Navbar from "./components/navbars/Navbar";
import CustomButton from "./components/button/custombutton";
import Image from "next/image";
import logo from "../public/assets/images/Remote Bingo Logo.svg";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/guides");
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <main className="bg-body pt-[95px]">
      <LandingPageNavbar onLogin={onLogin} onSignup={onSignUp} />
      <div className="flex flex-col items-center justify-center w-screen h-[calc(100vh-95px)] gap-6">
        <Image
          className="w-full h-auto max-w-[131px] max-h-[46.48px]"
          src={logo}
          alt="Remote Bingo"
        />
        <CustomButton onClick={handleButtonClick}>Style Guides</CustomButton>
      </div>
    </main>
  );
}
