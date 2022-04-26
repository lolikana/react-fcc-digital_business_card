import React from 'react';
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from 'react-icons/fa';
import './footerSns.css';

const FooterSns = () => {
  return (
    <div className="footer-sns-icons">
      <div>
        <a href="https://twitter.com/" rel="noreferrer" target="_blank">
          <FaTwitterSquare className="footer-sns-icon" />
        </a>
      </div>
      <div>
        <a
          href="https://www.facebook.com/Loli.la.kanette/"
          rel="noreferrer"
          target="_blank"
        >
          <FaFacebookSquare className="footer-sns-icon" />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/?hl=fr"
          rel="noreferrer"
          target="_blank"
        >
          <FaInstagramSquare className="footer-sns-icon" />
        </a>
      </div>
      <div>
        <a href="https://github.com/lolikana" rel="noreferrer" target="_blank">
          <FaGithubSquare className="footer-sns-icon" />
        </a>
      </div>
    </div>
  );
};

export default FooterSns;
