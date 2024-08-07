"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowLeft, Menu } from "lucide-react";
import Image from "next/image";
export function SidebarComp() {
  const path = usePathname();

  const links = [
    { href: "/game-settings", label: "Game Settings" },
    { href: "/profile-settings", label: "Users Settings" },
    { href: "/terms-and-privacy", label: "Terms & Privacy" },
  ];

  const linkClasses = (href: string) =>
    `block py-2 text-[1rem] mb-3 md:mb-7  whitespace-nowrap text-left pr-20 pl-4 md:pr-10 lg:pr-20 rounded-lg sm:rounded-md   ${
      path === href
        ? " font-medium text-button-dark-blue bg-button-dark-blue-text  pr-20  md:pr-10 lg:pr-20 text-primary-700 border border-primary-500 bg-primary-100  transition-all duration-300 ease-in delay-200 pl-4 rounded-md border border-[#00A8E8]"
        : "text-[#5F5F5F]"
    }`;

  return (
    <>
      {/* MOBILE SIDEBAR */}
      <aside className="block md:hidden">
        <Sheet>
          <header className="flex w-full bg-white items-center justify-between px-5 py-3">
            <div className="flex rounded-md text-[#9F9F9F] border border-[#9F9F9F] items-center gap-x-1 py-2 px-3">
              {" "}
              <ArrowLeft size={16} /> Back
            </div>
            <div>
              <SheetTrigger asChild>
                <button
                  style={{
                    boxShadow:
                      "2px 2px 0px 0px rgba(255, 255, 255, 0.40) inset, -4px -4px 0px 0px rgba(0, 0, 0, 0.32) inset",
                  }}
                  className="!bg-[#00658B] !text-sm rounded-lg  h-10 px-2 text-white   flex items-center gap-x-2"
                >
                  {" "}
                  <Menu />
                </button>
              </SheetTrigger>
            </div>
          </header>

          <SheetContent className="bg-white">
            <hr className="block md:hidden mt-[3.2rem] border-0 h-[1.2px] w-full !bg-black/50" />
            <ul className="pt-10 !bg-[#F7EEE7] h-screen px-14">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={linkClasses(link.href)}
                    passHref
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <div className="mt-[17rem]">
                <Link href={'/auth/logout-confirmation'}>
                  <li className="text-neutral-700 flex items-center gap-x-3">
                    <Image
                      src="/assets/icons/logout.svg"
                      alt="logout"
                      width={17}
                      height={17}
                    />
                    Logout
                  </li>
                </Link>
                <li className="text-error mt-5">Delete Account</li>
              </div>
            </ul>
          </SheetContent>
        </Sheet>
      </aside>

      {/* DESKTOP SIDEBAR */}
      <aside className="hidden fixed mt-10 md:w-[25%] lg:w-[23%] min-h-screen md:flex flex-col justify-between  pt-24 h-screen z-10 border-r border-r-[#D4D4D4] py-4 px-7">
        <div className="flex h-[90%]  flex-col justify-between">
          <ul className="md:flex flex-col  items-center">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={linkClasses(link.href)}
                  passHref
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex pl-14 items-start flex-col gap-y-10">
            <Link href={"/auth/logout-confirmation"}>
              <li className="text-neutral-900 flex items-center gap-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <path
                    d="M7.91406 6.57754C8.1724 3.57754 9.71406 2.35254 13.0891 2.35254H13.1974C16.9224 2.35254 18.4141 3.84421 18.4141 7.56921V13.0025C18.4141 16.7275 16.9224 18.2192 13.1974 18.2192H13.0891C9.73906 18.2192 8.1974 17.0109 7.9224 14.0609"
                    stroke="#202020"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.999 10.2773H3.51562"
                    stroke="#202020"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.3776 7.48535L2.58594 10.277L5.3776 13.0687"
                    stroke="#FAFAFA"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Logout
              </li>
            </Link>
            <li className="text-error">Delete Account</li>
          </ul>
        </div>
      </aside>
    </>
  );
}
