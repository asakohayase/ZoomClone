import { HomeCardProps } from "@/types";
import Image from "next/image";

const HomeCard = ({
  img,
  title,
  description,
  handleClick,
  style,
}: HomeCardProps) => {
  return (
    <div
      className={`flex min-h-[260px] w-full cursor-pointer flex-col justify-between rounded-[14px] px-4 py-6 xl:max-w-[270px] ${style}`}
      onClick={handleClick}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image
          src="/icons/add-meeting.svg"
          alt="meeting"
          width={27}
          height={27}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
