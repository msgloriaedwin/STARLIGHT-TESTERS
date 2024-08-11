type Props = { label: string; className?: string };

function RBInputLabel({ label, className = "" }: Props) {
  return (
    <div
      className={`mb-1 text-primary-900 font-dm-sans text-sm font-normal not-italic ${className}`}
    >
      {label}
    </div>
  );
}

export default RBInputLabel;
