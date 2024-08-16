"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowUp } from "lucide-react";
import emojiIcon from "@/public/emojiIcon.svg";
import Image from "next/image";
import createIcon from "@/public/create.svg";
import gifIcon from "@/public/gif.svg";
import { defaultEmoji } from "./data";
interface ChatInputProps {
  handleSelectGif: (data: any) => void;
  sendMessage: (data: any) => void;
  message?: string;
  setMessage: (data: string) => void;
}

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });
const ChatInput = ({ sendMessage, handleSelectGif, message, setMessage }: ChatInputProps) => {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [showGif, setshowGif] = useState<boolean>(false);
  const [gif, setGif] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1]);

  const handleSend = () => {
    sendMessage(message);
    setMessage("");
    setShowPicker(false);
  };

  const handleShowEmoji = () => {
    setShowPicker(!showPicker);
    setshowGif(false);
  };

  const handleSelectEmoji = (emojiObject: any, event: any) => {
    // setMessage((previousData) => previousData + emojiObject.emoji);
  };

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=VkWAdZC1QoyCpTieqC1lCHMoPIIZN1OI"
    )
      .then((response) => response.json())
      .then((content) => {
        setGif(content.data.map((item: any) => item.images.downsized.url));
      })
      .catch((erro) => {});
  }, []);

  return (
    <div className="max-w-[492px] min-w-[200px] md:min-w-[492px] m-auto px-4 bottom-4 my-5">
      {showPicker && (
        <div className="absolute ml-[-1rem]  bottom-[4rem]  md:max-w-[492px] w-full md:min-w-[492px]">
          <EmojiPicker width={"100%"} onEmojiClick={handleSelectEmoji} />
        </div>
      )}
      {showGif && (
        <div className="absolute ml-[-1rem] bottom-[1rem] h-[15rem] overflow-y-scroll mb-[4rem] w-full scrollbar-thin scrollbar-thumb-gray-900 scrollbar-track-gray-100 bg-white  min-w-[200px] md:min-w-[492px]">
          <div className="grid grid-cols-6 gap-2 p-4">
            {gif.map((g: any, index: number) => {
              return (
                <div
                  className="cursor-pointer"
                  key={index}
                  onClick={() => {
                    handleSelectGif(g);
                    setshowGif(false);
                  }}
                >
                  {g && (
                    <Image
                      src={g}
                      alt=""
                      width={50}
                      height={50}
                      className="w-[50px] h-[50px]"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
      <div className="relative border  rounded-[24px] border-solid flex items-center">
        <input
          placeholder="Type your message"
          className="border-neutral-600 bg-[#FFFDFD80] w-full rounded-[24px] pl-[20px] pr-[7rem] outline-none text-[14px] placeholder:text-border-neutral-600 min-[2rem] flex items-center py-3"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            console.log(message);
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
            disabled={!message?.trim()}
            className={`ml-2 p-1 rounded-full ${
              message ? "bg-primary-700 hover:bg-neutral-800" : "bg-neutral-300"
            }`}
          >
            <ArrowUp className="text-white" />
          </button>
        </div>
      </div>
      {/* {!showPicker && !showGif && (
        <div className="flex w-full items-center justify-center mt-4">
          <div className="flex gap-[21px] ">
            <div className="hidden lg:flex items-center">
              <button>
                <Image alt="create" src={createIcon} height={32} width={88} />
              </button>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => {
                  setshowGif(true);
                }}
              >
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
      )} */}
    </div>
  );
};

export default ChatInput;
