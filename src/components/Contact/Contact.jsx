import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id='contact' className='contact-section'>
      <div className='container'>
        <h2 className='section-title'>Contact Me</h2>

        <div className='contact-content'>
          <div className='contact-info'>
            <div className='contact-item'>
              <div className='contact-icon'>
                <FaEnvelope />
              </div>
              <div className='contact-text'>
                <h3>Email</h3>
                <a href='mailto:babakalandhar499@gmail.com'>
                  babakalandhar499@gmail.com
                </a>
              </div>
            </div>

            <div className='contact-item'>
              <div className='contact-icon'>
                <FaPhone />
              </div>
              <div className='contact-text'>
                <h3>Phone</h3>
                <a href='tel:+918074147224'>+91 8074147224</a>
              </div>
            </div>

            <div className='contact-item'>
              <div className='contact-icon'>
                <FaLinkedin />
              </div>
              <div className='contact-text'>
                <h3>LinkedIn</h3>
                <a
                  href='https://www.linkedin.com/in/babakalandhar-c-871233230'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  linkedin.com/in/babakalandhar
                </a>
              </div>
            </div>

            <div className='contact-item'>
              <div className='contact-icon'>
                <FaGithub />
              </div>
              <div className='contact-text'>
                <h3>GitHub</h3>
                <a
                  href='https://github.com/kalandhar26'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  github.com/babakalandhar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
