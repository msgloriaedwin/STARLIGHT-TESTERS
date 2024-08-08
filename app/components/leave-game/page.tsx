"use client";

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { UserRound} from "lucide-react";
import Image from "next/image";
import DeleteLogoutNavbar from "../navbars/custom-navbars/DeleteLogoutNavbar";
import Link from "next/link";

export default function LeaveGamePage() {
  const [isLeft, setIsLeft] = useState(false);

  const handleLeaveGame = () => {
    setTimeout(() => {
      setIsLeft(true);
    }, 1000);
  };

  if (isLeft) {
    return (
      <div className="min-h-screen flex flex-col bg-[linear-gradient(181deg,#F7EEE7_0.47%,#F9E9A3_277.67%,#FD0_438.32%)]">
        <DeleteLogoutNavbar />
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-[1027px] text-center">
            <div className="text-6xl font-bold mb-2 flex flex-col leading-none justify-center items-center">
              <Image
                width={120}
                height={40}
                src="/assets/images/Remote Bingo Logo.svg"
                alt="Remote Bingo"
                className="h-20 w-auto"
              />
            </div>
            <h2 className="text-2xl text-[#5F5F5F] font-bold mb-8">
              You’re not in any Game Session
            </h2>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Link href="/join"
              className="">
                <Button
                  variant="outline"
                  className="border-[#00a8e8] text-[#00a8e8] hover:bg-[#00a8e8] hover:text-white w-full"
                >
                  Join Game
                </Button>
              </Link>
              <Link href="/create-game">
                <Button
                  variant="default"
                  className="bg-primary-yellow-400 w-full hover:bg-primary-yellow-400 flex items-center justify-center text-[#332C00]"
                >
                  <UserRound className=" mr-2 w-4 h-4" />
                  Create New Game
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[linear-gradient(181deg,#F7EEE7_0.47%,#F9E9A3_277.67%,#FD0_438.32%)]">
      <DeleteLogoutNavbar />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-[1027px] text-center">
          <div className="text-6xl font-bold mb-2 flex flex-col leading-none justify-center items-center">
            <Image
              width={120}
              height={40}
              src="/assets/images/Remote Bingo Logo.svg"
              alt="Remote Bingo"
              className="h-20 w-auto"
            />
          </div>
          <h2 className="text-2xl text-[#5F5F5F] font-bold mb-8 ">
            If you leave now all progress gained in this round, would be <br />{" "}
            lost.
          </h2>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Button
              variant="outline"
              className="border-[#00a8e8] text-[#00a8e8] hover:bg-[#00a8e8] hover:text-white"
            >
              No, Go Back
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="destructive"
                  className="bg-[#ff4757] hover:bg-[#ff6b81] flex items-center justify-center text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M7.91406 6.57754C8.1724 3.57754 9.71406 2.35254 13.0891 2.35254H13.1974C16.9224 2.35254 18.4141 3.84421 18.4141 7.56921V13.0025C18.4141 16.7275 16.9224 18.2192 13.1974 18.2192H13.0891C9.73906 18.2192 8.1974 17.0109 7.9224 14.0609"
                      stroke="#FAFAFA"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.999 10.2773H3.51562"
                      stroke="#FAFAFA"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.3776 7.48535L2.58594 10.277L5.3776 13.0687"
                      stroke="#FAFAFA"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Yes, Leave Game
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-[#faf1e4] border-none rounded-lg max-w-md">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-2xl font-bold text-center text-[#4a4a4a]">
                    Are you sure you want to leave game?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-center text-[#4a4a4a]">
                    This action cannot be undone. All your progress will be
                    lost.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex items-center justify-center flex-col">
                  <AlertDialogAction
                    onClick={handleLeaveGame}
                    className="bg-[#ff4757] hover:bg-[#ff6b81] text-white w-full py-2 rounded-md"
                  >
                    Leave Game
                  </AlertDialogAction>
                  <AlertDialogCancel className="bg-transparent text-[#00a8e8] border-[#00a8e8] hover:bg-[#00a8e8] hover:text-white w-full py-2 rounded-md">
                    Cancel
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
}
