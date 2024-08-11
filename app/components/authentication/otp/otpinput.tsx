import { Input } from "@/components/ui/input";

const OtpInputComponent = ({
  otp,
  setOtp,
}: {
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const handleChange = (element: { value: any }, index: number) => {
    const value = element.value;
    if (/^[0-9]$/.test(value) || value === "") {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Focus next input
      if (value !== "" && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleKeyDown = (element: { key: string }, index: number) => {
    if (element.key === "Backspace" && index > 0 && otp[index] === "") {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  return (
    <div className="flex justify-center space-x-2">
      {otp.map((data, index) => (
        <Input
          key={index}
          id={`otp-${index}`}
          type="text"
          name="otp"
          maxLength={1}
          value={data}
          onChange={(e) => handleChange(e.target, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onFocus={(e) => e.target.select()}
          className="w-9 h-9 md:w-14 md:h-14 text-center text-base md:text-x rounded-none border-none focus:outline-none"
        />
      ))}
    </div>
  );
};

export default OtpInputComponent;
