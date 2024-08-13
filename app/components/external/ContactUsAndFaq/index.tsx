import { useState } from "react";
import Faqs from "../FAQ/FAQs";
import SwitchButton from "../SwitchBtn";
import ContactUs from "../contactUs";

const ContactUsAndFAq = () => {
  const [screen, setScreen] = useState("faqs");
  return (
    <div className="pt-[4rem] px-4 md:px-20 mt-10">
      <h2 className="text-primary-500 font-bold text-[24px] md:text-[40px] my-8">
        {screen === "contact" && " Contact Us"}
        {screen === "faqs" && "Faqs"}
      </h2>
      <div>
        <div
          className="flex items-center gap-6 md:justify-between mb-10 "
          style={{ overflow: "none" }}
        >
          <div className="w-[284px] md:w-full">
            <SwitchButton
              active={screen === "contact" ? true : false}
              text="Contact Our Support Team"
              clickHandler={() => {
                setScreen("contact");
              }}
            />
          </div>
          <div className="w-[284px] md:w-full">
            <SwitchButton
              active={screen === "faqs" ? true : false}
              text="Frequently Asked Questions"
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
