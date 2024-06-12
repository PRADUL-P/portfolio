import React, { useState } from 'react';

import { experiences, education, skills } from "../database/datas";

const SkillsExperience = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const openModal = (media) => {
    window.open(media, '_blank');
  };
  return (
    
    <div className="p-8 max-w-screen-lg mx-auto"> {/* Set a maximum width and center align */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Skills & Experience</h1>
        <p className="mt-4 text-gray-600"></p>
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-bold mb-4">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="bg-gray-300 h-2 rounded-full">
                <div className={`h-2 rounded-full ${skill.color}`} style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="flex mb-4">
          <button
            className={`w-1/2 py-2 text-xl font-semibold ${activeTab === 'experience' ? 'border-b-4 border-purple-500' : 'text-gradient'}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button
            className={`w-1/2 py-2 text-xl font-semibold ${activeTab === 'education' ? 'border-b-4 border-purple-500' : 'text-gradient'}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>
        <div className='max-w-screen-lg mx-auto' >
          {activeTab === 'experience' ? (
            <div>
              
              {experiences.map((exp, index) => (
                
                <div key={index} className="mb-6">
                <h3 className="text-xl font-bold">{exp.title} | {exp.employmentType}</h3>
                {/* <p className="text-gray-200">{exp.employmentType}</p> */}
                <div className="flex justify-between">
                  <div>
                    <p className="text-gray-200 font-semibold">{exp.company} | {exp.location}</p>
                  </div>
                  <p className="text-gray-100">{exp.startDate} - {exp.endDate}</p>
                </div>
              
                <p className="text-gray-200">{exp.description.split('. ').map((sentence, idx) => (
                  <span key={idx}>{sentence}.<br /></span>
                ))}</p>
                <div className="flex flex-wrap gap-2 mt-2">Skills:
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className=" text-gray-100 px-2 py-1 rounded">{skill}</span>
                  ))}
                </div>
                {exp.media && (
                  <div className="mt-4">
                    <button
  className="text-purple-500 underline"
  onClick={() => openModal(exp.media)}
>
  View Certificate
</button>
                  </div>
                  
                  
                )}
                 {index !== experiences.length - 1 && <hr />}
              </div>
              
              ))}
            </div>
          ) : (
            <div>
              {education.map((edu, index) => (
               <div key={index} className="mb-6">
               <h3 className="text-xl font-bold">{edu.institution}</h3>
               <div className="flex justify-between">
                 <div>
                   <h3 className="text-gray-200">{edu.degree}, {edu.fieldOfStudy}</h3>
                 </div>
                 <p className="text-gray-200 text-right">{edu.startDate} - {edu.endDate}</p>
               </div>
             
               <p className="text-gray-200">{edu.grade}</p>
               <p className="text-gray-200">Activities:</p>
               <ul className="list-disc list-inside text-gray-200">
                 {edu.activitiesAndSocieties.split('. ').map((activity, idx) => (
                   <li key={idx}>{activity}</li>
                 ))}
               </ul>
               <div className="flex flex-wrap gap-2 mt-2">
                 {/* Additional details */}
               </div>
               {edu.media && (
                 <div className="mt-4">
                   <button
  className="text-purple-500 underline"
  onClick={() => openModal(edu.media)}
>
  View Certificate
</button>

                 </div>
               )}
               {index !== education.length - 1 && <hr />}
             </div>
             
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsExperience;
