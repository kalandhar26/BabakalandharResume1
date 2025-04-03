import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} BabaKalandhar. All rights reserved.
          <span className="made-with">
            Made with <FaHeart className="heart-icon" /> using React
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;