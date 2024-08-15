"use client";

import CreateGameForm from "@/app/components/shared/forms/create-game-form/CreateGameForm";
import Navbar from "@/app/components/shared/navbars/Navbar";
import Avatar1 from "@/public/assets/images/avatar-1.png";
import Avatar2 from "@/public/assets/images/avatar-2.png";
import Avatar3 from "@/public/assets/images/avatar-3.png";
import Avatar4 from "@/public/assets/images/avatar-4.png";
import Avatar5 from "@/public/assets/images/avatar-5.png";
import Avatar6 from "@/public/assets/images/avatar-6.png";
import Avatar7 from "@/public/assets/images/avatar-7.png";
import Avatar8 from "@/public/assets/images/avatar-8.png";
import Avatar9 from "@/public/assets/images/avatar-9.png";
import { useRouter } from "next/navigation";

const CreateGamePage: React.FC = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  const handleShareGameLink = () => {};

  const handleHowToPlayClick = () => {};

  const avatars = [
    Avatar1,
    Avatar2,
    Avatar3,
    Avatar4,
    Avatar5,
    Avatar6,
    Avatar7,
    Avatar8,
    Avatar9,
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <main className="container mx-auto px-4 pt-4 pb-8">
          <h1 className="text-4xl font-bold text-center mt-6 mb-6 text-primary-900">
            Create Game
          </h1>
          <CreateGameForm className="mx-auto max-w-[39rem]" avatars={avatars} />
        </main>
      </div>
    </>
  );
};

export default CreateGamePage;
