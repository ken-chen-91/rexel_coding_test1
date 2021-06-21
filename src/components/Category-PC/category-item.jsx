import React from "react";

const CategoryItem = ({ icon, text }) => {
  return (
    <div className={`category-pc-item`}>
      <div>
        <img src={icon} alt={text} />
      </div>
      <div>{text}</div>
    </div>
  );
};

export default CategoryItem;
