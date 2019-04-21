import React,{Component} from 'react'
import Footer from '../components/Footer'

    export default class FooterContainer extends Component{
                render(){
                     let data = {
                         footer: "Footer"
                     }   
                    return(
                        <Footer data={data}/>    
                    )
                }
    }