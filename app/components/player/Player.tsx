import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import MessageBubble from "../messageBubble/MessageBubble";

interface PlayerProps {
  username: string;
  avatar: string;
  presenceStatus?: "online" | "offline" | "dormant";
  totalCards?: number;
  correctCards?: number;
  sentMessage?: string;
  isGameOver?: boolean;
  isWinner?: boolean;
  prize?: string;
  pageAlignment?: "top" | "left" | "right";
  className?: string;
}

const Player: React.FC<PlayerProps> = ({
  username,
  avatar,
  presenceStatus,
  correctCards,
  totalCards,
  sentMessage,
  isGameOver,
  isWinner,
  prize,
  pageAlignment,
  className,
}) => {
  const [messages, _] = useState<string | undefined>(sentMessage);
  const alignment =
    (pageAlignment && pageAlignment === "top") ||
    (pageAlignment && pageAlignment === "left")
      ? "left"
      : "right";

  return (
    <div
      className={cn(
        "w-[9.5rem] flex flex-col items-center justify-center relative",
        {
          "w-[6.5rem]": isGameOver,
          "bg-button-dark-blue-text py-[0.875rem] rounded-[0.625rem] shadow-[0px_4px_11.3px_0px_rgba(0,0,0,0.25)]":
            isGameOver && isWinner,
        },
        className
      )}
    >
      <div
        className={cn("flex flex-col gap-2 items-center justify-center", {
          "gap-[5px]": isGameOver && isWinner,
        })}
      >
        <Image
          src={avatar}
          height={isGameOver || isWinner ? 50 : 80}
          width={isGameOver || isWinner ? 50 : 80}
          alt="player avatar"
          className={cn("rounded-full")}
        />

        <div className="flex gap-2 items-center">
          {presenceStatus &&
            !isGameOver &&
            (presenceStatus === "online" ? (
              <div className="rounded-full h-2 w-2 bg-green-main"></div>
            ) : presenceStatus === "dormant" ? (
              <div className="rounded-full h-2 w-2 bg-yellow-main"></div>
            ) : (
              <div className="rounded-full h-2 w-2 bg-textColor-neutral"></div>
            ))}

          <div>
            <p
              className={`font-normal text-lg leading-[1.5rem] text-center ${
                (isGameOver || isWinner) &&
                "text-[1.25rem] text-button-dark-blue"
              }`}
            >
              {username}
            </p>
            {isWinner && prize && (
              <>
                <p className="text-[1.25rem] text-button-dark-blue leading-[1.5rem] text-center">
                  Wins!
                </p>
                <div className="flex items-center gap-2 py-[0.28rem] px-[0.35rem] border-[0.036rem] border-neutral-600 rounded-[0.22rem]">
                  <Image
                    src={"assets/icons/trophy-icon.svg"}
                    alt="trophy image"
                    height={22}
                    width={22}
                  />
                  <p className="text-green-main">{prize}</p>
                </div>
              </>
            )}
          </div>
        </div>

        {totalCards && correctCards !== undefined && !isGameOver && (
          <div className="h-[0.3125rem] w-[3.12rem] bg-gray-200 rounded-lg">
            <div
              className="bg-green-main h-full rounded-lg"
              style={{ width: `${(correctCards / totalCards) * 100}%` }}
            ></div>
          </div>
        )}
      </div>

      {isGameOver && (
        <p className="text-button-dark-blue font-normal text-sm  mt-0 text-center">
          {correctCards} / {totalCards}
        </p>
      )}

      {messages && !isGameOver && (
        <div
          className={`absolute max-sm:-top-2 ${
            alignment === "left"
              ? "left-0 ml-10 sm:ml-32"
              : "right-0 ml-10 sm:mr-32"
          } transform translate-x-${
            alignment === "left" ? "1/2" : "-1/2"
          } -translate-y-full`}
        >
          <MessageBubble message={messages} alignment={alignment} />
        </div>
      )}
    </div>
  );
};

export default Player;
