
import Player from "../player/Player";
import player1 from "../../../public/assets/images/avatar-1.png";
interface MessageProps {
  right?: boolean;
  showMessage?: boolean;
}

const Message = ({ right, showMessage }: MessageProps) => {
  return (
    <div className="relative w-[9.5rem] mb-[4rem]  ">
      <Player username="Olajumoke" avatar={player1} />
      {showMessage && (
        <div
          className={`absolute  ${
            right ? "right-[-4.3rem]" : "left-[-4rem]"
          }  top-[-1.5rem] bg-[#FDF7D9] px-2 py-1 rounded-[18px] border-neutral-600 border-solid border-[1px]`}
        >
          Hello team
        </div>
      )}
    </div>
  );
};

export default Message;
