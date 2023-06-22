"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
interface IProjectCard {
  description: string;
  features: string[];
  images: StaticImageData[];
  name: string;
}

const ProjectCard = ({ name, images, features, description }: IProjectCard) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const splitFeatures = features.join(" | ");

  return (
    <div className="max-w-sm overflow-hidden rounded shadow-lg">
      <Image className="w-full" src={currentImage} alt={name} />
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-rose-500">{name}</h2>
        <h3 className="mb-2 text-xs text-slate-500">{splitFeatures}</h3>
        <p className="text-base text-slate-700">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
