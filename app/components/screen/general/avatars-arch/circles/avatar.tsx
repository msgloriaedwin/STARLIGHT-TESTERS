import Image from "next/image";

interface AvatarProps {
  avatars: {
    username: string;
    avatar: string;
    comment?: string;
    timer?: number;
  }[];
  dimension: { height: number; width: number };
  size: number;
}

const Avatars = ({ avatars = [], dimension, size }: AvatarProps) => {
  const { width, height } = dimension;

  const firstDivd = Math.ceil(avatars.length / 3);
  const nextDivd = avatars.length - firstDivd;
  const topLength = nextDivd - firstDivd;
  const spaceY = (height - size * firstDivd) / firstDivd + size;
  const xWidth = width - size * 2;
  const xMid = width / 2 - size / 2;
  const spaceX = (xWidth - size * topLength) / topLength + size;

  console.log({firstDivd, topLength, nextDivd, height});
  

  return (
    <div className="">
      {avatars.map((avatar, index) => {
        const x =
          index < firstDivd
            ? 10
            : index >= nextDivd
            ? width - (size + 20)
            : topLength === 1
            ? xMid
            : xWidth - size - (index - firstDivd) * spaceX;

        const y =
          avatars.length < 3 ? (height - size) / 2 :
          index === 0 || index === avatars.length - 1
            ? height - size
            : index < firstDivd
            ? height - size - spaceY * index
            : index >= nextDivd
            ? height - size - (index - nextDivd + 1) * spaceY
            : 0;

        return (
          <div
            key={index}
            className="md:flex flex-col items-center hidden"
            style={{
              position: "absolute",
              top: `${y}px`,
              left: `${x}px`,
              width: `${size}px`,
              height: `${size}px`,
            }}
          >
            <div
              style={{
                width: `${(size * 3) / 5}px`,
                height: `${(size * 3) / 5}px`,
                position: "relative",
              }}
            >
              <Image
                src={avatar.avatar}
                alt="avatar"
                layout="fill"
                objectFit="contain"
                className={`rounded-full`}
              />
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="bg-secondary-green w-2 h-2 rounded-full"></div>
              <p className="text-primary-900">{avatar.username}</p>
            </div>
            <div className="w-1/4 bg-[#D9D9D9] rounded-full h-1.5 mt-1 dark:bg-gray-700">
              <div
                className="bg-green-600 h-1.5 rounded-full dark:bg-green-500"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Avatars;
