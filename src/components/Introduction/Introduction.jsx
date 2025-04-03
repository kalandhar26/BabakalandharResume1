import React from 'react';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import './Introduction.css';
import profileImage from '../../assets/images/MyPicture.jpeg';
import babakalandharresume from '../../assets/images/babakalandharresume.pdf';

const Introduction = () => {
  return (
    <section id='introduction' className='introduction-section'>
      <div className='intro-container'>
        <div className='intro-left'>
          <div className='profile-image-container'>
            <img
              src={profileImage}
              alt='Baba Kalandhar'
              className='profile-image'
              loading='lazy'
            />
            <div className='image-border-animation'></div>
          </div>
          <h2>Baba Kalandhar</h2>
          <p className='current-role'>Senior Software Engineer</p>
        </div>

        <div className='intro-right'>
          <h1>
            <span className='title-highlight'>JAVA DEVELOPER</span>
            <span className='experience-badge'>6 YRS</span>
          </h1>

          <p className='skills'>
            Java | Spring Boot | Microservices | Docker | Kubernetes
          </p>

          <p className='tagline'>
            I specialize in designing scalable and efficient backend systems,
            focusing on performance optimization and reliability. With
            experience in microservices architecture and modern cloud
            technologies, I strive to build seamless and robust backend
            solutions.
          </p>

          <div className='cta-buttons'>
            <a
              href='#contact'
              className='cta-button hire-me'
              onClick={e => {
                e.preventDefault();
                document
                  .getElementById('contact')
                  .scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Hire Me <FaArrowRight className='arrow-icon' />
            </a>

            <a
              href={babakalandharresume}
              className='cta-button download-resume'
              target='_blank'
              download='BabaKalandhar_Resume.pdf'
            >
              <FaDownload className='download-icon' /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
