import React from "react";
import SkillCard from "./SkillsCard/SkillsCard";
import { skillList } from "../../shared/constants";

const Skills = () => {
  return (
    <section id="Skills" className="flex flex-col items-center pt-[4rem] w-full">
      {/* Skills Header */}
      <h2 className="text-2xl font-semibold text-rose-500 border-b-2 border-b-rose-500">
        Skills
      </h2>

      {/* Skills Content */}
      <div className="grid grid-cols-3 gap-6 py-8">
        {skillList.map((skill) => (
          <SkillCard name={skill.name} image={skill.image} key={skill.id} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
