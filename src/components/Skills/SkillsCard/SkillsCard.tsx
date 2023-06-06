import React from "react";

const SkillCard = ({ name, image }) => {
  return (
    <div className="flex w-[240px] p-2 gap-2 border shadow rounded-md">
      <img className="w-8" src={image} alt={name} />
      <p className="font-semibold pt-1">{name}</p>
    </div>
  );
};

export default SkillCard;
