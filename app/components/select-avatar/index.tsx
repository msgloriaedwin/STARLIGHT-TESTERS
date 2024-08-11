"use client";
import React, { useState } from "react";
import AvatarSelection from "./avatarSelectionButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Avatar {
  id: string;
  imgSrc: string;
}

interface RBAvatarSelectionProps {
  avatars: Avatar[]; // Array of avatar image URLs
  label: string; // Label for the avatar selection section
  itemsPerPage: number; // Number of avatars to display per page
  onAvatarSelect: (id: string) => void; // Callback function when an avatar is selected
}

const RBAvatarSelection: React.FC<RBAvatarSelectionProps> = ({
  avatars,
  label,
  itemsPerPage,
  onAvatarSelect,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  const [selectedAvatarId, setSelectedAvatarId] = useState<string | null>(null);
  const handleAvatarClick = (id: string) => {
    setSelectedAvatarId(id);
    onAvatarSelect(id);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.floor(avatars.length / itemsPerPage))
    );
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const startIndex = currentPage * itemsPerPage;
  const currentAvatars = avatars.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex flex-col items-center ">
      <div className="flex justify-between w-full mb-4">
        <span className="text-xl font-semibold">{label}</span>
        <div className="flex gap-3">
          <ChevronLeft
            className="cursor-pointer"
            onClick={handlePreviousPage}
          />

          <ChevronRight className="cursor-pointer" onClick={handleNextPage} />
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-between items-center gap-4">
        {currentAvatars.map((avatar) => (
          <AvatarSelection
            key={avatar.id}
            imgSrc={avatar.imgSrc}
            isSelected={selectedAvatarId === avatar.id}
            onClick={() => handleAvatarClick(avatar.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default RBAvatarSelection;
