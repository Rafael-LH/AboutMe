import React,{Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../pages/Home.js'
import Layout from './Layout.js'
import PageError from './PageError.js'

   const App = () => (
         <BrowserRouter>
                    <Layout>
                       <Switch>
                          <Route exact path='/' component={Home} />
                          <Route component={PageError} />
                       </Switch>
                    </Layout>
          </BrowserRouter>   
   )

   export default App