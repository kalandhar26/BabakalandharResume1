import React, { useState } from 'react';
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi';
import Modal from 'react-modal';
import './Projects.css';

Modal.setAppElement('#root');

const Projects = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'IQ WorldPay',
      technologies: 'Java, Spring Boot, Hibernate, MySQL, REST APIs, JUnit, Mockito',
      highlights: [
        'Developed and optimized microservices for the IQ WorldPay payment platform',
        'Designed and implemented the Cards Service for secure card management',
        'Built the Payment Service to handle multi-method payments',
        'Integrated external financial systems and fraud detection mechanisms'
      ],
      details: [
        'Implemented card management functionalities including issuance, activation, and fraud detection',
        'Developed Transaction History Service for detailed reporting and alerts',
        'Utilized Hibernate, MySQL, and REST APIs for efficient data handling',
        'Conducted performance optimization and rigorous testing',
        'Mentored junior developers and collaborated with cross-functional teams'
      ],
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 2,
      title: 'ING Bank',
      technologies: 'Java, Spring Boot, Spring Cloud, Microservices, JUnit, Mockito',
      highlights: [
        'Developed microservices using Spring Cloud for banking platform',
        'Implemented REST APIs for secure communication between modules',
        'Designed Account Management Module with KYC verification',
        'Enhanced loan origination and risk management workflows'
      ],
      details: [
        'Built scalable microservices architecture for banking operations',
        'Integrated with external credit bureaus via REST APIs',
        'Implemented Docker for containerization and deployment',
        'Reduced loan processing time by 25% and default rates by 15%',
        'Ensured secure storage of sensitive financial data'
      ],
      githubLink: '#',
      liveLink: '#'
    },
    {
      id: 3,
      title: 'Global Clearing Connector',
      technologies: 'Java, Spring Boot, Spring Kafka, Oracle DB, Docker, Kubernetes',
      highlights: [
        'Developed payment message transformation and routing application',
        'Leveraged Spring Kafka for asynchronous message processing',
        'Implemented custom Java-based action classes',
        'Utilized C24 for efficient data transformation'
      ],
      details: [
        'Built high-performance payment processing system',
        'Designed robust error handling mechanisms',
        'Ensured data persistence in Oracle DB',
        'Implemented comprehensive testing frameworks',
        'Streamlined deployment with Docker and Kubernetes'
      ],
      githubLink: '#',
      liveLink: '#'
    }
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <p className="technologies">
                  <strong>Technologies:</strong> {project.technologies}
                </p>
              </div>
              
              <div className="scrollable-content">
                <ul className="highlights">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <button 
                className="view-more-btn"
                onClick={() => openModal(project)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="project-modal"
          overlayClassName="modal-overlay"
          closeTimeoutMS={300}
        >
          {currentProject && (
            <div className="modal-content">
              <button className="close-modal" onClick={closeModal}>
                <FiX />
              </button>
              
              <h3>{currentProject.title}</h3>
              <p className="modal-technologies">
                <strong>Technologies:</strong> {currentProject.technologies}
              </p>
              
              <div className="modal-links">
                {currentProject.githubLink && (
                  <a 
                    href={currentProject.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    <FiGithub className="link-icon" /> GitHub
                  </a>
                )}
                {currentProject.liveLink && (
                  <a 
                    href={currentProject.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    <FiExternalLink className="link-icon" /> Live Demo
                  </a>
                )}
              </div>
              
              <div className="modal-details">
                <h4>Key Contributions:</h4>
                <ul>
                  {currentProject.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                
                <h4>Impact & Results:</h4>
                <ul>
                  {currentProject.highlights.map((highlight, index) => (
                    <li key={`impact-${index}`}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default Projects;