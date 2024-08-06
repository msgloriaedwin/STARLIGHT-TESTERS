import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { FormLabel } from "@/components/ui/form";

interface AvatarSelectorProps {
  avatars: string[];
  selectedAvatar: string;
  onAvatarSelect: (avatar: string) => void;
}

const AvatarSelector: React.FC<AvatarSelectorProps> = ({
  avatars,
  selectedAvatar,
  onAvatarSelect,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 5, avatars.length - 5));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 5, 0));
  };

  useEffect(() => {
    if (carouselRef.current) {
      const avatarWidth = carouselRef.current.scrollWidth / avatars.length;
      carouselRef.current.scrollTo({
        left: currentIndex * avatarWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex, avatars.length]);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <FormLabel className="font-normal sm:text-[1rem] text-[0.6rem] max-sm:leading-3">
          Select Avatar
        </FormLabel>
        <div className="flex gap-[0.1875rem]">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="focus:outline-none"
          >
            <Image
              src={
                currentIndex === 0
                  ? "/assets/icons/arrow-left-disabled.svg"
                  : "/assets/icons/arrow-left.svg"
              }
              alt="previous button"
              height={24}
              width={24}
            />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + 5 >= avatars.length}
            className="focus:outline-none"
          >
            <Image
              src={
                currentIndex + 5 >= avatars.length
                  ? "/assets/icons/arrow-right-disabled.svg"
                  : "/assets/icons/arrow-right.svg"
              }
              alt="next button"
              height={24}
              width={24}
            />
          </button>
        </div>
      </div>
      <div
        ref={carouselRef}
        className="flex gap-2 sm:gap-4 overflow-x-auto scroll-smooth"
      >
        {avatars.slice(currentIndex, currentIndex + 5).map((avatar) => (
          <div
            key={avatar}
            className={`relative flex items-center justify-center p-1 border border-button-dark-blue rounded-lg w-[3.875rem] h-[3.875rem] sm:w-24 sm:h-24 ${
              selectedAvatar === avatar ? "bg-button-dark-blue" : ""
            }`}
            onClick={() => onAvatarSelect(avatar)}
          >
            <Image
              src={avatar}
              alt="Avatar"
              layout="responsive"
              width={50}
              height={50}
              className="rounded-full cursor-pointer w-[3.125rem] h-[3.125rem] sm:w-20 sm:h-20"
            />
            {selectedAvatar === avatar && (
              <div className="absolute top-0 right-0 p-1 bg-white rounded-full">
                <Image
                  src="/assets/icons/Check.svg"
                  alt="Selected"
                  width={10}
                  height={10}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvatarSelector;
