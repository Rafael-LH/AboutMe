import React,{Component} from 'react'
import Main from '../components/Main'

export default class MainContainer extends Component{
            render(){
                let data = {
                    main: "Main"
                }
                return(
                    <Main data={data} />
                )
            }
    }