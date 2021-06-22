import React from 'react'

const RecentItem = ({icon,text}) => {
  return (
    <div>
      <img src={icon} alt={text} />
    </div>
  )
}

export default RecentItem
