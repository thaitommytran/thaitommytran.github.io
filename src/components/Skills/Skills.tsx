import React from "react";
import SkillCard from "./SkillsCard/SkillsCard";
import { skillList } from "../../shared/constants";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="flex w-full flex-col items-center pt-[8rem]">
      {/* Skills Header */}
      <h2 className="border-b-2 border-b-rose-500 text-2xl font-semibold text-rose-500">
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
