"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowUp } from "lucide-react";
import emojiIcon from "../../../public/emojiIcon.svg";
import Image from "next/image";
import createIcon from "../../../public/create.svg";
import gifIcon from "../../../public/gif.svg";
import { defaultEmoji } from "./data";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });
const ChatInput: React.FC = () => {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSend = () => {
    if (message.trim()) {
      setMessage("");
    }
  };

  const handleShowEmoji = () => {
    setShowPicker(!showPicker);
  };

  const handleSelectEmoji = (emojiObject: any, event: any) => {
    setMessage((previousData) => previousData + emojiObject.emoji);
  };

  return (
    <div className="max-w-[492px] m-auto px-4">
      <div className="relative border border-neutral-600 h-12 bg-[#FFFDFD80] rounded-[24px]">
        <input
          placeholder="Type your message"
          className="w-full h-full rounded-[24px] px-[20px] outline-none text-[14px] placeholder:text-border-neutral-600"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onFocus={() => {
            setShowPicker(false);
          }}
        />
        <div className="absolute flex items-center top-2 right-2 gap-2">
          <button onClick={handleShowEmoji} className="hidden md:inline-block">
            <Image alt="emoji icon" src={emojiIcon} width={50} height={50} />
          </button>
          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className={`ml-2 p-1 rounded-full ${
              message.trim()
                ? "bg-neutral-600 hover:bg-neutral-800"
                : "bg-neutral-300"
            }`}
          >
            <ArrowUp className="text-white" />
          </button>
        </div>
      </div>
      {!showPicker && (
        <div className="flex w-full items-center justify-center mt-4">
          <div className="flex gap-[21px] ">
            <div className="hidden lg:flex items-center">
              <button>
                <Image alt="create" src={createIcon} height={32} width={88} />
              </button>
            </div>
            <div className="flex items-center">
              <button>
                <Image alt="create" src={gifIcon} height={17.7} width={27.5} />
              </button>
            </div>
            {defaultEmoji.map((item: any, index: number) => {
              return (
                <div className="flex items-center" key={index}>
                  <button
                    onClick={() => {
                      setMessage((previousData) => previousData + item.emoji);
                    }}
                  >
                    <Image
                      alt="create"
                      src={item.icon}
                      height={32}
                      width={32}
                    />
                  </button>
                </div>
              );
            })}
            <div className="flex md:hidden items-center">
              <button onClick={handleShowEmoji}>
                <Image
                  alt="emoji icon"
                  src={emojiIcon}
                  width={50}
                  height={50}
                />
              </button>
            </div>
          </div>
        </div>
      )}
      {showPicker && (
        <div>
          <EmojiPicker width={"100%"} onEmojiClick={handleSelectEmoji} />
        </div>
      )}
    </div>
  );
};

export default ChatInput;
