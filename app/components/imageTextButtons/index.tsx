import Image from "next/image";
import logo from "../../../public/assets/images/Remote Bingo Logo A.png";

interface ImageTextButtonsProps {
  message: string;
  children: React.ReactNode;
}

const ImageTextButtons = ({ message, children }: ImageTextButtonsProps) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        className="w-full h-auto max-w-[242.678px] max-h-[99.85px] md:max-w-[321.49px] md:max-h-[132.277px]"
        src={logo}
        alt="Remote Bingo"
      />
      <p className="max-w-[380px] md:max-w-[570px] text-center font-bold text-neutral-700 font-dm-sans custom-font-features text-[24px] leading-[28px] md:text-[36px] md:leading-[46px]">
        {message}
      </p>
      <div className="flex justify-center items-center space-x-4 mt-4">
        {children}
      </div>
    </div>
  );
};

export default ImageTextButtons;
