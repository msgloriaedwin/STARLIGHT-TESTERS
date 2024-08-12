import React from "react";
import EmailLayout from "../../layout/layout";
import resetConfirmed from "../../../../public/assets/email-assets/resetConfirmed.svg";

interface PasswordResetCompleteEmailProps {
  name: string;
}

const PasswordResetCompleteEmail: React.FC<PasswordResetCompleteEmailProps> = ({
  name,
}) => {
  return (
    <EmailLayout
      title="Password Reset Complete"
      imageSrc={resetConfirmed}
      imageAlt="Password Reset Confirmed"
    >
      <div className="p-6 sm:p-8">
        <div className="bg-white">
          <p className="mb-4">Hi {name},</p>
          <p className="mb-4">
            This is a confirmation that your password for your Remote Bingo
            account has been successfully reset. You can now log in using your
            new password.
          </p>
          <p className="mb-4">
            If you didn&apos;t make this change, please contact our support team
            immediately on{" "}
            <a
              href="mailto:team@remotebingo.com"
              className="text-primary-blue hover:underline"
            >
              team@remotebingo.com
            </a>{" "}
            so we can secure your account.
          </p>
          <p className="mb-2">Best regards,</p>
          <p>The Remote Bingo Team</p>
        </div>
      </div>
    </EmailLayout>
  );
};

export default PasswordResetCompleteEmail;
