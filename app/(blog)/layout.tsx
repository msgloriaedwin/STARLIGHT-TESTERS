"use client";
import { Menu } from "lucide-react";
import Footer from "../components/shared/footer/footer";
import logo from "@/public/assets/images/Remote Bingo Logo.svg";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../components/shared/button/custombutton";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="bg-[linear-gradient(180.54deg,_#F7EEE7_0.47%,_#F9E9A3_277.67%,_#FFDD00_438.32%)]">
      <header className="bg-[linear-gradient(180.54deg,_#F7EEE7_0.47%,_#F9E9A3_277.67%,_#FFDD00_438.32%)]">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between md:justify-center p-4 lg:px-12"
          aria-label="Global"
        >
          <div className="flex-1 flex">
            <Link href="/" className="block">
              <Image
                width={120}
                height={40}
                src={logo}
                alt="Remote Bingo"
                className="h-10 w-auto object-cover"
              />
            </Link>
          </div>

          <div className="flex  flex-1 justify-end">
            <div className="hidden gap-x-5 md:flex">
              <Link
                href={"/auth/signup"}
                className="bg-primary-700 shadow-custom-inset text-white py-2 px-4 rounded-[8px]"
              >
                Signup
              </Link>
              <Link href="/auth/login">
                <CustomButton>{"login"}</CustomButton>
              </Link>
            </div>

            <div className="flex md:hidden">
              <button className="flex items-center bg-primary-700  shadow-custom-inset border rounded-[8px] text-white justify-center py-[10px] px-4 outline-1">
                <Menu />
              </button>
            </div>
          </div>
        </nav>
      </header>
      {children}
      <Footer />
    </main>
  );
}
