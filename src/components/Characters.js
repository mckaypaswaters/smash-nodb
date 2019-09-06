import React, {Component} from 'react'
import FullChar from './FullChar'

export default class Characters extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return(
            <div className='character-rows'>
                <FullChar
                    addToTeamFn = {this.props.addToTeamFn}
                    teamArr = {this.props.teamArr}
                />
            </div>
        )
    }
}