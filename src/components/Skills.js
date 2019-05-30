import React,{Component, Fragment} from 'react'


   const Skills = () =>(
       <Fragment>
          <div className="container-title-skills" id="skills">
            <h1 className='skills-title'>Skills</h1>
          </div>
 <div className="container-skills">
     <div className="container-backend">
         <h2 className="title-backend">Backend</h2>
         <ul className="items-backend">
            <li className='react'>PHP</li>
            <li className='html'>Laravel</li>
            <li className='react'>MVC</li>
            <li className='html'>Composer</li>
            <li className='sass'>POO</li>
            <li className='mysql'>Mysql</li>
            <li className='react'>Ajax</li>
         </ul>
     </div> 
     <div className="container-frontend">
          <h2 className="title-frontend">Frontend</h2>
          <ul className="items-frontend">
              <li className='js'>Javascript</li>
              <li className='react'>ReactJS</li>
              <li className='js'>Webpack</li>
              <li className='react'>Jquery</li>
              <li className='npm'>npm</li>
              <li className='react'>Css</li>
              <li className='sass'>Sass</li>
              <li className='html'>HTML5</li>
              <li className='materialize'>Materialize</li>
              <li className='bootstrap'>Bootstrap</li>
          </ul>
     </div>
 </div>
 </Fragment>
   )

   export default Skills