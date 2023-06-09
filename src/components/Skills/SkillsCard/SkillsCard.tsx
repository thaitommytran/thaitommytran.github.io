import React from "react";
import Image from "next/image";
interface ISkillCard {
  name: string;
  image: string
}

const SkillCard = ({ name, image }: ISkillCard) => {
  return (
    <div className="flex w-[240px] p-2 gap-2 border shadow rounded-md">
      <Image className="w-8" width="80" height="10" src={image} alt={name} />
      <p className="font-semibold pt-1">{name}</p>
    </div>
  );
};

export default SkillCard;
