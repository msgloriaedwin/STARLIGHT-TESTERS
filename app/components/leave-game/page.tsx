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
import { UserRound, LogOut } from "lucide-react";
import Image from "next/image";
import DeleteLogoutNavbar from "../navbars/custom-navbars/DeleteLogoutNavbar";

export default function LeaveGamePage() {
  const [isLeft, setIsLeft] = useState(false);

  const handleLeaveGame = () => {
    setTimeout(() => {
      setIsLeft(true);
    }, 1000);
  };

  if (isLeft) {
    return (
      <div className="max-h-[682px] flex flex-col">
        <DeleteLogoutNavbar />
        <div className="flex-grow flex flex-col items-center justify-center min-h-screen p-4">
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
            <h2 className="text-2xl text-[#4a4a4a] mb-8">
              You’re not in any Game Session
            </h2>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
              <Button
                variant="outline"
                className="border-[#00a8e8] text-[#00a8e8] hover:bg-[#00a8e8] hover:text-white"
              >
                Join Game
              </Button>
              <Button
                variant="default"
                className="bg-primary-yellow-400 hover:bg-primary-yellow-400 flex items-center justify-center text-[#332C00]"
              >
                <UserRound className=" mr-2 w-4 h-4" />
                Create New Game
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-h-[682px] flex flex-col">
      <DeleteLogoutNavbar />
      <div className="flex-grow flex flex-col items-center justify-center  min-h-screen p-4">
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
          <h2 className="text-2xl text-[#4a4a4a] mb-8 ">
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
                  <LogOut className=" mr-2 w-4 h-4" />
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
