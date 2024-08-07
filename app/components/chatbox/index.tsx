"use client";
import React, { useState } from "react";
import InputEmoji from "react-input-emoji";
import { ArrowUp } from "lucide-react";

const ChatInput: React.FC = () => {
  const [text, setText] = useState<string>("");

  const handleSend = () => {
    if (text.trim()) {
      setText("");
    }
  };

  return (
    <>
      <div className="flex items-center border border-neutral-600 h-12 pr-2 bg-[#FFFDFD80] rounded-2xl">
        <InputEmoji
          value={text}
          onChange={setText}
          borderColor="transparent"
          onEnter={handleSend}
          shouldReturn
          shouldConvertEmojiToImage
          placeholder="Type a message"
          keepOpened={true}
        />
        <button
          onClick={handleSend}
          disabled={!text.trim()}
          className={`ml-2 p-1  rounded-full ${
            text.trim()
              ? " bg-neutral-600 hover:bg-neutral-800"
              : "bg-neutral-300"
          }`}
        >
          <ArrowUp className="text-white" />
        </button>
      </div>
    </>
  );
};

export default ChatInput;
