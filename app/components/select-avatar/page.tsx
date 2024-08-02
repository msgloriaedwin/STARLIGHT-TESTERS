"use client";
import React, { useState } from "react";
import AvatarSelection from "./avatarSelectionButton";
import RBAvatarSelection from ".";

interface Avatars {
  id: number;
  imgSrc: string;
}

const page = () => {
  const avatars = [
    { id: "1", imgSrc: "/assets/images/modalpic2.png" },
    { id: "2", imgSrc: "/assets/images/modalpic1.png" },
    { id: "3", imgSrc: "/assets/images/modalpic3.png" },
    { id: "4", imgSrc: "/assets/images/modalpic1.png" },
    { id: "5", imgSrc: "/assets/images/modalpic4.png" },
    { id: "6", imgSrc: "/assets/images/modalpic1.png" },
    { id: "7", imgSrc: "/assets/images/modalpic1.png" },
    { id: "8", imgSrc: "/assets/images/modalpic2.png" },
    { id: "9", imgSrc: "/assets/images/modalpic1.png" },
    { id: "10", imgSrc: "/assets/images/modalpic1.png" },
    { id: "11", imgSrc: "/assets/images/modalpic1.png" },
    { id: "12", imgSrc: "/assets/images/modalpic1.png" },
    { id: "13", imgSrc: "/assets/images/modalpic1.png" },
    { id: "14", imgSrc: "/assets/images/modalpic1.png" },
  ];
  

  const handleAvatarSelect = (imgSrc: string) => {
    console.log("Selected Avatar:", imgSrc);
    // You can perform additional actions here, such as updating the state or making an API call
  };
  return (
    <div className="space-x-3">
      <RBAvatarSelection
      
        avatars={avatars}
        label="Select Your Avatar"
        itemsPerPage={5} // Number of avatars to show per page
        onAvatarSelect={handleAvatarSelect}
      />
    </div>
  );
};

export default page;
