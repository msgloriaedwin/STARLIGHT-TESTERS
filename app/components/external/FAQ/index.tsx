import { ChevronUp, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useTranslations } from 'next-intl';

const FAQ = () => {
  const faqRef: any = useRef();
  const [showAnsser, setAnsShow] = useState(false);
  const t = useTranslations('faq');

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
    <div ref={faqRef} className="mt-3 md:mt-0">
      <div
        className="flex items-center justify-between p-3 w-full border-[#1A1A1A] border-[1px] border-solid rounded-sm  cursor-pointer"
        onClick={() => {
          handlerShowAnser();
        }}
      >
        <p>{t('question')}</p>
        {showAnsser ? <ChevronUp /> : <ChevronDown />}
      </div>
      {showAnsser && (
        <p className="p-3 w-full border-[#1A1A1A] border-[1px] border-solid rounded-sm mt-1">
       {t('answer')}{" "}
        </p>
      )}
    </div>
  );
};
export default FAQ;
