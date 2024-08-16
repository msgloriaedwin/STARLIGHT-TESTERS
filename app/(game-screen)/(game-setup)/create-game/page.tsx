"use client";
const CreateGameForm = dynamic(
  () => import("@/app/components/shared/forms/create-game-form/CreateGameForm")
);
import Navbar from "@/app/components/shared/navbars/Navbar";
import { useGetAvatars } from "@/hooks/useApiQueries";
import dynamic from "next/dynamic";
import {useRouter} from "next/navigation";
const CreateGamePage: React.FC = () => {
  const router = useRouter();
  const { data: avatars } =  useGetAvatars()
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