import React from 'react';
import { FaReact, FaJava, FaPython, FaDocker, FaAws } from 'react-icons/fa';
import { SiSpring, SiKubernetes, SiMicrosoftazure, SiPowerbi, SiPowershell } from 'react-icons/si';
import Card from '../ui/Card';

const skills = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Spring', icon: <SiSpring /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'PowerShell', icon: <SiPowershell /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Kubernetes', icon: <SiKubernetes /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Azure', icon: <SiMicrosoftazure /> },
  { name: 'Power BI', icon: <SiPowerbi /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {skills.map(skill => (
            <Card key={skill.name} className="flex flex-col items-center justify-center">
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold">{skill.name}</h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
