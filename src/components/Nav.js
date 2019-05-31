import React,{Component, Fragment} from 'react'
import fondoNav from '../images/fondo.jpg'

    const Nav = () =>(
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
    export default Nav