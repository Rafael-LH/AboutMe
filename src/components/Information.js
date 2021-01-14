import React from 'react'
import avatar from '../images/avatar.jpg'

const Information = () => (
  <div className="container-about-me" id="information">
    <img src={avatar} alt="" />
    <ul className="container-list-information">
      <li>Name: Rafael Iskoat</li>
      <li>Last Name: López herrera</li>
      <li>Telephone: 18 13 39 23</li>
      <li>Cell Phone: 33 35 96 09 55</li>
      <li>Email: rafael.iskoat@gmail.com</li>
      <li>Languages: Español(Nativo) Ingles(Medio)</li>
    </ul>
  </div>
)

export default Information