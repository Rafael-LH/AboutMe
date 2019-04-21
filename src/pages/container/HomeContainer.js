import React,{Component} from 'react'
import NavContainer from '../../nav/container/NavContainer'
import MainContainer from '../../main/container/MainContainer'
import FooterContainer from '../../footer/container/FooterContainer'

    export default class HomeContainer extends Component{
            render(){
                return(
                    <div className="home-container">
                        <NavContainer />
                        <MainContainer />
                        <FooterContainer />
                    </div>
                )
            }
    }