import React from "react";
import CustomButton from "../button/custombutton";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="pt-32 flex items-center flex-col gap-5 justify-between max-w-[1200px] mx-auto lg:flex-row pb-20">
      <div className=" mx-auto px-2 sm:px-4 text-center lg:text-start">
        <h1 className="text-[2.25rem] sm:text-[3rem] lg:text-[4rem] leading-[1.2] font-bold text-primary-700 mb-4">
          Engage your team with online bingo!
        </h1>
        <p className="text-lg text-primary-700 lg:text-black mb-8">
          Connect, play, and celebrate from anywhere with Remote Bingo!
          Customize your game or join exciting sessions with friends &
          colleagues and win!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 w-full">
          <CustomButton variant="secondary" className="!h-12 !w-full">
            Create a Bingo Game
          </CustomButton>
          <form className="flex  items-center pl-2 pr-2.5 justify-between border border-primary-700 h-12 bg-white rounded-lg w-full sm:max-w-[50%] ">
            <input
              type="text"
              placeholder="Enter Game Pin/Link"
              className=" text-sm border-0 outline-0 !bg-transparent  max-w-[50%] h-12"
            />
            <button className=" text-primary-700 whitespace-nowrap text-sm">
              Join Bingo
            </button>
          </form>
        </div>
      </div>
      <div className=" w-full lg:max-w-[50%] mx-auto">
        <Image
          src="/bingo-hero.png"
          alt="Bingo Card"
          width={1000}
          height={1000}
          className="w-full h-auto mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
