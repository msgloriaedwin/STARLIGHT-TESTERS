import { useState } from "react";
import Faqs from "../FAQ/FAQs";
import SwitchButton from "../SwitchBtn";
import ContactUs from "../contactUs";
import { useTranslations } from "next-intl";

const ContactUsAndFAq = () => {
  const [screen, setScreen] = useState("contact");
  const t = useTranslations("contactUs");
  return (
    <div className="pt-[4rem] px-4 md:px-20 mt-10">
      <h2 className="text-primary-500 font-bold text-[24px] md:text-[40px] my-8">
        {screen === "contact" && t("headerContact")}
        {screen === "faqs" && t("headerFaqs")}
      </h2>
      <div>
        <div className="flex items-center gap-6 md:justify-between mb-4 overflow-x-auto md:overflow-x-hidden">
          <div className="min-w-[284px] border-[2px] md:w-full">
            <SwitchButton
              active={screen === "contact" ? true : false}
              text={t("contactButtonText")}
              clickHandler={() => {
                setScreen("contact");
              }}
            />
          </div>
          <div className="min-w-[284px] md:w-full">
            <SwitchButton
              active={screen === "faqs" ? true : false}
              text={t("faqsButtonText")}
              clickHandler={() => {
                setScreen("faqs");
              }}
            />
          </div>
        </div>
        {screen === "faqs" && <Faqs />}
        {screen === "contact" && <ContactUs />}
      </div>
    </div>
  );
};

export default ContactUsAndFAq;
