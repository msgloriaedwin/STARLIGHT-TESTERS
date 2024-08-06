import React, { useState } from "react";
import Image from "next/image";
import logo from "../asset/bingo_logo.png";
import user from "../asset/user.png";
import Navbar from "../Navbar";
import { Menu } from "lucide-react";

type PageProps = {
  onLogin: () => void;
  handleHowToPlayClick: () => void;
  handleShowMenu: () => void;
};

const SignUpNavbar = ({ onLogin }: { onLogin: () => void }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleShowMenu = () => {
    menuIsOpen === false ? setMenuIsOpen(true) : setMenuIsOpen(false);
  };
  const handleHowToPlayClick = () => {
  };
  return (
    <div className="w-full">
      <Navbar className="justify-between fixed  top-0 left-0 bg-body z-[999]">
        <div className="flex md:hidden">
          <Image src={user} alt="user" />
        </div>
        <div>
          <Image
            className="w-[131px] h-[46.48px]"
            src={logo}
            alt="Remote Bingo"
          />
        </div>
        <div className="flex gap-6 items-center">
          <p
            onClick={() => handleHowToPlayClick()}
            className="text-textColor-main cursor-pointer hidden md:flex"
          >
            How to play
          </p>
          <button
            onClick={() => onLogin()}
            className="bg-button-main hidden md:flex shadow-custom-inset px-4 py-2 rounded-[8px] text-white"
          >
            Login
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleShowMenu();
            }}
            className="bg-button-dark-blue flex md:hidden shadow-custom-inset px-4 py-[10px] rounded-[8px] text-white"
          >
            <Menu />
          </button>
        </div>
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
          </div>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default SignUpNavbar;
