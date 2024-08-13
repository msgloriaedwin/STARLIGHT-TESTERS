"use client";
import { ArrowLeft, Menu } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import logo from "../asset/bingo_logo.png";

export default function DeleteLogoutNavbar() {
  const router = useRouter();
  return (
    <nav className="bg-white md:px-20 px-4 md:py-6 py-4 flex items-center justify-between gap-6 relative">
      <button
        onClick={() => router.back()}
        className="text-neutral-700 flex items-center border border-neutral-700 rounded-md px-4 py-2"
      >

        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </button>
      <div className="hidden md:flex flex-1 items-center justify-center">
        <Image
          width={120}
          height={40}
          src={logo}
          alt="Remote Bingo"
          className="h-10 w-auto object-cover"
        />
      </div>
      <button className="md:hidden flex bg-blue-700 px-4 py-3 shadow-custom-inset border-[.2px] rounded-[8px] outline-[.2px] right-4 top-5">
        <Menu className="text-white" />
      </button>
    </nav>
  );
}
