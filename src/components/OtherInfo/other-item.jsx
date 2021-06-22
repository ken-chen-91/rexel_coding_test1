import './index.css';
import React from 'react';

const OtherItem = ({ icon, text }) => {
  return (
    <div className="other-item">
      <img src={icon} alt={text} />
      <div className="other-txt">{text}</div>
    </div>
  );
};

export default OtherItem;