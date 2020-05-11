import React, { useState } from 'react'
import fondoNav from '../images/fondo2.jpg'
import NavResponsive from './NavResponsive'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

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

  const handleClickMenu = e => {
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

  const handleClickItem = (e) => {
    let timmer = -400;
    let showMenuResposive = document.getElementById('responsive')
    let showItemsMenu = document.getElementById('items-li-responsive')
    let rotateBtn = document.getElementById('btn-menu')
    let scroll = document.getElementsByTagName('html')[0]
    hideMenuResponsive(timmer, showMenuResposive, showItemsMenu, rotateBtn, scroll)
  }

  return (
    <div className='container-nav' id="container-nav">
      <div className="items-nav">
        <a href='#' className="name">Rafael Lopez</a>
        <ul className='items-li'>
          <li> <a href="#experience">Experiencia</a> </li>
          <li> <a href="#skills" >Skills</a> </li>
          <li> <a href="#systems">Sistemas</a> </li>
          <li> <a href="#information" className="end">Información</a> </li>
        </ul>
      </div>
      <div className='container-image'>
        <img className='img-nav' src={fondoNav} alt="Image" />
        {/* <div className='img-nav' > </div> */}
        <div className='container-image--overlay'>
          <div className='container-image--branch'>
            <h1>Front-end</h1>
            <h1>Development</h1>
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