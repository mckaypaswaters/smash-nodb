import React, {Component} from 'react'
import Portrait from './Portrait'

// THIS COMPONENT IS HOW YOU SEARCH FOR A CHARACTER AND ADD THEM TO YOUR TEAM

export default class AddChar extends Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div>Add Char works?
                <Portrait/>
            </div>

        )
    }
}