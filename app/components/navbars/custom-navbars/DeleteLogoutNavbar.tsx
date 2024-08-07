import { ArrowLeft, Menu } from "lucide-react";
import Image from "next/image";

export default function DeleteLogoutNavbar() {
  return (
    <nav className="bg-white px-4 h-20 py-4 flex items-center justify-center relative">
      <button className="text-neutral-700 flex items-center border border-neutral-700 rounded-md absolute left-4 lg:left-14 top-5 px-3 py-1.5">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </button>
      <div className="hidden md:flex items-center justify-center">
        <Image
          width={120}
          height={40}
          src="/assets/images/Remote Bingo Logo.svg"
          alt="Remote Bingo"
          className="h-10 w-auto object-cover"
        />
      </div>
      <button className="md:hidden flex bg-blue-500 px-2 py-1.5 shadow-custom-inset border-[.2px] rounded-[8px] outline-[.2px] absolute right-4 top-5">
        <Menu className="text-white" />
      </button>
    </nav>
  );
}
