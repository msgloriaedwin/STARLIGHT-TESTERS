"use client";
import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

interface AvatarSelectionProps {
  imgSrc: string;
  isSelected: boolean;
  onClick: () => void;
  size?: number;
  borderColor?: string;
  selectedBgColor?: string;
  checkIconColor?: string;
}

const AvatarSelection = ({
  imgSrc,
  isSelected,
  onClick,
  size = 60,
  borderColor = "primary-700",
  selectedBgColor = "primary-700",
  checkIconColor = "primary-800",
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
