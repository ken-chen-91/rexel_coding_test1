import React from "react";

const categoryTitle = ({ icon, text }) => {
  return (
    <div className="category-pc-title">
      <div>
        <img src={icon} alt={text} />
      </div>
      <div>{text}</div>
    </div>
  );
};

export default categoryTitle;
