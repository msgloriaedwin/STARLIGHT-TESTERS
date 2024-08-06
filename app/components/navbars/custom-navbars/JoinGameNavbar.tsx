"use client";
import Image from "next/image";
import user from "../asset/user.png";
import {
  ArrowLeft,
  ChevronDown,
  Link,
  Menu,
  User,
  UserRound,
} from "lucide-react";
import Navbar from "../Navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "../../button/custombutton";
import cupIcon from "../../../../public/cup.svg";

type PageProps = {
  handleGoBack: () => void;
  handleShareGameLink: () => void;
};

const JoinGameNavbar = ({ handleShareGameLink }: PageProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const router = useRouter();

  const handleShowMenu = () => {
    menuIsOpen === false ? setMenuIsOpen(true) : setMenuIsOpen(false);
  };
  const handleHowToPlayClick = () => {
    //handle form display
  };

  return (
    <div className="w-full">
      <Navbar className="flex justify-between bg-body z-[999] fixed top-0 left-0">
        <div className="flex md:hidden justify-between items-center bg-transparent">
          <CustomButton
            onClick={() => router.back()}
            variant="outline"
            isLeftIconVisible={true}
            icon={<ArrowLeft color="#00658B" />}
          >
            Back
          </CustomButton>{" "}
        </div>
        {/* {menuIsOpen === false ? (
          <button
            onClick={() => handleShareGameLink()}
            className="flex md:hidden items-center shadow-custom-inset bg-button-light-main rounded-[8px] gap-2 text-extra-small text-black justify-center py-[12px] px-4"
          >
            <span>Share game link</span>
            <span>
              <Link size={"14px"} />
            </span>
          </button>
        ) : (
          ""
        )} */}
        <div className="hidden md:flex  items-center gap-4">
          <CustomButton
            onClick={() => router.back()}
            variant="outline"
            isLeftIconVisible={true}
            icon={<ArrowLeft color="#00658B" />}
          >
            Back
          </CustomButton>
        </div>
        <div className="hidden md:flex items-center gap-4 justify-center border-solid border-[2px] rounded-[8px] border-[#7F7F7F] p-3">
          <Image src={cupIcon} alt="cup" width={37} height={37.6} />
          <span className="text-[24px] font-[700] text-[#4CAF50]">$350</span>
        </div>
        <div className="flex gap-6 items-center">
          <div className="hidden md:flex gap-2 ">
            <CustomButton
              onClick={() => router.back()}
              variant="subtle"
              isRightIconVisible={true}
              icon={<Link size={"14px"} />}
            >
              Share Game Invite
            </CustomButton>
            <button className="bg-primary-700 shadow-custom-inset text-primary-100 hover:bg-primary-700/90 dark:bg-slate-50 dark:text-primary-100 dark:hover:bg-slate-50/90 flex items-center justify-center gap-3 rounded-[8px] px-4">
              <User color="#ffffff" />
              <span>Frieda</span>
              <ChevronDown color="#ffffff" />
            </button>
            <button className="px-4 border-[2px] border-primary-800 border-solid rounded-[8px] text-primary-800">
              ?
            </button>
          </div>

          {/* <CustomButton
            variant="secondary"
            isRightIconVisible={true}
            icon={<Link size={"14px"} />}
          >
            Button CTA
          </CustomButton> */}
          <button
            onClick={(e) => {
              e.preventDefault();
              handleShowMenu();
            }}
            className="flex md:hidden shadow-custom-inset items-center bg-primary-700 border rounded-[8px] gap-[.5em] border-[#00658B] text-white justify-center py-[12px] md:py-[10px] px-4 outline-1"
          >
            <Menu />
          </button>
        </div>
      </Navbar>
      {menuIsOpen === true ? (
        <ul className="w-[100%] z-[995] md:hidden fixed top-[85px] flex gap-4 pt-[50px] flex-col min-h-[90vh] bg-white p-4 rounded-lg">
          <div className="flex flex-col gap-4">
            <p
              onClick={handleHowToPlayClick}
              className="text-textColor-main self-center cursor-pointer flex"
            >
              How to play
            </p>
            <button
              onClick={() => handleShareGameLink()}
              className="flex items-center shadow-custom-inset bg-button-light-main rounded-[8px] gap-2 text-small text-black justify-center py-2 px-4"
            >
              <span>Share game link</span>
              <span>
                <Link size={"14px"} />
              </span>
            </button>
          </div>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default JoinGameNavbar;
