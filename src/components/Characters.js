import React, {Component} from 'react'
import FullChar from './FullChar'

export default class Characters extends Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div>Characters
                <FullChar/>
            </div>
        )
    }
}