import { CircleAlert } from "lucide-react";

interface Props {
  error?: string | React.ReactNode;
  className?: string;
}
function RBInputErrorMessage({ error, className = "" }: Props) {
  if (!error) return <></>;

  return (
    <div className={`flex gap-1 items-center text-error ${className}`}>
      <CircleAlert className="w-4 h-4" aria-hidden="true" />
      <span className="text-sm" role="alert">
        {error}
      </span>
    </div>
  );
}

export default RBInputErrorMessage;
