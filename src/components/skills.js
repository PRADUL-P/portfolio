import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';
const Skill = ({ skillName, skillValue, color }) => {
    const [value, setValue] = useState(skillValue);
  
    const onMouseEnter = () => {
      setValue(skillValue);
    };
  
    const onMouseLeave = () => {
      setValue(0);
    };
  
    return (
      <motion.div
        className="w-48 h-48 p-4 text-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <CircularProgressbar
          value={value}
          text={`${skillValue}%`}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: color,
            textColor: color,
            trailColor: '#d6d6d6',
            textSize: '24px',
            pathTransitionDuration: 0.5,
          })}
        />
        <div
          className="text-white"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <h3 className="text-lg font-bold mb-2">{skillName}</h3>
        </div>
      </motion.div>
    );
  };

const SkillsList = () => {
  const skills = [
    { name: 'HTML', value: 90, color: '#f16529' },
    { name: 'CSS', value: 80, color: '#2965f1' },
    { name: 'JavaScript', value: 75, color: '#f0db4f' },
    { name: 'React', value: 70, color: '#61dafb' },
    { name: 'Node.js', value: 65, color: '#3c873a' },
    { name: 'MongoDB', value: 60, color: '#13aa52' },
    { name: 'C', value: 50, color: '#a8b9cc' },
    { name: 'Python', value: 45, color: '#3776ab' },
    { name: 'AutoCAD', value: 80, color: '#f2a900' },
    { name: 'Revit', value: 70, color: '#8c8c8c' },
    { name: 'Twinmotion', value: 65, color: '#0095d5' },
    { name: 'STAAD', value: 60, color: '#fd8c00' },
    { name: 'Enscape', value: 50, color: '#00a89d' },
    { name: 'Figma', value: 85, color: '#f24e1e' },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {skills.map((skill, index) => (
        <Skill
          key={index}
          skillName={skill.name}
          skillValue={skill.value}
          color={skill.color}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Skills</h1>
      <SkillsList />
    </div>
  );
};

export default App;
