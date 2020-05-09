import React, { Component, Fragment } from 'react'

const NavResponsive = props => (
  <Fragment>
    <div className="responsive" id="responsive">
      <ul className='items-li-responsive' id="items-li-responsive">
        <li> <a href='#' className="title-name">Rafael Lopez</a> </li>
        <li> <a href="#experience" onClick={props.handleClickItem}>Experiencia</a> </li>
        <li> <a href="#skills" onClick={props.handleClickItem}>Skills</a> </li>
        <li> <a href="#systems" onClick={props.handleClickItem}>Sistemas</a> </li>
        <li> <a href="#information" className="end" onClick={props.handleClickItem}>Información</a> </li>
      </ul>
    </div>
    <p className="btn-menu" id="btn-menu" onClick={props.onClick}><i className="fas fa-arrow-left"></i></p>
  </Fragment>
)

export default NavResponsive