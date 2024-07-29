
type Props = { label: string };

function RBInputLabel({ label }: Props) {
  return (
    <div className="mb-1  text-[#00222E] font-dm-sans text-base font-normal not-italic">
      {label}
    </div>
  );
}

export default RBInputLabel;
