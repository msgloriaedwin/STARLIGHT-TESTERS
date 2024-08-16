"use client";
import Image from "next/image";
import user from "../asset/user.png";
import {
  ArrowLeft,
  ChevronDown,
  Link,
  Menu,
  Settings,
  User,
  UserRound,
  X,
} from "lucide-react";
import Navbar from "../Navbar";
import {useEffect, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import CustomButton from "../../button/custombutton";
import cupIcon from "../asset/cup.svg";
import infoIcon from "../asset/info-circle.svg";
import closeIcon from "../asset/close-circle.svg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

type PageProps = {
  handleGoBack?: () => void;
  handleShareGameLink?: () => void;
  showCup?: boolean;
};

const JoinGameNavbar = ({handleShareGameLink, showCup}: PageProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [showDestopNav, setShowDestopNav] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const user: any = sessionStorage.getItem("user");
    const userData = JSON.parse(user);
    setUser(userData);
  }, []);

  const handleHowToPlayClick = () => {};

  return (
    <nav className="bg-body z-[50] w-full flex items-center justify-between">
      <div
        className="w-full flex justify-between md:py-6 py-4 px-5 max-w-[100vw]"
        style={{
          background:
            "linear-gradient(181deg, #F7EEE7 0.47%, #F9E9A3 277.67%, #FD0 438.32%)",
        }}
      >
        <div className="flex gap-2 md:hidden justify-between items-center bg-transparent">
          <CustomButton
            onClick={() => router.back()}
            variant="outline"
            isLeftIconVisible={true}
            icon={<ArrowLeft color="#00658B" />}
            size={"lg"}
          >
            Back
          </CustomButton>{" "}
        </div>

        <div className="hidden md:flex max-w-[100vw] items-center gap-4">
          <CustomButton
            onClick={() => router.back()}
            variant="outline"
            isLeftIconVisible={true}
            icon={<ArrowLeft color="#00658B" />}
            size={"lg"}
          >
            Back
          </CustomButton>
        </div>
        {showCup && (
          <div className="hidden md:flex items-center gap-4 justify-center border-solid border-[2px] rounded-[8px] border-[#7F7F7F] p-3">
            <Image src={cupIcon} alt="cup" width={37} height={37.6} />
            <span className="text-[24px] font-[700] text-[#4CAF50]">$350</span>
          </div>
        )}

        <div className="flex gap-6 items-center">
          {showDestopNav && (
            <div className="hidden md:flex absolute right-[8.5rem] bg-[#FFFDF2] rounded-[8px] p-4 w-[339px]  flex-col gap-4 top-[5rem]">
              <div>
                <button
                  onClick={handleHowToPlayClick}
                  className="text-textColor-main self-center cursor-pointer flex items-center gap-4 text-primary-700 text-[18px]"
                >
                  <Image alt="info-icon" src={infoIcon} />
                  How to play
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    router.push("/game-settings");
                  }}
                  className="text-textColor-main self-center cursor-pointer flex items-center gap-4 text-primary-700 text-[18px]"
                >
                  <Settings color="#292D32" /> Settings
                </button>
              </div>
              <button
                className="block w-full text-center py-2 rounded-[8px] text-error border-error border-[1px] border-solid"
                onClick={() => {
                  router.push("components/leave-game");
                }}
              >
                Leave Game
              </button>
              <button
                className="flex items-center justify-center gap-2 w-full text-center py-2 rounded-[8px]  text-[#5F5F5F] "
                onClick={() => {
                  setShowDestopNav(!showDestopNav);
                }}
              >
                <Image
                  alt="close-icon"
                  src={closeIcon}
                  width={15}
                  height={15}
                />{" "}
                Close
              </button>
            </div>
          )}

          <div className="hidden md:flex gap-2 ">
            <CustomButton
              onClick={() => {
                console.log("Copy link");
              }}
              variant="subtle"
              isRightIconVisible={true}
              icon={<Link size={"14px"} />}
              size={"lg"}
            >
              Share Game Invite
            </CustomButton>
            <button
              className="bg-primary-700 shadow-custom-inset text-primary-100 hover:bg-primary-700/90 dark:bg-slate-50 dark:text-primary-100 dark:hover:bg-slate-50/90 flex items-center justify-center gap-3 rounded-[8px] px-4 "
              onClick={() => {
                setShowDestopNav(!showDestopNav);
              }}
            >
              <User color="#ffffff" />
              <span>{user ? user.username : ""}</span>
              <ChevronDown color="#ffffff" />
            </button>
            <button className="px-4 border-[2px] border-primary-800 border-solid rounded-[8px] text-primary-800">
              ?
            </button>
          </div>
        </div>
      </div>
      <div className="md:hidden flex">
        <Sheet>
          <SheetTrigger asChild>
            <button className="flex md:hidden items-center mr-4 bg-primary-700  shadow-custom-inset border rounded-[8px] text-white justify-center py-[10px] px-4 outline-1">
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent className="w-[80%] flex flex-col overflow-y- py-6 auto gap-4 bg-white z-[100] rounded-r-[10px] pt-10">
            <div className=" z-[999] md:hidden flex gap-4 py-[50px] flex-col p-6 min-h-[calc(100vh-80px)] rounded-lg justify-between">
              <div className="flex flex-col gap-6">
                <div className="flex justify-start gap-2 items-center border-b-[1px] border-solid border-primary-700 py-4">
                  <User color="#00658B" /> Frieda
                </div>
                <CustomButton
                  size={"lg"}
                  onClick={() => {
                    console.log("Copy link");
                  }}
                  variant="subtle"
                  isRightIconVisible={true}
                  icon={<Link size={"14px"} />}
                >
                  Share Game Invite
                </CustomButton>
                <div>
                  <button
                    onClick={handleHowToPlayClick}
                    className="text-textColor-main self-center cursor-pointer flex items-center gap-4 text-primary-700 text-[18px]"
                  >
                    <Image alt="info-icon" src={infoIcon} />
                    How to play
                  </button>
                </div>
                <div>
                  <SheetClose>
                    <button
                      onClick={() => {
                        router.push("/game-settings");
                      }}
                      className="text-textColor-main self-center cursor-pointer flex items-center gap-4 text-primary-700 text-[18px]"
                    >
                      <Settings color="#292D32" /> Settings
                    </button>
                  </SheetClose>
                </div>
              </div>
              <SheetClose>
                <button
                  className="block w-full text-center py-2 rounded-[8px] text-error border-error border-[1px] border-solid"
                  onClick={() => {
                    router.push("components/leave-game");
                  }}
                >
                  Leave Game
                </button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default JoinGameNavbar;
