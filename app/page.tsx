"use client";

import React, { useState } from "react";
import LandingPageNavbar from "./components/navbars/custom-navbars/LandingPageNavbar";
import CustomButton from "./components/button/custombutton";
import Image from "next/image";
import logo from "../public/assets/images/Remote Bingo Logo.svg";
import { useRouter } from "next/navigation";
import Layout from "./components/layout";

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
    <Layout>
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
    </Layout>
  );
}
