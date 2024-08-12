import React from "react";
import EmailLayout from "../../layout/layout";
import emailConfirmed from "../../../../public/assets/email-assets/emailConfirmed.svg";

interface EmailConfirmedProps {
  name: string;
}

const EmailConfirmed: React.FC<EmailConfirmedProps> = ({ name }) => {
  return (
    <EmailLayout
      title="Email Confirmed"
      imageSrc={emailConfirmed}
      imageAlt="Email Confirmed"
    >
      <div className="p-6 sm:p-8">
        <div className="bg-white">
          <p className="mb-4">Hi {name},</p>
          <p className="mb-4">
            Thank you for verifying your email address! Your Remote Bingo
            account is now fully activated, and you&apos;re all set to start
            exploring our platform.
          </p>
          <p className="mb-4">
            You can now enjoy all the features and benefits we offer, including
            exclusive access to main features and personalized content.
          </p>
          <p className="mb-4">
            If you have any questions or need assistance, feel free to reach out
            to our support team. We&apos;re here to help!
          </p>
          <p className="mb-2">Best regards,</p>
          <p>The Remote Bingo Team</p>
        </div>
      </div>
    </EmailLayout>
  );
};

export default EmailConfirmed;
