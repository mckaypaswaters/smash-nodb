import React, {Component} from 'react'
import Portrait from './Portrait'
import axios from 'axios'

// THIS COMPONENT IS HOW YOU SEARCH FOR A CHARACTER AND ADD THEM TO YOUR TEAM

export default class AddChar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            img: '',
            id: 0
        }
    }

    getPortrait(id) {
        axios.get(`/api/char-portrait/${id}`).then(res => {
            this.setState({img: res.data.img})
        })
        this.setState({id: id})
    }

    // addToTeam(id){
    //     this.props.addToTeam(id)
    // }

    render() {
        return(
            <div className='addChar'>
                <select onChange={(e) => this.getPortrait(e.target.value)}>Choose your character!
                    <option>--Select your character!--</option>
                    <option value='1'>Mario</option>
                    <option value='2'>Donkey Kong</option>
                    <option value='3'>Link</option>
                </select>
                <Portrait
                img = {this.state.img}
                />
                <button className='add-team' onClick={() => this.props.addToTeamFn(this.state.id)}>Add to team!</button>
            </div>

        )
    }
}