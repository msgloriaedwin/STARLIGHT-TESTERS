import React from "react";
import Link from "next/link";
import Image from "next/image";
import verifyEmail from "../../../../public/assets/images/verify-email.svg";

const VerifyEmail: React.FC = () => {
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
            Verify your Email
          </h1>
          <p className="text-center mb-4">
            Almost there! We&apos;ve sent a verification email to
            j*****@gmail.com. You need to verify your email address to log into
            Remotebingo
          </p>
          <div className="flex justify-center mb-6">
            <Image
              src={verifyEmail}
              alt="Email verification"
              width={200}
              height={200}
            />
          </div>
          <button className="w-full bg-error hover:bg-primary-pink text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
            Resend email
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
