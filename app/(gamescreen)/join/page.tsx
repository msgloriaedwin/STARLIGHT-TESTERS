import JoinGameForm from "@/app/components/forms/join-game-form";
import avatar1 from "@/assets/images/avatar-1.png";
import avatar2 from "@/assets/images/avatar-2.png";
import avatar3 from "@/assets/images/avatar-3.png";
import avatar4 from "@/assets/images/avatar-4.png";
import avatar5 from "@/assets/images/avatar-5.png";
import avatar6 from "@/assets/images/avatar-6.png";
import avatar7 from "@/assets/images/avatar-7.png";
import avatar8 from "@/assets/images/avatar-8.png";
import avatar9 from "@/assets/images/avatar-9.png";

const Page = () => {
  const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
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
