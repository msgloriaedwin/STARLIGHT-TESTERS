"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface AvatarSelectionProps {
  imgSrc: string;
  isSelected: boolean;
  onClick: () => void;
  size?: number; // Optional prop to customize the size
  borderColor?: string; // Optional prop to customize the border color
  selectedBgColor?: string; // Optional prop to customize the background color when selected
  checkIconColor?: string; // Optional prop to customize the check icon color
}

const AvatarSelection = ({
  imgSrc,
  isSelected,
  onClick,
  size = 60, // Default size
  borderColor = "primary-700", // Default border color
  selectedBgColor = "primary-700", // Default background color when selected
  checkIconColor = "primary-800", // Default check icon color
}: AvatarSelectionProps) => {
  return (
    <button
      className={`flex justify-center items-center relative p-1 rounded-[8px] border ${
        isSelected ? "bg-primary-800" : ""
      } focus:outline-none`}
      onClick={onClick}
      style={{
        width: size,
        height: size,
        borderColor: borderColor,
      }}
    >
      <div className="relative" style={{ width: size - 5, height: size - 5 }}>
        <Image
          src={imgSrc}
          alt="User"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      {isSelected && (
        <div
          className="absolute top-0 right-0 bg-white rounded-full p-1 flex justify-center items-center"
          style={{ width: size / 5, height: size / 5 }}
        >
          <Check className="w-full h-full" style={{ color: checkIconColor }} />
        </div>
      )}
    </button>
  );
};

export default AvatarSelection;
