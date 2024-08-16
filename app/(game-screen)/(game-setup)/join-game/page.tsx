import JoinGameForm from "@/app/components/screen/setup/join-game";
import Navbar from "@/app/components/shared/navbars/Navbar";
import { useGetAvatars } from "@/hooks/useApiQueries";
type PageProps = {
    searchParams: { [key: string]: string | undefined };
  };
const Page = ({searchParams}: PageProps) => {
    const gameId = searchParams.roomId || "";
    const { data: avatars } = useGetAvatars()
    return (
        <>
            <Navbar />
            <section className="bg-body h-screen flex items-center justify-center mt-10 md:mt-0  px-5">
                <div className="flex  justify-center ">
                    <JoinGameForm avatars={avatars} gameId={gameId as string} />
                </div>
            </section>
        </>
    );
};
export default Page;