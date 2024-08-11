"use client";

import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import CustomButton from "../../shared/button/custombutton";
import ImageTextButtons from "../../shared/imageTextButtons";
import Navbar from "../../shared/navbars/Navbar";

type Props = {};

const LogoutSuccess = (props: Props) => {
  const router = useRouter();

  const handleBackToSettingsClick = () => {
    router.push("/game-settings");
  };

  const handleSignin = () => {
    router.push("/auth/login");
  };
  return (
    <div className="min-h-screen bg-[#faf1e4] flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <ImageTextButtons message="Log Out Successful.">
          <CustomButton
            className="w-full"
            variant="outline"
            onClick={handleBackToSettingsClick}
          >
            Back to settings
          </CustomButton>
          <CustomButton
            variant={"subtle"}
            className="border-none w-full"
            isLeftIconVisible
            icon={<User size={24} />}
            onClick={handleSignin}
          >
            Sign in
          </CustomButton>
        </ImageTextButtons>
      </div>
    </div>
  );
};

export default LogoutSuccess;
