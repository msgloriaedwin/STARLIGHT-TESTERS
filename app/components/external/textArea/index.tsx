interface TextInputProps {
  label: string;
  error: boolean;
  setValue: (data: string) => void;
  value: string;
  placeholder: string;
}

const TextArea = ({
  label,
  error,
  setValue,
  value,
  placeholder,
}: TextInputProps) => {
  return (
    <div className="my-3 relative">
      <label className="font-light my-2 text-dark text-primary-500">
        {label}
      </label>
      <div>
        <textarea
          className={`min-h-[10rem] block py-3 px-2 w-full border-solid border-[1.5px]  bg-transparent text-dark placeholder-gray-950
          focus:outline-none focus:border-primary-500 ${
            error ? "border-error" : "border-gray-950"
          } border-gray-2 rounded overflow-hidden  placeholder:font-300 `}
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        ></textarea>
      </div>

      {error && (
        <p className="text-error text-[14px] font-[400]">
          {label} cannot be empty!
        </p>
      )}
    </div>
  );
};

export default TextArea;
