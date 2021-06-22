import React from "react";
import "./index.css";
import DealAd from "../../assets/panel/deal.png";

const Deal = () => {
  return (
    <div className="deal-container">
      <img className="deal-img" src={DealAd} alt="deal" />
    </div>
  );
};

export default Deal;
