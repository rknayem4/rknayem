import React from "react";
import { 
  SiTailwindcss, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiHtml5 
} from "react-icons/si";

const skills = [
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React.js", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
];

const Skills = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-primary font-label mb-2 block uppercase">
          Technical Arsenal
        </span>
        <h2 className="font-h2 text-4xl text-on-surface">
          Skills & Technologies
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-all cursor-default group border-b-2 border-b-transparent hover:border-b-primary-container"
          >
            <skill.icon 
              style={{ color: skill.color }} 
              className="text-5xl mx-auto mb-4 group-hover:scale-110 transition-transform" 
            />
            <h3 className="font-label text-on-surface">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
