"use client";

import React from "react";
import SignUpNavbar from "@/app/components/navbars/custom-navbars/signUpNavbar";
import UserSettings from "../(user-settings)/profile-settings/page";
import GamesSettingsPage from "../game-settings/page";
import { useState } from "react";

function Settings() {
  const [activePage, setActivePage] = useState("game");

  return (
    <main className="h-[100vh] w-[100vw] bg-[#F7EEE7]">
      <SignUpNavbar
        onLogin={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div className="flex flex-column h-[100%]">
        <div className="md:flex hidden flex-col w-[382px] h-full pt-[180px] pr-[24px] pb-[80px] pl-[80px] items-start gap-[62px] border-r border-neutral-300">
          <div className="flex flex-col w-full h-full justify-between">
            <div className="flex flex-col items-start gap-6">
              <button
                className={`text-neutral-700 leading-[130%] text-[16px] text-start rounded-lg h-[52px] py-[8px] px-[16px] gap-[8px] font-dm-sans text-base font-medium custom-liga ${
                  activePage === "game"
                    ? "text-primary-700 border border-primary-500 bg-primary-100"
                    : ""
                } w-full`}
                onClick={() => setActivePage("game")}
              >
                Game Settings
              </button>
              <button
                className={`text-neutral-700 leading-[130%] text-[16px] text-start rounded-lg h-[52px] py-[8px] px-[16px] gap-[8px] font-dm-sans text-base font-medium custom-liga ${
                  activePage === "user"
                    ? "text-primary-700 border border-primary-500 bg-primary-100"
                    : ""
                } w-full`}
                onClick={() => setActivePage("user")}
              >
                User Settings
              </button>
              <button className="text-neutral-700 leading-[130%] text-[16px] text-start rounded-lg h-[52px] py-[8px] px-[16px] gap-[8px] font-dm-sans text-base font-medium custom-liga">
                Terms & Privacy
              </button>
            </div>
            <div className="flex flex-col items-start gap-6">
              <button className="text-neutral-700 leading-[130%] text-[16px] text-start rounded-lg h-[52px] py-[8px] px-[16px] gap-[8px] font-dm-sans text-base font-medium custom-liga">
                Logout
              </button>
              <button className="text-error text-[16px] leading-[130%]flex h-[52px] py-[8px] px-[16px] gap-[8px] font-dm-sans text-base font-medium leading-[130%] custom-liga">
                Delete Account
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 pt-[180px] md:pl-[24px] px-[24px] md:items-start items-center">
          {activePage === "user" ? <UserSettings /> : <GamesSettingsPage />}
        </div>
      </div>
    </main>
  );
}

export default Settings;
