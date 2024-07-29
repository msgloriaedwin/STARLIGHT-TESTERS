type Props = { label: string; className?: string };

function RBInputLabel({ label, className = "" }: Props) {
  return (
    <div
      className={`mb-1 text-[#00222E] font-dm-sans text-base font-normal not-italic ${className}`}
    >
      {label}
    </div>
  );
}

export default RBInputLabel;
