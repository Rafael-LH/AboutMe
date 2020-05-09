import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = props => (
  <Fragment>
    <Nav />
    {props.children}
    <Footer />
  </Fragment>

)
export default Layout