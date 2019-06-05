import React,{Component} from 'react'
import avatar from '../images/avatar.jpg'

    const Information = () => (
         <div className="container-about-me" id="information">
             <img src={avatar} alt=""/>
             <ul className="container-list-information">
                 <li>Nombres: Rafael Iskoat</li>
                 <li>Apellidos: López herrera</li>
                 <li>Teléfono(Casa): 18 13 39 23</li>
                 <li>Celular: 33 35 96 09 55</li>
                 <li>Dirección: Fraccionamiendo las gabrielas nube 58 tonala</li>
                 <li>Idiomas: Español(Nativo) Ingles(Básico)</li>
             </ul>
         </div>
    )
    
    export default Information