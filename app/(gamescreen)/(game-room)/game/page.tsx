"use client";
import MessageBubble from "@/app/components/messageBubble/MessageBubble";
import Player from "@/app/components/player/Player";
import React, { useState } from "react";
import player1 from "../../../../public/assets/images/avatar-1.png";
import Message from "@/app/components/message";
import ChatInput from "@/app/components/chatBoxWithEmoji";
const Page = () => {
  const [message, setMessage] = useState<string>("");

  const sendMessage: any = (data: string) => {
    setMessage(data);
  };

  return (
    <section className="w-full relative flex  flex-col items-center justify-center mt-[3rem]">
      <div className="grid grid-cols-4 gap-2 p-2 w-full">
        <div className="col-span-4 flex items-center justify-center w-[90%] m-auto ">
          <Message right={true} />
        </div>
        <div className="col-span-1 row-span-3 flex flex-col translate-x-[-3rem] md:translate-x-[0]">
          <Message right={true} />
          <Message right={true} />
          <Message
            right={true}
            showMessage={message ? true : false}
            message={message}
          />
        </div>
        <div className="col-span-2 row-span-3 flex justify-center items-center">
          animation
        </div>
        <div className="col-span-1 row-span-3 flex flex-col justify-end items-end ml-[5rem]">
          <div className="flex flex-col justify-end items-end ml-[15rem]">
            <Message right={false} />
            <Message right={false} />
            <Message right={false} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ChatInput sendMessage={sendMessage} />
      </div>
    </section>
  );
};

export default Page;
