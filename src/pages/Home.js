import React,{Component, Fragment} from 'react'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import SystemsContainer from '../components/SystemsContainer'
import Information from '../components/Information'

    export default class Home extends Component{
        render(){
            return(
                <Fragment>
                    <Experience />
                    <Skills />
                    <SystemsContainer />
                    <Information />
                </Fragment>
            )
        }
    }