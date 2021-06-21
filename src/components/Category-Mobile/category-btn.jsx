import React from 'react'

const CategoryBtn = ({icon,text}) => {
  return (
    <div className="category-mobile-btn-container">
      <div className="category-mobile-btn">
        <img src={icon} alt={text} />
      </div>
      <div className="category-mobile-btn-txt">{text}</div>
    </div>
  )
}

export default CategoryBtn
