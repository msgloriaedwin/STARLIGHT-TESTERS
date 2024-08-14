import JoinGameForm from "@/app/components/screen/setup/join-game";
import JoinGameNavbar from "@/app/components/shared/navbars/custom-navbars/JoinGameNavbar";
import Navbar from "@/app/components/shared/navbars/Navbar";
import avatar1 from "@/public/assets/images/avatar-1.png";
import avatar2 from "@/public/assets/images/avatar-2.png";
import avatar3 from "@/public/assets/images/avatar-3.png";
import avatar4 from "@/public/assets/images/avatar-4.png";
import avatar5 from "@/public/assets/images/avatar-5.png";
import avatar6 from "@/public/assets/images/avatar-6.png";
import avatar7 from "@/public/assets/images/avatar-7.png";
import avatar8 from "@/public/assets/images/avatar-8.png";
import avatar9 from "@/public/assets/images/avatar-9.png";

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
		<>
			<Navbar />
			<section className="bg-body h-screen flex items-center justify-center mt-10 md:mt-0  px-5">
				<div className="flex  justify-center ">
					<JoinGameForm avatars={avatars} />
				</div>
			</section>
		</>
	);
};

export default Page;
