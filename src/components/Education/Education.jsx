import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: 'VSN Siddartha School',
      degree: '10th Grade',
      year: '2012',
      score: 'CGPA: 9.8',
      icon: <FaGraduationCap />
    },
    {
      id: 2,
      institution: 'NRI Academy',
      degree: 'Intermediate',
      year: '2014',
      score: 'CGPA: 9.6',
      icon: <FaGraduationCap />
    },
    {
      id: 3,
      institution: 'Sastra University',
      degree: 'Bachelor of Technology',
      year: '2018',
      score: 'CGPA: 6.5',
      icon: <FaGraduationCap />
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-timeline">
          {educationData.map((edu) => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-icon">
                {edu.icon}
              </div>
              <div className="timeline-content">
                <h3>{edu.institution}</h3>
                <p className="degree">{edu.degree}</p>
                <div className="timeline-details">
                  <span className="year">{edu.year}</span>
                  <span className="score">{edu.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;