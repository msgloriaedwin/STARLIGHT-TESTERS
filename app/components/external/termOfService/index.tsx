import Link from "next/link";

const TermOfService = () => {
  return (
    <div className="pt-[4rem] px-4 md:px-20 mt-10">
      <h2 className="text-primary-500 font-bold text-[24px] md:text-[40px] my-6">
        Terms of Service{" "}
      </h2>
      <p className="pb-6">
        <span className="text-primary-500 font-bold">
          Welcome to Remote Bingo!
        </span>
        These Terms of Service (“Terms”) govern your access to and use of the
        Remote Bingo platform, including any associated content, features, and
        services (collectively, the “Service”). By using our Service, you agree
        to these Terms. If you do not agree to these Terms, please do not use
        our Service. Your privacy is important to us. This Privacy Policy
        explains how we collect, use, and protect your personal information when
        you use our platform. By accessing or using Remote Bingo, you agree to
        the terms of this Privacy Policy.
      </p>
      <div>
        <div>
          <h3 className="text-primary-500 font-bold">1. Acceptance of Terms</h3>
          <ul className="list-inside list-disc pl-5">
            By accessing or using Remote Bingo, you agree to be bound by these
            Terms, our Privacy Policy, and any additional terms and conditions
            that may apply to specific sections of the Service or to products
            and services available through the Service.
          </ul>
        </div>
        <div className="pb-6 mt-4">
          <h3 className="text-primary-500 font-bold">2. Eligibility</h3>
          <ul className="list-inside list-disc pl-5 pt-4">
            You must be at least 13 years old to use Remote Bingo. By using the
            Service, you represent and warrant that you meet this eligibility
            requirement.
          </ul>
        </div>
        <div className="pb-6 ">
          <h3 className="text-primary-500 font-bold">
            3. Account Registration
          </h3>
          <ul className="list-inside list-disc pl-5 pt-4">
            <p>
              <span className="font-bold"> Account Creation:</span>
              To access certain features of Remote Bingo, you may be required to
              create an account. You agree to provide accurate, current, and
              complete information during the registration process.
            </p>
            <p>
              <span className="font-bold"> Account Security:</span>
              You are responsible for maintaining the confidentiality of your
              account login information and for all activities that occur under
              your account. You agree to notify us immediately of any
              unauthorized use of your account.
            </p>
          </ul>
        </div>
        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">4. Use of the Service</h3>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li>
              <span className="font-bold"> Permitted Use:</span>
              You may use Remote Bingo only for lawful purposes and in
              accordance with these Terms. You agree not to use the Service in
              any way that could damage, disable, or impair the Service.
            </li>{" "}
          </ul>
        </div>
        <div>
          {" "}
          <ul className="list-inside list-disc pl-5">
            <li className="font-bold pb-2">
              Prohibited Conduct:{" "}
              <span className="font-normal"> You agree not to:</span>{" "}
            </li>
            <ul className="list-inside list-disc pl-5">
              <li className="pb-2">
                Use the Service for any illegal or unauthorized purpose.
              </li>
              <li className="pb-2">
                Violate any applicable laws, regulations, or rules.{" "}
              </li>
              <li className="pb-2">
                Interfere with or disrupt the Service, servers, or networks
                connected to the Service.{" "}
              </li>
              <li className="pb-2">
                Use the Service to transmit, distribute, or store material that
                is inappropriate, unlawful, defamatory, or otherwise
                objectionable.
              </li>
            </ul>
          </ul>
        </div>
        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">5. User Content</h3>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li>
              <span className="font-bold"> Ownership:</span>
              You retain ownership of any content you submit, post, or display
              on or through Remote Bingo (collectively, “User Content”). By
              submitting User Content, you grant Remote Bingo a non-exclusive,
              royalty-free, worldwide license to use, display, reproduce, and
              distribute your User Content in connection with operating and
              providing the Service.
            </li>
            <li>
              <span className="font-bold"> Responsibility:</span>
              You are solely responsible for your User Content and any
              consequences of sharing it on the Service. Remote Bingo does not
              endorse any User Content and is not liable for any User Content
              posted by you or other users.:
            </li>{" "}
          </ul>
        </div>
        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">
            6. Game Creation and Participation
          </h3>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li>
              <span className="font-bold"> Custom Games:</span>
              Users may create custom bingo games with settings tailored to
              their preferences. By creating a game, you agree to follow all
              applicable rules and guidelines.
            </li>
            <li>
              <span className="font-bold"> Participation:</span>
              You may join games hosted by others or created by the platform.
              Your participation in these games is subject to the specific rules
              and settings established by the game host.
            </li>
          </ul>
        </div>
        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">
            7. Payment and Subscriptions
          </h3>

          <ul className="list-inside list-disc pl-5 pt-4">
            <li>
              <span className="font-bold"> Subscription Plans:</span>
              Remote Bingo offers both free and premium subscription plans. By
              subscribing to a premium plan, you agree to pay the applicable
              fees and charges.
            </li>
            <li>
              <span className="font-bold"> Billing: </span>
              All payments are processed securely through our payment gateway
              partners. Subscription fees are billed on a recurring basis unless
              canceled in accordance with these Terms. Refunds: Refunds for
              subscriptions may be granted at our discretion and in accordance
              with our refund policy.
            </li>
          </ul>
        </div>
        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">8. Termination</h3>

          <ul className="list-inside list-disc pl-5 pt-4">
            <li>
              <span className="font-bold"> Termination by You:</span>
              You may terminate your account at any time by contacting us at
              [contact email]. Termination of your account will not relieve you
              of any obligations to pay accrued fees or charges.
            </li>
            <li>
              <span className="font-bold"> Termination by Us: </span>
              We may suspend or terminate your access to the Service at any
              time, with or without notice, for conduct that we believe violates
              these Terms or is harmful to other users of the Service, us, or
              third parties.
            </li>
          </ul>
        </div>
        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">
            9. Intellectual Property
          </h3>

          <ul className="list-inside list-disc pl-5 pt-4">
            <li>
              <span className="font-bold"> Ownership:</span>
              Ownership: The Service, including all content, features, and
              functionality, is owned by Remote Bingo or its licensors and is
              protected by intellectual property laws. You agree not to copy,
              modify, create derivative works from, or otherwise exploit any
              part of the Service without our express written permission.
            </li>
            <li>
              <span className="font-bold"> Trademarks: </span>
              Remote Bingo and all related names, logos, product and service
              names, designs, and slogans are trademarks of Remote Bingo or its
              affiliates. You may not use such marks without prior written
              permission.
            </li>
          </ul>
        </div>
        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">10 .Disclaimers</h3>
          <ul className="list-inside list-disc pl-5 pt-4">
            <li>
              <span className="font-bold"> No Warranties: </span>
              The Service is provided “as is” and “as available,” without
              warranties of any kind, either express or implied. Remote Bingo
              disclaims all warranties, including but not limited to, implied
              warranties of merchantability, fitness for a particular purpose,
              and non-infringement.
            </li>
            <li>
              <span className="font-bold"> Limitation of Liability: </span>
              In no event shall Remote Bingo, its affiliates, or their
              licensors, service providers, employees, agents, officers, or
              directors be liable for damages of any kind arising out of or in
              connection with your use, or inability to use, the Service.
            </li>
          </ul>
        </div>
        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">
            11. Governing Law and Dispute Resolution
          </h3>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of Nigeria, without regard to its conflict of law principles.
            Any legal action or proceeding arising under these Terms will be
            brought exclusively in the federal or state courts located in your
            jurisdiction.
          </p>
        </div>
        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">
            12. Changes to These Terms
          </h3>
          <p>
            We may update these Terms from time to time. If we make changes, we
            will provide notice through the Service or by other means to provide
            you the opportunity to review the changes before they take effect.
            Your continued use of the Service after the changes become effective
            constitutes your acceptance of the revised Terms.
          </p>
        </div>
        <div className="pb-6">
          <h3 className="text-primary-500 font-bold">12. Contact Us</h3>
          <p>
            If you have any questions or concerns about these Terms, please
            contact us at
            <Link href="" className="text-primary-500">
              customercare@bingo.com
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermOfService;
