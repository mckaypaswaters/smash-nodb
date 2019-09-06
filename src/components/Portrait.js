import React, {Component} from 'react'
import axios from 'axios'

// THIS COMPONENT LIVES INSIDE OF 'AddChar'
// THIS WILL DISPLAY A SMALLER IMAGE OF THE CHARACTER AND THEIR NAME
// THIS COMPONENT IS POSSIBLY FUNCTIONAL AND NEEDS NO STATE

export default class Portrait extends Component {
    constructor() {
        super()
    }



    render() {
        return (
            <div>
                <img className='portrait-img' src={this.props.img}></img>
            </div>
        )
    }
}