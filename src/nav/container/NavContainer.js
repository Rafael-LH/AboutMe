import React,{Component} from 'react'
import Nav from '../components/Nav'

    export default class NavContainer extends Component{
            render(){
                let data = {
                    nav: "Nav"
                }
                return(
                    <Nav data={data} />
                )
            }
    }