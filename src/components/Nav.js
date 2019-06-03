import React,{Component, Fragment} from 'react'
import fondoNav from '../images/fondo.jpg'
import NavResponsive from './NavResponsive'

export default class Nav extends Component{
       
        handleClick = e => {
             alert('Holi') 
        } 

        render(){
            return(
                <Fragment>
                  <div className='container-nav'>
                       <img className='img-nav' src={fondoNav}/>
                       <div className="items-nav">  
                          <a href='#' className="name">Rafael Lopez</a>
                          <ul className='items-li'>
                              <li> <a href="#experience">Experience</a> </li>
                              <li> <a href="#skills">Skills</a> </li>
                              <li> <a href="#systems">Systems</a> </li>
                              <li> <a href="#information" className="end">Information</a> </li>
                          </ul>
                       </div>
                       <NavResponsive onClick={this.handleClick} />
                       <section className="container-information">
                           <article className="information">
                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quisquam unde blanditiis
                                 consequatur deleniti. Minima, illo! Eos illo, sequi,
                                 voluptas repellendus quae cum dolorum qui architecto itaque amet tempore ratione?
                                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quisquam unde blanditiis
                                 consequatur deleniti. Minima, illo! Eos illo, sequi,
                                 voluptas repellendus quae cum dolorum qui architecto itaque amet tempore ratione?
                           </article>
                       </section>
                  </div>
                </Fragment>
        )
    }
}
   