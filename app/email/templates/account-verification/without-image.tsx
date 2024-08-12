import React from "react";
import EmailLayout from "../../layout/layout";

interface EmailVerificationProps {
  name: string;
  verificationLink: string;
}

const EmailVerification: React.FC<EmailVerificationProps> = ({
  name,
  verificationLink,
}) => {
  return (
    <EmailLayout title="Email Verification">
      <div className="p-6 sm:p-8">
        <div className="bg-white">
          <p className="mb-4">Hi {name},</p>
          <p className="mb-4">
            Welcome to Remote Bingo! Before you can start enjoying our platform,
            we need to verify your email address.
          </p>
          <p className="mb-4">
            Please click the link below to verify your email:
          </p>
          <p className="mb-4 text-center">
            <a
              href={verificationLink}
              className="bg-primary-blue text-white px-4 py-2 rounded hover:bg-primary-600"
            >
              Verify Account
            </a>
          </p>
          <p className="mb-4">
            This link will confirm your email address and activate your account.
          </p>
          <p className="mb-4">
            If you didn&apos;t create an account with Remote Bingo, please
            ignore this email.
          </p>
          <p className="mb-2">Best regards,</p>
          <p>The Remote Bingo Team</p>
        </div>
      </div>
    </EmailLayout>
  );
};

export default EmailVerification;
