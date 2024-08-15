import { useState, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTranslations } from "next-intl";
interface SelectInputProps {
  value: string;
  placeholder: string;
  setValue: (data: string) => void;
  data: string[];
  label: string;
  error: boolean;
}
const SelectInput = ({
  value,
  placeholder,
  setValue,
  data,
  label,
  error,
}: SelectInputProps) => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropDownRef: any = useRef();
  const t = useTranslations("contactInput");

  return (
    <div className={` w-full  my-3 relative`}>
      <div className={`  border-solid   `}>
        <label className="font-light my-2 text-dark text-primary-500">
          {label}
        </label>
        <input
          readOnly
          onClick={() => {
            setShowDropDown(true);
          }}
          onBlur={(e) => {
            if (!dropDownRef.current.contains(e.relatedTarget)) {
              setShowDropDown(false);
            }
          }}
          placeholder={placeholder}
          value={value}
          className={`py-3 ${
            error ? "border-error" : "border-gray-950"
          } px-2 w-full border-solid border-[1.5px]  bg-transparent text-dark  
            focus:outline-none  placeholder-gray-400 focus:border-primary-500  border-gray-2 rounded overflow-hidden text-font-light 
           `}
        ></input>
        <div className="absolute top-[40px] right-2 ">
          {showDropDown ? <ChevronUp /> : <ChevronDown />}
        </div>
        {error && (
          <p className="text-error text-[14px] font-[400]">
            {label} {t("errorText")}
          </p>
        )}
      </div>
      {showDropDown && (
        <div className={`w-full cursor-pointer `} ref={dropDownRef}>
          {data.map((item, index) => (
            <div
              key={index}
              tabIndex={0}
              className={`p-2 border-[1px] border-solid border-gray-950 mt-1 rounded`}
              onClick={() => {
                setValue(item);
                setShowDropDown(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectInput;
