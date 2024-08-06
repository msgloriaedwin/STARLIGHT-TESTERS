"use client";
import { ArrowLeft, Menu } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DeleteLogoutNavbar() {
  const router = useRouter();
  return (
    <nav className="bg-white px-4 h-16 py-3 flex items-center justify-center relative">
      <button
        onClick={() => router.back()}
        className='text-neutral-700 flex items-center border border-primary-400 rounded-md absolute left-4 lg:left-10 top-3 px-3 py-1.5'
      >
        <ArrowLeft className='mr-2 h-4 w-4 text-primary-400' /> <span className="text-primary-400">Back</span>
      </button>
      <button className="md:hidden flex bg-primary-700 px-2 py-1.5 shadow-custom-inset border-[.2px] rounded-[8px] outline-[.2px] absolute right-4 top-2.5">
        <Menu className="text-white" />
      </button>
    </nav>
  );
}
