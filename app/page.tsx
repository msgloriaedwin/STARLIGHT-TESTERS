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
  "/assets/images/avatar-7.png",
  "/assets/images/avatar-8.png",
  "/assets/images/avatar-9.png",
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

  const DocHeader = ({ title }: { title: string }) => {
    return (
      <header className="flex items-center gap-2 text-[14px]">
        <span>Docs</span>
        <span>
          <ChevronRight size={"14px"} />
        </span>
        <span>{title}</span>
      </header>
    );
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    isOpen === false ? setIsOpen(true) : setIsOpen(false);
    console.log("clicked", isOpen);
  };

  return (
    <main className="bg-body pt-[95px]">
      <LandingPageNavbar onLogin={onLogin} onSignup={onSignUp} />

      <main className="flex min-h-screen flex-col  justify-between py-5 px-5 lg:px-20">
        <main className="flex flex-col gap-[50px] px-2 md:px-10 pt-[120px]">
          <button className="flex animate-scroll-btn md:hidden text-[14px] fixed right-6 bottom-6 bg-white border bg-opacity-[0.3] backdrop-blur-lg items-center gap-3 px-4 py-3 rounded-3xl">
            <span>
              <ChevronDownCircle size={"16px"} />
            </span>
            <span>Scroll down</span>
          </button>
          <section id="resources" className="flex flex-col gap-6">
            <DocHeader title="Quick start guide" />
            <h1 className="font-bold uppercase md:text-[32px] text-[24px]">
              Getting started
            </h1>
            <GettingStarted />
          </section>
          <section id="colors" className="mt-[50px] flex flex-col gap-6">
            <DocHeader title="Color guide" />
            <h1 className="font-bold uppercase md:text-[28px] text-[24px]">
              COLOR GUIDE
            </h1>
            <ColorScheme />
          </section>
          <section id="components" className="mt-[50px] flex flex-col gap-6">
            <DocHeader title="Reusable components" />
            <h1 className="font-bold uppercase md:text-[32px] text-[24px]">
              COMPONENTS
            </h1>
            <SampleButtons />
            <ChatInput />
          </section>
          <div className="flex justify-center bg-[#f7EEE7] items-center py-10 px-2">
            <OtpComponent email="amin***@gmail.com" />
          </div>

          <div className="flex items-center justify-center h-60">
            <CustomButton variant={"secondary"} onClick={handleOpenModal}>
              Show Game Over Modal
            </CustomButton>
            <GameOverModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              players={players}
            />
          </div>

          <div className="flex justify-center my-6">
            <CreateGameForm avatars={avatars} />
          </div>
          <div className="flex justify-center my-6">
            <ToggleControl />
          </div>

          <div className="flex justify-center my-12">
            <Player username="Olajumoke" avatar="/assets/images/avatar-1.png" />
            <MessageBubble
              message="pretend i said something funny(i did)"
              alignment="left"
            />
          </div>

          <Slider mode="volume" />
          <Slider mode="level" className="mt-14" />
          <ForgotPasswordForm />
          <div className="flex justify-center py-10 px-2 ">
            <PasswordResetForm link="/" onSubmit={onSubmit} />
          </div>
          <GameCardSelection />
          <div className="flex gap-3 justify-center">
            <GameCard value={12} />
            <GameCard value={"B"} />
            <GameCard />
            <GameCard value={1} />
            <GameCard value={32} />
          </div>
        </main>
      </main>

      <Footer />
    </main>
  );
}
