import React,{Component} from 'react'
   

   const Systems = props => (
          
            <div className="container-card-systems">
               <h1 className='title-system-git' >{props.name}</h1>
               <p>
                   {props.description} 
               </p>
               <div className="container-btn-show">
                  <a target="__blank" className='btn-show-repo' href={props.svn_url}>View</a>
               </div>
            </div>
    )
   export default Systems