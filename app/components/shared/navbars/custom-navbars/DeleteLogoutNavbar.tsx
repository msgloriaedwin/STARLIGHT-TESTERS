"use client";
import { ArrowLeft, Menu } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import logo from "../../../../../public/assets/images/Remote Bingo Logo A.png";

export default function DeleteLogoutNavbar() {
  const router = useRouter();
  return (
    <nav className="bg-white px-4 h-16 py-3 flex items-center justify-center relative">
      <button
        onClick={() => router.back()}
        className="text-neutral-700 flex items-center border border-neutral-700 rounded-md absolute left-4 lg:left-10 top-3 px-3 py-1.5"
      >

        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </button>
      <div className="hidden md:flex items-center justify-center">
        <Image
          width={120}
          height={40}
          src={logo}
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
