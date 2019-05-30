import React,{Component} from 'react'
  
const Systems = () =>(
    <div className='container-systems' id='systems'>
    <h1>Systems</h1>
    <ul>
        <li className='information-system'>
             <span>*</span><b>Sistema peritos</b>
              <p>
                  sistema para la gestion de peritos para renovacion, reincorporacion o primer ingreso
                  proximos a ser peritos
              </p>
        </li>
        <li className='information-system'>
               <span>*</span><b>Sistema Gestión de correos</b>
            <p>
                Sistema para la gestión de correos (altas y bajas)
                de todos los juzgados
           </p>
        </li>
        <li className='information-system'>
               <span>*</span><b>Proyecto anticorrupción</b>
               <p>
                 Declaración de bienes 
               </p>
        </li>
        <li className='information-system'>
               <span>*</span><b>GitHub</b>
              <p>
                 portafolio de proyectos en GitHub 
             </p>
         </li>
    </ul>                
</div>
  ) 

  export default Systems