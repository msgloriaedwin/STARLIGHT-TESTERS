interface SwitchButtonProps {
  active: boolean;
  text: string;
  clickHandler: () => void;
}
const SwitchButton = ({ active, text, clickHandler }: SwitchButtonProps) => {
  return (
    <button
      className={`outline-none w-full block p-3 rounded-md ${
        active
          ? "font-bold bg-primary-yellow  shadow-custom-inset  text-primary-900 hover:bg-primary-yellow-400 dark:bg-slate-50 dark:text-primary-900 dark:hover:bg-slate-50/90"
          : "border-[#1A1A1A] border-[1px] border-solid"
      }`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default SwitchButton;
