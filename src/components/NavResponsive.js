import React from 'react'

const NavResponsive = ({ handleClickItem, onClick }) => (
  <>
    <div className="responsive" id="responsive">
      <ul className='items-li-responsive' id="items-li-responsive">
        <li> <a href='#' className="title-name">Rafael Lopez</a> </li>
        <li> <a href="#experience" onClick={handleClickItem}>Experience</a> </li>
        <li> <a href="#skills" onClick={handleClickItem}>Skills</a> </li>
        <li> <a href="#information" onClick={handleClickItem}>Information</a> </li>
        <li> <a href="#contact" className="end" onClick={handleClickItem}>Contact</a> </li>
      </ul>
    </div>
    <p className="btn-menu" id="btn-menu" onClick={onClick}><i className="fas fa-arrow-left"></i></p>
  </>
)
export default NavResponsive