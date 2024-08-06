"use client";
import DeleteLogoutNavbar from "../navbars/custom-navbars/DeleteLogoutNavbar";
import ImageTextButtons from "../imageTextButtons";
import CustomButton from "../button/custombutton";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {};

const LogoutSuccess = (props: Props) => {
  const router = useRouter();

  const handleBackToSettingsClick = () => {
    router.back();
  };

  const handleSignin = () => {
    router.push("/auth/login");
  };
  return (
    <div className="min-h-screen bg-[#faf1e4] flex flex-col">
      <DeleteLogoutNavbar />
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <ImageTextButtons message="Log Out Successful.">
          <CustomButton variant="outline" onClick={handleBackToSettingsClick}>
            Back to settings
          </CustomButton>
          <CustomButton
            variant={"subtle"}
            className="border-none"
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
