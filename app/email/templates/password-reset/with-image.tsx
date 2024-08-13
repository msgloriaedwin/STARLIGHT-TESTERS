import React from "react";
import EmailLayout from "../../layout/layout";
import Image from "next/image";
import resetPasswordImage from "../../../../public/assets/email-assets/bro.svg";

interface ResetPasswordEmailProps {
  name: string;
  resetLink: string;
}

const ResetPasswordEmail: React.FC<ResetPasswordEmailProps> = ({
  name,
  resetLink,
}) => {
  return (
    <EmailLayout
      title="Reset Your Password"
      imageSrc={resetPasswordImage}
      imageAlt="reset password"
    >
      <div className="p-6 sm:p-8">
        <div className="bg-white ">
          <p className="mb-4">Hi {name},</p>
          <p className="mb-4">
            It looks like you requested to reset your password for your Remote
            Bingo account. No worries—we&apos;re here to help!
          </p>
          <p className="mb-4">
            To reset your password, please click the link below:
          </p>
          <p className="mb-4">
            <a href={resetLink} className="text-primary-blue hover:underline">
              {resetLink}
            </a>
          </p>
          <p className="mb-4">
            If you didn&apos;t request a password reset, you can safely ignore
            this email. Your account is secure, and no changes will be made.
          </p>
          <p className="mb-4">
            For any further assistance or if you have any questions, feel free
            to reach out to our support team at{" "}
            <a
              href="mailto:team@remotebingo.com"
              className="text-primary-blue hover:underline"
            >
              team@remotebingo.com
            </a>
          </p>
          <p className="mb-2">Best regards,</p>
          <p>The Remote Bingo Team</p>
        </div>
      </div>
    </EmailLayout>
  );
};

export default ResetPasswordEmail;
