import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = props => (
  <>
    <Nav />
    {props.children}
    <Footer />
  </>

)
export default Layout