import React from 'react';
import { HiMail } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import './contactBtn.css';

const ContactBtn = () => {
  return (
    <div className="section-contact-btn">
      <a href="mailto:thomas.guiart@gmail.com" rel="noreferrer" target="_blank">
        <button className="contact-btn">
          <HiMail className="contact-icon" />
          Email
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/thomas-guiart/"
        rel="noreferrer"
        target="_blank"
      >
        <button className="contact-btn linkedin">
          <BsLinkedin className="contact-icon" /> LinkedIn
        </button>
      </a>
    </div>
  );
};

export default ContactBtn;
