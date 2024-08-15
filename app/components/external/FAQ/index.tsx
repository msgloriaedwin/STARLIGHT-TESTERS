import { ChevronUp, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useTranslations } from "next-intl";

interface FAQProps {
  answer: string;
  question: string;
  index: number;
}
const FAQ = ({ answer, question, index }: FAQProps) => {
  const faqRef: any = useRef();
  const [showAnsser, setAnsShow] = useState(false);
  const t = useTranslations("faq");

  const handlerShowAnser = () => {
    setAnsShow(!showAnsser);
  };

  const handleClickOutside = (event: any) => {
    if (faqRef.current && !faqRef.current.contains(event.target)) {
      setAnsShow(false);
    }
  };

  useEffect(() => {
    if (showAnsser) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAnsser]);
  return (
    <div ref={faqRef} className="mt-3 md:mt-0 relative">
      <div
        className="flex items-center justify-between p-3 w-full border-[#1A1A1A] border-[1px] border-solid rounded-sm  cursor-pointer"
        onClick={() => {
          handlerShowAnser();
        }}
      >
        {/* <p>{t(`${question}`)}</p> */}
        {question}
        {showAnsser ? <ChevronUp /> : <ChevronDown />}
      </div>
      {showAnsser && (
        <p
          className="p-3 w-full border-[#1A1A1A] border-[1px] border-solid rounded-sm mt-1 absolute top-13 left-0 bg-body"
          style={{ zIndex: index + 1 }}
        >
          {/* {t(`${answer}`)} */}
          {answer}
        </p>
      )}
    </div>
  );
};
export default FAQ;
