import React, {useState} from "react";
import Image from "next/image";
import {Menu} from "lucide-react";
import Link from "next/link";
import {useTranslations} from "next-intl";
import CustomButton from "../../button/custombutton";
import LocaleSwitcher from "@/app/components/locale-switcher";
import LogoutButton from "../../button/logOutButton";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {useAuthContext} from "@/context/AuthContext";

type PageProps = {
  onLogin: () => void;
  onSignup: () => void;
  hideAuthBtn?: boolean;
  hideHowToPlay?: boolean;
};

const LandingPageNavbar = ({
  onLogin,
  onSignup,
  hideAuthBtn,
  hideHowToPlay,
}: PageProps) => {
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);
  const {user} = useAuthContext();

  const handleHowToPlayClick = () => {
    setIsOpen(false);
  };

  const handleSheetOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <div className="w-full">
      <nav className="grid grid-cols-2 md:grid-cols-3 fixed top-0 left-0 md:px-20 px-4 py-6 items-center w-full bg-body z-[50] ">
        <Link href={"/"}>
          <Image
            className="w-[131px] h-[46.48px]"
            width={100}
            height={100}
            src="/bingo-logo.svg"
            alt="Remote Bingo"
          />
        </Link>

        <div className="hidden md:flex justify-self-center">
          {!hideHowToPlay && (
            <p
              onClick={handleHowToPlayClick}
              className="text-primary-700 cursor-pointer"
            >
              {t("howToPlay")}
            </p>
          )}
        </div>

        <div className="md:flex md:justify-end hidden gap-6 items-center">
          <LocaleSwitcher />
          {user.access_token ? (
            <LogoutButton />
          ) : (
            !hideAuthBtn && (
              <div className="flex gap-4 items-center">
                <Link href={"/auth/login"} onClick={onLogin}>
                  <CustomButton>{t("login")}</CustomButton>
                </Link>
                <Link
                  href={"/auth/signup"}
                  onClick={onSignup}
                  className="bg-primary-700 shadow-custom-inset text-white py-2 px-4 rounded-[8px]"
                >
                  {t("signup")}
                </Link>
              </div>
            )
          )}
        </div>

        <div className="md:hidden flex justify-end">
          <Sheet open={isOpen} onOpenChange={handleSheetOpenChange}>
            <SheetTrigger asChild>
              <button className="flex md:hidden items-center bg-primary-700 shadow-custom-inset border rounded-[8px] gap-[.5em] text-white justify-center py-[10px] px-4 outline-1">
                <Menu />
              </button>
            </SheetTrigger>
            <SheetContent className="w-[80%] min-h-[calc(100vh-80px)] mr-4 bg-white z-[100] rounded-r-[10px]">
              <section className="w-full flex flex-col pt-20 gap-6 items-start px-6">
                <SheetClose asChild>
                  <p
                    onClick={handleHowToPlayClick}
                    className="text-primary-700 w-full cursor-pointer flex"
                  >
                    {t("howToPlay")}
                  </p>
                </SheetClose>
                <SheetClose asChild>
                  <div className="hidden">
                    <LocaleSwitcher />
                  </div>
                </SheetClose>
                <div className="flex flex-col w-full gap-4">
                  {user.access_token ? (
                    <SheetClose asChild>
                      <LogoutButton />
                    </SheetClose>
                  ) : (
                    !hideAuthBtn && (
                      <>
                        <SheetClose asChild>
                          <Link
                            href={"/auth/login"}
                            onClick={() => {
                              onLogin();
                              setIsOpen(false);
                            }}
                          >
                            <CustomButton className="!w-full lg:w-auto">
                              {t("login")}
                            </CustomButton>
                          </Link>
                        </SheetClose>
                        <SheetClose asChild>
                          <CustomButton
                            className="w-full"
                            onClick={() => {
                              onSignup();
                              setIsOpen(false);
                            }}
                            variant="secondary"
                          >
                            {t("signup")}
                          </CustomButton>
                        </SheetClose>
                      </>
                    )
                  )}
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
