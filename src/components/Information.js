import React,{Component} from 'react'
import avatar from '../images/avatar.jpg'

    const Information = () => (
         <div className="container-about-me" id="information">
             <img src={avatar} alt=""/>
             <ul className="container-list-information">
                 <li>First name: Rafael Iskoat</li>
                 <li>Last name: Lopez herrera</li>
                 <li>Phone: </li>
                 <li>Cel phone: 33 35 96 09 55</li>
                 <li>Addres: Fraccionamiendo las gabrielas nube 58 tonala</li>
                 <li>Language: Espanish (native) English (in proces)</li>
             </ul>
         </div>
    )
    
    export default Information