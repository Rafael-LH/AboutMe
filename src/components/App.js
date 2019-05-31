import React,{Component} from 'react'
/* import {BrowserRouter, Switch, Route} from 'react-router-dom' */
import Layout from './Layout.js'
import Skills from './Skills'
import Experience from './Experience'
import SystemsContainer from './SystemsContainer'
import Information from './Information'

   const App = () => (
               <Layout>
                    <Experience />
                    <Skills />
                    <SystemsContainer />
                    <Information />
               </Layout>
   )

   export default App