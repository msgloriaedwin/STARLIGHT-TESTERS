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
import { ArrowLeft, UserRoundX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DeleteLogoutNavbar from "../navbars/custom-navbars/DeleteLogoutNavbar";
import profileIcons from "@/public/assets/icons/profile-delete.svg";

export default function DeleteAccountPage() {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDeleteAccount = () => {
    setTimeout(() => {
      setIsDeleted(true);
    }, 1000);
  };

  if (isDeleted) {
    return (
      <div className="min-h-screen bg-[#faf1e4] flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Account Deleted</h2>
          <p>
            Your account has been successfully deleted. We&apos;re sorry to see
            you go!
          </p>
          <Link href="/">
            <button className="text-neutral-700 flex items-center border border-neutral-700 rounded-md absolute left-4 lg:left-10 top-3 px-3 py-1.5">
              <ArrowLeft className="mr-2 h-4 w-4" /> Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(181deg,#F7EEE7_0.47%,#F9E9A3_277.67%,#FD0_438.32%)] flex flex-col">
      <DeleteLogoutNavbar />

      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg text-center">
          <div className="text-6xl font-bold mb-2 flex flex-col leading-none justify-center items-center">
            <Image
              width={120}
              height={40}
              src="/assets/images/Remote Bingo Logo.svg"
              alt="Remote Bingo"
              className="h-20 w-auto"
            />
          </div>
          <h2 className="text-2xl text-[#5F5F5F] mb-8 font-semibold">
            Your adventure may be ending here,
            <br />
            but we hope you had fun
          </h2>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-[#00658b] hover:bg-transparent border-2 sm:w-[120px] text-[#00658b]"
            >
              Cancel
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  size="lg"
                  variant="destructive"
                  className="bg-[#ff3355] sm:w-[140px] flex items-center justify-center text-white"
                >
                  <Image
                    src={profileIcons}
                    className="w-4"
                    alt="profile delete icon"
                  />
                  Delete Account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="bg-[#faf1e4] border-none rounded-lg max-w-md">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-2xl font-bold text-center text-[#4a4a4a]">
                    Are you sure you want to delete your account?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-center text-[#4a4a4a]">
                    This action cannot be undone. All of your data will be
                    permanently removed.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex items-center justify-center flex-col">
                  <AlertDialogAction
                    onClick={handleDeleteAccount}
                    className="bg-[#ff4757] hover:bg-[#ff6b81] text-white w-full py-2 rounded-md"
                  >
                    Delete Account
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
