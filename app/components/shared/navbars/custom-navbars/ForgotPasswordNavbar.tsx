"use client";
import { ArrowLeft, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import CustomButton from "../../button/custombutton";
import Link from "next/link";

export default function ForgotPasswordNavbar() {
  const handleHowToPlayClick = () => { };

  const router = useRouter();
  return (
    <nav className="bg-white w-full px-4 md:px-20 py-4 md:py-6 flex items-center justify-between">
      <button
        onClick={() => router.back()}
        className="text-neutral-700 flex gap-1 items-center border border-primary-700 rounded-md px-3 py-1.5"
      >
        <ArrowLeft className="text-primary-700" />{" "}
        <span className="text-primary-700">Back</span>
      </button>
      <div className="md:hidden flex">
        <Sheet>
          <SheetTrigger asChild>
            <button className="flex md:hidden items-center mr-4 bg-primary-700  shadow-custom-inset border rounded-[8px] gap-[.5em] text-white justify-center py-[10px] px-4 outline-1"
            >
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent className="w-[80%] min-h-[calc(100vh-80px)] bg-white z-[100]  rounded-r-[10px] ">
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
                  <CustomButton className="w-full" onClick={() => router.push('/auth/signup')}
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
  );
}
