import React from 'react';
import Image from 'next/image';

interface RadioButtonProps {
  id: string;
  value: string;
  selectedValue: string;
  onSelect: (value: string) => void;
  label: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  selectedValue,
  onSelect,
  label,
}) => {
  const isSelected = selectedValue === value;

  return (
    <button
      type="button"
      className={`flex items-center justify-center w-[129px] h-[56px] cursor-pointer rounded-md relative hover:bg-primary-yellow-300 ${
        isSelected
          ? 'bg-primary-yellow-300 border border-primary-900'
          : 'bg-primary-100 border border-primary-900'
      }`}
      onClick={() => onSelect(value)}
    >
      <span className='text-primary-900'>{label}</span>
      {isSelected && (
        <div className="absolute top-1 right-1">
          <Image
            src="/assets/icons/Check.svg"
            alt="Selected"
            width={16}
            height={16}
          />
        </div>
      )}
    </button>
  );
};

export default RadioButton;
