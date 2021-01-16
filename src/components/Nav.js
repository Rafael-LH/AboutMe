import React, { useState } from 'react'
import fondoNav from '../images/fondo2.jpg'
import NavResponsive from './NavResponsive'
import useDrakLightMode from '../hooks/useDrakLightMode'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { darkMode, handleChangeDarkLight } = useDrakLightMode()

  const hideMenuResponsive = (timmer, showMenuResposive, showItemsMenu, rotateBtn, scroll) => {
    scroll.classList.remove('bloquear-scroll')
    setTimeout(() => {
      showMenuResposive.classList.remove('show-menu')
    }, timmer + 400)
    rotateBtn.classList.remove('rotate-btn')
    showItemsMenu.classList.remove('show-items-menu')
  }
  const showMenuResponsive = (timmer, showMenuResposive, showItemsMenu, rotateBtn, scroll) => {
    setShowMenu(true);
    scroll.classList.add('bloquear-scroll')
    showMenuResposive.classList.add('show-menu')
    rotateBtn.classList.add('rotate-btn')

    setTimeout(() => {
      showItemsMenu.classList.add('show-items-menu')
    }, timmer)
  }

  const handleClickMenu = _ => {
    let timmer = 10;
    let showMenuResposive = document.getElementById('responsive')
    let showItemsMenu = document.getElementById('items-li-responsive')
    let rotateBtn = document.getElementById('btn-menu')
    let scroll = document.getElementsByTagName('html')[0]
    if (!showMenu) {
      showMenuResponsive(timmer, showMenuResposive, showItemsMenu, rotateBtn, scroll)
    } else {
      setShowMenu(false);
      hideMenuResponsive(timmer, showMenuResposive, showItemsMenu, rotateBtn, scroll)
    }
  }

  const handleClickItem = (_) => {
    let timmer = -400;
    let showMenuResposive = document.getElementById('responsive')
    let showItemsMenu = document.getElementById('items-li-responsive')
    let rotateBtn = document.getElementById('btn-menu')
    let scroll = document.getElementsByTagName('html')[0]
    setShowMenu(false);
    hideMenuResponsive(timmer, showMenuResposive, showItemsMenu, rotateBtn, scroll)
  }
  return (
    <div className='container-nav' id="container-nav">
      <div className="items-nav">
        <a href='#' className="name">Rafael Lopez</a>
        <div className="container_input_check">
          <input id="darkMode" className="checkcross__input" type="checkbox" checked={darkMode} onChange={handleChangeDarkLight} />
          <label className="toggle-item" htmlFor="darkMode">
            <div className="check"></div>
          </label>
        </div>
        <ul className='items-li'>
          <li> <a href="#experience">Experience</a> </li>
          <li> <a href="#skills" >Skills</a> </li>
          <li> <a href="#systems">Systems</a> </li>
          <li> <a href="#information" className="end">Information</a> </li>
        </ul>
      </div>
      <div className='container-image'>
        <img className='img-nav' src={fondoNav} alt="Image" />
        {/* <div className='img-nav' > </div> */}
        <div className='container-image--overlay'>
          <div className='container-image--branch'>
            <h1>FullStack</h1>
            <h1>JavasCript</h1>
          </div>
        </div>
      </div>

      <NavResponsive handleClickItem={handleClickItem} onClick={handleClickMenu} />
      {/* <section className="container-information">
          <article className="information">
          Programador dedicado y profesional, trabajar bajo presión,
          siempre buscando que el código quede lo más óptimo y reutilizable posible,
          nunca rendirse y persistir a encontrar la solución ante cualquier problema
          </article>
      </section> */}
    </div>
  )
}
export default Nav