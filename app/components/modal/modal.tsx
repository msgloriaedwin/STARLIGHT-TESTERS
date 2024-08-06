import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "../../../components/ui/dialog";
import Image from "next/image";
import RBButton from "../button/custombutton";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
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
              <h2 className="text-lg font-bold mt-5">CHANGES SAVED</h2>
            </div>
          </div>
         
          <RBButton
            className="mx-auto my-4"
            variant="primary"
            onClick={onClose}
          >
            Back
          </RBButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;