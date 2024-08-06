"use client";
import JoinGameForm from "@/app/components/forms/join-game-form";
import JoinGameNavbar from "@/app/components/navbars/custom-navbars/JoinGameNavbar";

const Page = () => {
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
  return (
    <section className="">
      <div className="flex items-center justify-center h-full">
        <div className="md:mt-[8rem] h-screen flex items-center">
          <JoinGameForm avatars={avatars} />
        </div>
      </div>
    </section>
  );
};

export default Page;
