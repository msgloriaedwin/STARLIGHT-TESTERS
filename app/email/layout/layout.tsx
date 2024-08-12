import React, { ReactNode } from "react";
import { Twitter, Instagram, Linkedin, Facebook } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import bingoLogo from "../../../public/bingo-logo.svg";

interface EmailLayoutProps {
  children: ReactNode;
  title: string;
  imageSrc?: StaticImageData | string;
  imageAlt?: string;
}

const EmailLayout: React.FC<EmailLayoutProps> = ({
  children,
  title,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="min-h-screen bg-body">
      <nav className="w-full py-3 bg-transparent md:bg-body ">
        <div className="flex justify-center items-center  mb-2">
          <Image
            src={bingoLogo}
            alt="Bingo Logo"
            width={150}
            height={40}
            priority
          />
        </div>
      </nav>
      <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex justify-center items-center  mb-6">
          <div className="flex bg-inherit justify-center items-center  mb-6">
            {imageSrc && (
              <Image
                src={imageSrc}
                alt={imageAlt || "image"}
                width={187}
                height={197}
                priority
              />
            )}
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-6 text-center">{title}</h1>
        <div className="bg-white shadow-custom-inset rounded-lg overflow-hidden">
          {children}
        </div>
        <div className="mt-4 text-center text-sm text-neutral-600">
          <div className="flex justify-center space-x-4 mb-2">
            <a href="#" className="text-neutral-600 hover:text-primary-blue">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-neutral-600 hover:text-primary-blue">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-neutral-600 hover:text-primary-blue">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-neutral-600 hover:text-primary-blue">
              <Facebook size={20} />
            </a>
          </div>
          <p className="text-xs">
            You are receiving this email because you just signed up for Remote
            Bingo. If you did not sign up or believe this message was sent in
            error, please contact our support team immediately
          </p>
          <p className="mt-2 text-xs">
            If these emails get annoying, please feel free to{" "}
            <a href="#" className="text-primary-blue hover:underline">
              unsubscribe
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailLayout;
