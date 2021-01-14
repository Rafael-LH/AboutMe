import React from 'react'
const technologies = ['HTML 5', 'Sass', 'Webpack', 'ReactJS', 'Hooks'];
const Footer = () => (
  <div className="footer">
    <div className="sub-section-footer">
      <h1 className="title-social">Technologies</h1>
      <ul>
        {technologies.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <h1 className="title-social">Api</h1>
      <ul>
        <li>Api GitHub</li>
      </ul>
      <h1 className="title-social">Networks</h1>
      <ul>
        <li><a href="github.com/Rafael-LH">GitHub<i className="fab fa-github"></i></a></li>
        <li><a href="https://github.com/Rafael-LH?tab=repositories">BitBucket<i className="fab fa-buysellads"></i> </a></li>
      </ul>
    </div>
    <div className="down-section">
      <p>About me, Todos los derechos © Rafael López 2018</p>
    </div>
  </div>
)
export default Footer