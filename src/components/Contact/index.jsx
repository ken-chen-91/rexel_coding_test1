import './index.css';
import React from 'react';
import Help from '../../assets/ic/black/ic_comment.png';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-title">
        <h2>Support Center</h2>
        <div>800-25-Platt</div>
        <div>800-257-5288</div>
      </div>
      <div className="contact-time">
        <h2>4 a.m. - 12 a.m. (pst)</h2>
        <h2>7 Days a week</h2>
      </div>
      <div className="contact-help">
        <img src={Help} alt="Live Help" />
        <div className="contact-help-caption">Live Help</div>
      </div>
      <div className="contact-options">
        <div>Contact Us</div>
        <div>What's New</div>
        <div>FAQ's</div>
      </div>
    </div>
  );
};

export default Contact;
