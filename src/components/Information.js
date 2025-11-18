import React from 'react'
import avatar from '../images/avatar.jpg'

const Information = () => (
  <div className="container-about-me" id="contact">
    <img src={avatar} alt="" />
    <ul className="container-list-information">
      <li>Name: Rafael Iskoat</li>
      <li>Last Name: López herrera</li>
      <li>Cell Phone: 33 35 96 09 55</li>
      <li>Email: rafael.iskoat@gmail.com</li>
      <li>Languages: English and Spanish</li>
    </ul>
  </div>
)

export default Information