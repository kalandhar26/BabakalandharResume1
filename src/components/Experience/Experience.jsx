import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'System Engineer',
      company: 'Tata Consultancy Services',
      duration: 'Jun 2018 - Apr 2022',
      responsibilities: [
        'Implemented card management functionalities, including card issuance, activation, deactivation, and fraud detection.',
        'Designed the Transaction History Service to log and retrieve transaction data for reporting and analysis.',
        'Enabled proactive financial monitoring for merchants, reducing fraud and failed transactions.'
      ],
      icon: <FaBriefcase />
    },
    {
      id: 2,
      role: 'Software Engineer',
      company: 'Cognizant',
      duration: 'Apr 2022 - Oct 2023',
      responsibilities: [
        'Enhanced loan origination processes, including credit scoring, risk assessment, and loan approval workflows.',
        'Implemented credit monitoring features to track repayment behavior and identify early signs of default.',
        'Enhanced risk management capabilities, reducing default rates by 15%.'
      ],
      icon: <FaBriefcase />
    },
    {
      id: 3,
      role: 'Senior Software Engineer',
      company: 'Mphasis',
      duration: 'Oct 2023 - Jan 2025',
      responsibilities: [
        'Developed and maintained a high-performance, scalable application to handle payment message transformation and routing.',
        'Designed and implemented custom Java-based action classes to handle specific transformation logic and workflow requirements.',
        'Collaborated with cross-functional teams to deliver a scalable, high-performance solution that meets global clearing and payment processing standards.'
      ],
      icon: <FaBriefcase />
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-icon">
                {exp.icon}
              </div>
              <div className="timeline-content">
                <h3>{exp.role}</h3>
                <p className="company">{exp.company}</p>
                <p className="duration">{exp.duration}</p>
                <ul className="responsibilities">
                  {exp.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;