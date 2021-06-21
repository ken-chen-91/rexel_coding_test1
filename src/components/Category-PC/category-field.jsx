import React from "react";

const CategoryField = ({ icon, text }) => {
  return (
    <div className="category-pc-field">
      <img src={icon} alt={text} />
      <div>{text}</div>
    </div>
  );
};

export default CategoryField;
