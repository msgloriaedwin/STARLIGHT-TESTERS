import React from "react";
import Image from "next/image";
import EmailLayout from "../../layout/layout";
import bingoLogo from "../../../../public/bingo-logo.svg";
import welcomeImage from "../../../../public/assets/email-assets/cuate.jpg";

interface WelcomeEmailProps {
  name: string;
}

const WelcomeEmail: React.FC<WelcomeEmailProps> = ({ name }) => {
  return (
    <EmailLayout title="Welcome to Remote Bingo!">
      <div className="p-6 sm:p-8">
        <div className="bg-white">
          <p className="mb-4">Hi {name},</p>
          <p className="mb-4">
            We&apos;re excited to have you on board with Remote Bingo, where
            learning meets fun in an innovative and engaging way. Our platform
            is designed to enhance your experience and make learning more
            enjoyable.
          </p>
          <p className="font-semibold mb-2">
            Here&apos;s what you can look forward to:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              Interactive Learning: Engage with AI-powered bingo games that make
              learning both fun and effective.
            </li>
            <li>
              Exclusive Offers: Access special promotions, discounts, and
              resources tailored just for our members.
            </li>
            <li>
              Dedicated Support: We&apos;re here to help! Reach out to our
              support team for any technical issues or assistance.
            </li>
          </ul>
          <p className="mb-4">
            If you have any questions or comments just email{" "}
            <a
              href="mailto:team@remotebingo.com"
              className="text-primary-blue hover:underline"
            >
              team@remotebingo.com
            </a>
            . We would love to hear from you
          </p>
          <p className="mb-2">Best regards,</p>
          <p>The Remote Bingo Team</p>
        </div>
      </div>
    </EmailLayout>
  );
};

export default WelcomeEmail;
