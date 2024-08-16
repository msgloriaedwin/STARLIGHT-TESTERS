"use client";
import { useState } from "react";
import React from "react";
import ChatInput from ".";
import Image from "next/image";

const Page = () => {
  const [gif, setGif] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="flex items-center justify-center w-screen border-solid border-gray-950">
      {gif && <Image src={gif} alt="" width={50} height={50} />}
      {message && <p>{message}</p>}
      <ChatInput
        sendMessage={(data: any) => {
          setMessage(data);
        }}
        setMessage={() => {}}
        handleSelectGif={(data: any) => {
          setGif(data);
        }}
      />
    </div>
  );
};

export default Page;
