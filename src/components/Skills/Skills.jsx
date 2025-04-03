import React from 'react';
import { DiJava, DiDocker } from 'react-icons/di';
import {
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiApachekafka,
  SiKubernetes,
} from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Java', level: 90, icon: <DiJava size={40} /> },
    { name: 'Spring Boot', level: 90, icon: <SiSpringboot size={40} /> },
    { name: 'MySQL', level: 90, icon: <SiMysql size={40} /> },
    { name: 'MongoDB', level: 80, icon: <SiMongodb size={40} /> },
    { name: 'Kafka', level: 75, icon: <SiApachekafka size={40} /> },
    { name: 'Microservices', level: 75, icon: null },
    { name: 'Docker', level: 75, icon: <DiDocker size={40} /> },
    { name: 'Kubernetes', level: 75, icon: <SiKubernetes size={40} /> },
  ];

  return (
    <section id='skills' className='skills-section'>
      <div className='container'>
        <h2 className='section-title'>Skills</h2>
        <div className='skills-container'>
          {skills.map((skill, index) => (
            <div key={index} className='skill-item'>
              <div className='skill-icon'>
                {skill.icon || (
                  <span className='skill-text-icon'>
                    {skill.name.charAt(0)}
                  </span>
                )}
              </div>
              <div className='skill-info'>
                <h3>{skill.name}</h3>
                <div className='skill-bar'>
                  <div
                    className='skill-level'
                    style={{ width: `${skill.level}%` }}
                    data-level={skill.level}
                  ></div>
                </div>
                <span className='skill-percent'>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
