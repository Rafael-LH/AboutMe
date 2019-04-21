import React,{Component} from 'react'

    const Home = props => {

        let {saludo} = props.data

        return(
            <h1>{saludo}</h1>
        )
    }

    export default Home