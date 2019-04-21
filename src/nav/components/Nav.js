import React,{Component} from 'react'

    const Nav = props => {

            let {nav} = props.data

            return(
                <h1>{nav}</h1>
            )
    }

    export default Nav