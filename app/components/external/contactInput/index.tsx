import { useTranslations } from 'next-intl';

interface TextInputProps {
  label: string;
  error: boolean;
  setValue: (data: string) => void;
  value: string;
  placeholder: string;
}

const TextInput = ({
  label,
  error,
  setValue,
  value,
  placeholder,
}: TextInputProps) => {
  const t = useTranslations('contactInput');
  return (
    <div className="my-3 relative">
      <label className="font-light my-2 text-dark text-primary-500">
        {label}
      </label>
      <input
        type="text"
        className={`py-3 px-2 w-full border-solid border-[1.5px] bg-transparent text-dark  placeholder-gray-400
        focus:outline-none focus:border-primary-500 ${
          error ? "border-error" : "border-gray-950"
        } border-gray-2 rounded overflow-hidden  placeholder:font-300 `}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      {error && (
        <p className="text-error text-[14px] font-[400]">
          {label} {t('errorText')}
        </p>
      )}
    </div>
  );
};

export default TextInput;
