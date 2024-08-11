import { Info } from "lucide-react";

type Props = {
  helperText: React.ReactNode;
  className?: string;
};

function RBInputHelperText({ helperText, className = "" }: Props) {
  return (
    <div className={`flex gap-1 items-start text-xs md:text-sm ${className}`}>
      <Info className="w-4 h-4 text-gray-500" aria-label="Information" />
      <span>{helperText}</span>
    </div>
  );
}

export default RBInputHelperText;
