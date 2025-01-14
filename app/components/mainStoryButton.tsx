import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

type MainButtonProps = {
  content: string;
  imageSrc: StaticImageData; 
};

const MainButton = ({ content, imageSrc }: MainButtonProps) => {
  return (
    <div
      className="bg-[#FFEB3B] border-[4px]  border-bold border-black rounded-full shadow-lg 
                 flex items-center justify-center w-14 h-14"
      style={{
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.4)",
      }}
    >
      <Image src={imageSrc} alt={content} className="w-[32px] h-[32px]" />
    </div>
  );
};

export default MainButton;
