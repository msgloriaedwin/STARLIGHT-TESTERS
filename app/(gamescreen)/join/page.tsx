import JoinGameForm from "@/app/components/forms/join-game-form";

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
    <section className="h-screen w-screen bg-body overflow-y-scroll">
      <div className="flex items-center justify-center">
        <JoinGameForm avatars={avatars} />
      </div>
    </section>
  );
};

export default Page;
