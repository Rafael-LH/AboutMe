import React,{Component, Fragment} from 'react'
import fondoNav from '../images/fondo.jpg'
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
                       <img className='img-nav' src={fondoNav}/>
                       <div className="items-nav">  
                          <a href='#' className="name">Rafael Lopez</a>
                          <ul className='items-li'>
                              <li> <a href="#experience">Experience</a> </li>
                              <li> <a href="#skills" >Skills</a> </li>
                              <li> <a href="#systems">Systems</a> </li>
                              <li> <a href="#information" className="end">Information</a> </li>
                          </ul>
                       </div>
                       <NavResponsive handleClickItem={this.handleClickItem} onClick={this.handleClickMenu} />
                       <section className="container-information">
                           <article className="information">
                           Dedicated and professional programmer, working under pressure, always looking for
                           the code to be as optimal and reusable as possible, never giving up and persisting
                           in finding the solution to any problem.
                           </article>
                       </section>
                  </div>
        )
    }
}
   