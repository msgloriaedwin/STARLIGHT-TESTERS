import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-body">
      <div className="px-6 py-8 md:px-20 md:py-6">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="pb-8 md:pb-0">
            <Image
              src="/assets/images/Remote Bingo Logo.svg"
              alt="Remote Bingo Logo"
              width={113}
              height={46.5}
            />
          </div>
          <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
            <p className="text-primary-500 font-bold">Company</p>
            <p className="text-primary-700 font-normal pt-6">About</p>
            <p className="text-primary-700 font-normal pt-4">Contact</p>
          </div>
          <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
            <p className="text-primary-500 font-bold">Resources</p>
            <p className="text-primary-700 font-normal pt-6">How to play</p>
            <p className="text-primary-700 font-normal pt-4">Community</p>
          </div>
          <div className="mb-8 md:mb-0 md:mr-8 text-center md:text-left">
            <p className="text-primary-500 font-bold">Legal</p>
            <div className="text-primary-700 font-normal pt-6">
              <Link href={"/terms-and-privacy"}>Privacy Policy</Link>
            </div>
            <div className="text-primary-700 font-normal pt-4">
              <Link href={"/terms-and-privacy"}>Terms of Service</Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <a
              href=""
              className="h-11 w-11 bg-primary-300 rounded-lg flex justify-center items-center text-xl text-white transition-all duration-400 ease-in-out mr-2"
            >
              <Image
                src="/assets/icons/XLogo.svg"
                alt="twitter link"
                width={24}
                height={24}
              />
            </a>
            <a
              href=""
              className="h-11 w-11 bg-primary-300 rounded-lg flex justify-center items-center text-xl text-white transition-all duration-400 ease-in-out mr-2"
            >
              <Image
                src="/assets/icons/Instagram Icon.svg"
                alt="instagram link"
                width={24}
                height={24}
              />
            </a>
            <a
              href=""
              className="h-11 w-11 bg-primary-300 rounded-lg flex justify-center items-center text-xl text-white transition-all duration-400 ease-in-out"
            >
              <Image
                src="/assets/icons/facebook.svg"
                alt="facebook link"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[#e2e2e2] flex justify-between">
          <div>
            <span className="text-neutral-500 text-center font-normal">
              &copy; Remote Bingo LTD.
            </span>
          </div>
          <div>
            <span className="text-neutral-500 text-center font-normal">
              English (UK)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;