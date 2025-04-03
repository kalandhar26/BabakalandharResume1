import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section id='profile' className='profile-section'>
      <div className='container'>
        <h2 className='section-title'>Profile</h2>
        <div className='profile-content'>
          <p>
            I am an experienced IT professional seeking a challenging role where
            I can apply my expertise in Java, Spring Boot, and software
            development to drive organizational growth and success. My approach
            combines technical knowledge with business understanding, enabling
            me to create solutions that address real organizational needs while
            positioning companies for future success.
          </p>
          <div className='profile-highlights'>
            <div className='highlight-card'>
              <h3>6+ Years</h3>
              <p>Professional Experience</p>
            </div>
            <div className='highlight-card'>
              <h3>3+</h3>
              <p>Projects Completed</p>
            </div>
            <div className='highlight-card'>
              <h3>3</h3>
              <p>Major Companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
