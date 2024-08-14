"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ChangeAvatar from "../change-avatar/page";
import Modal from "@/app/components/modal/modal";
import { useTranslations } from 'next-intl';

function Index() {
  const [showChangeAvatar, setShowChangeAvatar] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const t = useTranslations('userSettings');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let hasError = false;

    const usernameInput =
      event.currentTarget.querySelector<HTMLInputElement>("#username");
    const emailInput =
      event.currentTarget.querySelector<HTMLInputElement>("#email");
    const passwordInput =
      event.currentTarget.querySelector<HTMLInputElement>("#password");

    const usernameValue = usernameInput?.value.trim();
    if (!usernameValue) {
      setUsernameError(t('usernameErrorEmpty'));
      hasError = true;
    } else if (usernameValue.includes(" ")) {
      setUsernameError(t('usernameErrorSpaces'));
      hasError = true;
    } else {
      setUsernameError("");
    }

    const emailValue = emailInput?.value.trim();
    if (!emailValue) {
      setEmailError(t('passwordErrorEmpty'));
      hasError = true;
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)
    ) {
      setEmailError(t('emailErrorInvalid'));
      hasError = true;
    } else {
      setEmailError("");
    }

    const passwordValue = passwordInput?.value.trim();
    if (!passwordValue) {
      setPasswordError(t('passwordErrorEmpty'));
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (!hasError) {
      setIsFormSubmitted(true);
      setIsModalOpen(true);
    } else {
      setIsFormSubmitted(false);
      setIsModalOpen(false);
    }
  };

  if (showChangeAvatar) {
    return <ChangeAvatar />;
  }
  return (
    <>
      <div className="px-6 pt-16 bg-[#F7EEE7]">
        <div className="md:min-w-[389px] max-w-[411px]">
          <h1 className="text-4xl text-primary-700 mb-8">{t('title')}</h1>

          <div className="flex gap-6 items-center mb-2">
            <div className="w-[94px] h-[94px] rounded-full">
              <Image
                width={94}
                height={94}
                src="/pfp1.jpeg"
                alt="Remote Bingo"
                className="h-[94px] rounded-full"
              />
            </div>
            <Button
              variant="secondary"
              onClick={() => setShowChangeAvatar(true)}
              className="border-[#00a8e8] text-primary-100 hover:bg-[#00a8e8] hover:text-white"
            >
              {t('changeAvatarButton')}
            </Button>
          </div>

          <form
            action=""
            onSubmit={handleFormSubmit}
            className="max-w-[411px] mx-auto"
          >
            <div className="mb-3">
              <label
                className="block text-neutral-600 text-[18px] leading-8 "
                htmlFor="username"
              >
              {t('usernameLabel')}
              </label>
              <input
                className="shadow appearance-none bg-[#FFFDFD] border border-primary-900 rounded w-full py-2 px-3 text-neutral-600 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder={t('usernamePlaceholder')}
              ></input>
              {usernameError && (
                <div className="text-red-500 text-sm p-0 m-0">
                  {usernameError}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label
                className="block text-neutral-600 text-[18px] leading-8"
                htmlFor="email"
              >
                {t('emailLabel')}
              </label>
              <input
                className="shadow appearance-none bg-[#FFFDFD] border border-primary-900 rounded w-full py-2 px-3 text-neutral-600 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder={t('emailPlaceholder')}
              ></input>
              {emailError && (
                <div className="text-red-500 text-sm p-0 m-0">{emailError}</div>
              )}
            </div>

            <div className="mb-8">
              <label
                className="block text-neutral-600 text-[18px] leading-8 "
                htmlFor="password"
              >
                 {t('passwordLabel')}
              </label>
              <input
                className="shadow appearance-none bg-[#FFFDFD] border border-primary-900 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="••••••••••••"
              ></input>
              {passwordError && (
                <div className="text-red-500 text-sm p-0 m-0">
                  {passwordError}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between w-full">
              <Button
                variant="default"
                className=" w-full border-x-primary-B800 bg-primary-yellow text-primary-B900 hover:bg-primary-yellow-400 hover:text-primary-B900"
              >
                {t('saveChangesButton')}
              </Button>
            </div>
          </form>
        </div>
        {isModalOpen && isFormSubmitted && (
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
      </div>
    </>
  );
}

export default Index;
