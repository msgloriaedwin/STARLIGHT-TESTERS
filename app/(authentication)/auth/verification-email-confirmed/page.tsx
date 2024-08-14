import React from "react";
import Link from "next/link";
import Image from "next/image";
import emailConfirmed from "../../../../public/assets/images/email-confirmed.svg";

const EmailVerified: React.FC = () => {
  return (
    <div className="min-h-screen bg-secondary-cream flex flex-col">
      <div className="bg-white p-4">
        <Link href="/back" className="text-primary-blue">
          ← Back
        </Link>
      </div>
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Email Verified!
          </h1>
          <p className="text-center mb-6">
            You&apos;re all set! Your email has been successfully verified, and
            your Remote Bingo account is now activated. You can now log in and
            start enjoying the full Remote Bingo experience.
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src={emailConfirmed}
              alt="Email verified"
              width={200}
              height={200}
            />
          </div>
          <Link href="/login" className="block w-full">
            <button className="w-full bg-primary-blue hover:bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailVerified;
