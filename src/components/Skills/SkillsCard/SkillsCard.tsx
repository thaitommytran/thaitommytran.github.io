import React from "react";
import Image from "next/image";
interface ISkillCard {
  name: string;
  image: string;
}

const SkillCard = ({ name, image }: ISkillCard) => {
  return (
    <div className="flex w-[240px] gap-2 rounded-md border p-2 shadow">
      <Image className="w-8" width="80" height="10" src={image} alt={name} />
      <p className="pt-1 font-semibold">{name}</p>
    </div>
  );
};

export default SkillCard;
