import './index.css';
import React from 'react';
import AppImg from '../../assets/panel/app-get-banner.png';

const DownloadApp = () => {
  return (
    <div className="download-app-container">
      <div className="download-app-wrapper">
        <img
          className="download-app-img"
          src={AppImg}
          alt="download Platt App"
        />
      </div>
      <h3 className="download-app-text">
        Shop better, download the Platt App today
      </h3>
    </div>
  );
};

export default DownloadApp;