import React,{Component, Fragment} from 'react'
import fondoNav from '../images/fondo6.jpg'
import NavResponsive from './NavResponsive'

export default class Nav extends Component{

        state = {
            showMenu: false
        }
        
        hideMenuResponsive = (timmer, showMenu, showItemsMenu, rotateBtn, scroll) =>{

            this.setState({
                showMenu: false
              })

               scroll.classList.remove('bloquear-scroll')
               setTimeout(() => {
                  showMenu.classList.remove('show-menu')
                 },timmer+400)
                 rotateBtn.classList.remove('rotate-btn')
                 showItemsMenu.classList.remove('show-items-menu')
        }
        showMenuResponsive = (timmer, showMenu, showItemsMenu, rotateBtn, scroll) => {
            this.setState({
                showMenu: true
            })
             scroll.classList.add('bloquear-scroll') 
             showMenu.classList.add('show-menu')
             rotateBtn.classList.add('rotate-btn')

             setTimeout(() => {
                showItemsMenu.classList.add('show-items-menu')
              },timmer)
        }

        handleClickMenu = e => {
         let timmer = 10;
         let showMenu = document.getElementById('responsive')
         let showItemsMenu = document.getElementById('items-li-responsive')
         let rotateBtn = document.getElementById('btn-menu')
         let scroll = document.getElementsByTagName('html')[0]
        
          if(!this.state.showMenu){
            this.showMenuResponsive(timmer, showMenu, showItemsMenu, rotateBtn, scroll)
          }else{
            this.hideMenuResponsive(timmer, showMenu, showItemsMenu, rotateBtn, scroll)
          }
        } 
        
        handleClickItem = (e) => {

            let timmer = -400;
            let showMenu = document.getElementById('responsive')
            let showItemsMenu = document.getElementById('items-li-responsive')
            let rotateBtn = document.getElementById('btn-menu')
            let scroll = document.getElementsByTagName('html')[0]

            this.hideMenuResponsive(timmer, showMenu, showItemsMenu, rotateBtn, scroll)
        }

        render(){
            return(
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
                            <div className='img-nav'>
                              
                            </div>
                           <div className='container-image--overlay'>
                              <div className='container-image--branch'>
                                <h1>Front-end</h1>
                                <h1>Development</h1>
                              </div>  
                           </div>
                       </div>

                       <NavResponsive handleClickItem={this.handleClickItem} onClick={this.handleClickMenu} />
                       {/* <section className="container-information">
                           <article className="information">
                           Programador dedicado y profesional, trabajar bajo presión,
                           siempre buscando que el código quede lo más óptimo y reutilizable posible,
                           nunca rendirse y persistir a encontrar la solución ante cualquier problema
                           </article>
                       </section> */}
                       <section className="title-name-nav">
                            <p>Web developer</p>
                       </section>
                  </div>
        )
    }
}
   