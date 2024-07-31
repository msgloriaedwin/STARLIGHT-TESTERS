"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface AvatarSelectionProps {
  avatars: string[];
  onSelect: (avatar: string) => void;
}

const AvatarSelection: React.FC<AvatarSelectionProps> = ({
  avatars,
  onSelect,
}) => {
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);

  const handleSelect = (avatar: string) => {
    setSelectedAvatar(avatar);
    onSelect(avatar);
  };

  return (
    <div className="p-4 bg-blue-50 border border-gray-300 rounded-md">
      <div className="mb-4 font-bold text-lg">Select avatar</div>
      <div className="grid grid-cols-5 gap-4">
        {avatars.map((avatar, index) => (
          <Button
            key={index}
            onClick={() => handleSelect(avatar)}
            className={`flex justify-center items-center w-full p-2 rounded-full transition duration-200 ${
              selectedAvatar === avatar
                ? "border-2 border-teal-500"
                : "border-2 border-transparent"
            } hover:border-teal-500`}
          >
            <Avatar className="w-20 h-20">
              <AvatarImage src={avatar} alt={`Avatar ${index + 1}`} />
              <AvatarFallback>?</AvatarFallback>
            </Avatar>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelection;
