import React from 'react'
import systemsData from '../utilities/systems.json'

const Systems = () => (
  <div className='container-systems' id='systems'>
    <h1>Sistemas</h1>
    <ul>
      {
        systemsData.systems.map((item, index) => (
          <li className='information-system' key={index}>
            <span>*</span><b>{item.title}</b>
            <p>{item.description}</p>
          </li>
        ))
      }
    </ul>
  </div>
)

export default Systems