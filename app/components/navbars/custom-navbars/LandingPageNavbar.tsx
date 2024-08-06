import React, { useState } from "react";
import Image from "next/image";
import logo from "../asset/bingo_logo.png";
import user from "../asset/user.png";
import Navbar from "../Navbar";
import { Menu } from "lucide-react";
import Link from "next/link";

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
      <Navbar className="justify-between fixed top-0 left-0 py-6 md:px-20 px-4 flex items-center w-full bg-body z-[999]">
        <div className=" hidden md:hidden justify-between items-center w-full bg-transparent md:bg-[#fffdfd] px-6 md:px-20 py-6">
          <Image src={user} alt="user" />
        </div>
        <div>
          <Image
            className="w-[131px] h-[46.48px]"
            src={logo}
            alt="Remote Bingo"
          />
        </div>
        <div className="md:flex hidden gap-6 items-center">
          <p
            onClick={handleHowToPlayClick}
            className="text-textColor-main cursor-pointer hidden md:flex"
          >
            How to play
          </p>
          <div className="flex gap-4 items-center">

            <Link href={'/auth/login'}
              onClick={() => onLogin()}
              className="bg-primary-yellow-700 shadow-custom-inset text-white py-2 px-4 rounded-[8px]"
            >
              Login
            </Link>
            <button
              onClick={() => onSignup()}
              className="bg-primary-700 shadow-custom-inset text-white py-2 px-4 rounded-[8px]"
            >
              Signup
            </button>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleShowMenu();
          }}
          className="flex md:hidden items-center bg-button-dark-blue shadow-custom-inset border rounded-[8px] gap-[.5em] text-white justify-center py-[10px] px-4 outline-1"
        >
          <Menu />
        </button>
      </Navbar>
      {menuIsOpen === true ? (
        <ul className="w-[100%] z-[995] md:hidden fixed top-[85px] flex gap-4 pt-[50px] flex-col min-h-[90vh] bg-white p-4 rounded-lg">
          <p
            onClick={handleHowToPlayClick}
            className="text-textColor-main self-center cursor-pointer flex"
          >
            How to play
          </p>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => onLogin()}
              className="bg-primary-yellow-700 w-[100%] shadow-custom-inset text-white py-2 px-4 rounded-[8px]"
            >
              Login
            </button>
            <button
              onClick={() => onSignup()}
              className="bg-primary-700 w-[100%] shadow-custom-inset text-white py-2 px-4 rounded-[8px]"
            >
              Signup
            </button>
          </div>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default LandingPageNavbar;
