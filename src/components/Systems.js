import React from 'react'
import systemsData from '../utilities/systems.json'

const Systems = () => (
  <div className='container-systems' id='experience'>
    <h1>Experience</h1>
    <ul>
      {
        systemsData.systems.map((item, index) => (
          <li className='information-system' key={index}>
            <span>*</span><b>{item.title}</b>
            <time>{item.date}</time>
            <p>{item.description}</p>
          </li>
        ))
      }
    </ul>
  </div>
)

export default Systems