'use client'
import React from "react";
import AvatarSelection from "./avatarSelectionButton";

type Props = {};

const page = (props: Props) => {
  const avatars = [
    "/assets/images/modalpic1.png",
    "/assets/images/modalpic1.png",
    "/assets/images/modalpic1.png",
    "/assets/images/modalpic1.png",
    "/assets/images/modalpic1.png",
  ];

  const handleAvatarSelect = (avatar: string) => {
    console.log("Selected avatar:", avatar);
  };

  return (
    <div>
      <AvatarSelection avatars={avatars} onSelect={handleAvatarSelect} />
    </div>
  );
};

export default page;
