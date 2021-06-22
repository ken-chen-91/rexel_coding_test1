import "./index.css";
import React from "react";
import MemberAd from "../../assets/img/platt-plus.png";

const Member = () => {
  return (
    <div className="member-container">
      <div className="member-wrapper">
        <img className="member-img" src={MemberAd} alt="become a member" />
        <div>
          <h3 className="member-title">Get Started Today</h3>
          <h3>
            Become a <span className="member-inline">Platt Plus</span> Member
          </h3>
          <div className="member-learn-more">Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default Member;
