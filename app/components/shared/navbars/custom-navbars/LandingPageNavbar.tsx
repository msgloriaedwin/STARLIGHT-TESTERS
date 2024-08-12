import React, { useState } from "react";
import Image from "next/image";
import user from "../asset/user.png";
import Navbar from "../Navbar";
import { Menu } from "lucide-react";
import Link from "next/link";
import CustomButton from "../../button/custombutton";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


type PageProps = {
  onLogin: () => void;
  onSignup: () => void;
};

const LandingPageNavbar = ({ onLogin, onSignup }: PageProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleShowMenu = () => {
    menuIsOpen === false ? setMenuIsOpen(true) : setMenuIsOpen(false);
  };
  const handleHowToPlayClick = () => {
    //handle form display
    console.log("clicked how to play");
  };

  return (
    <div className="w-full">
      <nav className="justify-between fixed top-0 left-0 md:px-20 px-4 py-6 flex items-center w-full bg-body z-[50]">
        <div className=" hidden md:hidden justify-between items-center w-full bg-transparent md:bg-[#fffdfd] px-6 md:px-20 py-6" >
          <Image src={user} alt="user" />
        </div>
        <div>
          <Image
            className="w-[131px] h-[46.48px]"
            width={100}
            height={100}
            src='/bingo-logo.svg'
            alt="Remote Bingo"
          />
        </div>
        <div className="md:flex md:justify-end hidden gap-6 items-center">
          <p
            onClick={handleHowToPlayClick}
            className="text-primary-700 cursor-pointer hidden md:flex"
          >
            How to play
          </p>
          <div className="flex gap-4 items-center">
            <Link
              href={"/auth/login"}
              onClick={() => onLogin()}
            >
              <CustomButton>
                Login
              </CustomButton>

            </Link>

            <Link
              href={"/auth/signup"}
              onClick={() => onSignup()}
              className="bg-primary-700 shadow-custom-inset text-white py-2 px-4 rounded-[8px]"
            >
              Signup
            </Link>
          </div>
        </div>
        <div className="md:hidden flex">
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex md:hidden items-center  bg-primary-700  shadow-custom-inset border rounded-[8px] gap-[.5em] text-white justify-center py-[10px] px-4 outline-1"
              >
                <Menu />
              </button>
            </SheetTrigger>
            <SheetContent className="w-[80%] min-h-[calc(100vh-80px)] mr-4 bg-white z-[100]  rounded-r-[10px] ">
              <section className="w-full flex flex-col pt-20 gap-6 items-start px-6">
                <SheetClose asChild>
                  <p
                    onClick={handleHowToPlayClick}
                    className="text-primary-700 w-full cursor-pointer flex"
                  >
                    How to play
                  </p>
                </SheetClose>
                <div className="flex flex-col w-full gap-4">
                  <SheetClose>
                    <Link href={'/auth/login'}
                    >
                      <CustomButton className='!w-full lg:w-auto'>
                        Login
                      </CustomButton>

                    </Link>
                  </SheetClose>
                  <SheetClose>
                    <CustomButton className="w-full" onClick={() => onSignup()}
                      variant='secondary'>
                      Signup
                    </CustomButton>
                  </SheetClose>
                </div>
              </section>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default LandingPageNavbar;
