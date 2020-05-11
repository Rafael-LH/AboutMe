import React from 'react'

const SkillsComponent = ({ className, title, data }) => (
  <div className={`container-${className}`}>
    <h2 className="title-backend-frontend">{title}</h2>
    <ul className="items-backend-frontend">
      {
        data.map((item, index) => <li key={index} className={item.class}>{item.skill}</li>)
      }
    </ul>
  </div>
)
export default SkillsComponent