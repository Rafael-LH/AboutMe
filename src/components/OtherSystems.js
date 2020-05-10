import React from 'react'

const Systems = ({ name, description, svn_url }) => (
  <div className="container-card-systems">
    <h1 className='title-system-git' >{name}</h1>
    <p>
      {description}
    </p>
    <div className="container-btn-show">
      <a target="__blank" className='btn-show-repo' href={svn_url}>Ver</a>
    </div>
  </div>
)
export default Systems