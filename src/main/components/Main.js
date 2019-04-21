import React, {Component} from 'react'

    const Main = props => {

        let {main} = props.data

        return(
                 <h1>{main}</h1>
            )
    }

    export default Main
