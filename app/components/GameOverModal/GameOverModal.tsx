// components/GameOverModal.tsx
import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "../../../components/ui/dialog";
import Image from "next/image";
import RBButton from "../button/custombutton";

interface Player {
  name: string;
  score: string;
  imageUrl: string;
}

interface GameOverModalProps {
  isOpen: boolean;
  onClose: () => void;
  players: Player[];
}

const GameOverModal: FC<GameOverModalProps> = ({
  isOpen,
  onClose,
  players,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open: boolean) => !open && onClose()}>
      <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
      <DialogContent>
        <div className="bg-[#F7EEE7]">
          <div className="bg-primary-100 p-1 text-center">
            <div className="flex justify-center">
              <Image
                src={"/assets/images/modalgm.png"}
                alt="game over"
                width={43}
                height={39}
              />{" "}
              <h2 className="text-lg font-bold mt-5">GAME OVER</h2>
            </div>
          </div>
          <div className="flex p-4">
            {players.map((player, index) => (
              <div
                key={index}
                className={`flex p-3 flex-col mx-auto ${
                  index === 2 ? "bg-primary-100 shadow rounded-lg" : ""
                }`}
              >
                <Image
                  src={player.imageUrl}
                  alt={player.name}
                  className="w-12 h-12 rounded-full mb-2"
                  width={30}
                  height={30}
                />
                <p className="mx-auto">{player.name}</p>
                <p className="mx-auto">{player.score}</p>
              </div>
            ))}
          </div>
          <RBButton
            className="mx-auto my-4"
            variant="primary"
            onClick={onClose}
          >
            Play Again
          </RBButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GameOverModal;
