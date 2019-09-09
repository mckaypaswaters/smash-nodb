import React, {Component} from 'react'
import Portrait from './Portrait'
import axios from 'axios'

// THIS COMPONENT IS HOW YOU SEARCH FOR A CHARACTER AND ADD THEM TO YOUR TEAM

export default class AddChar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            game: '',
            tier: '',
            img: '',
            id: 0
        }
    }

    getPortrait(id) {
        axios.get(`/api/char-portrait/${id}`).then(res => {
            this.setState({img: res.data.img})
        })
        // this.setState({id: id})
    }

    getCharacter(id){
        axios.get(`/api/char/${id}`).then(res => {
            this.setState({
                name: res.data.name,
                game: res.data.game,
                tier: res.data.tier,
                id: res.data.id,
                img: res.data.img
            })
        })
    }


    render() {
        return(
            <div className='addChar'>
                <select onChange={(e) => this.getCharacter(e.target.value)}>Choose your character!
                    <option>--Select your character!--</option>
                    <option value='1'>Mario</option>
                    <option value='2'>Donkey Kong</option>
                    <option value='3'>Link</option>
                    <option value='4'>Samus</option>
                    <option value='5'>Yoshi</option>
                    <option value='6'>Kirby</option>
                    <option value='7'>Fox</option>
                    <option value='8'>Pikachu</option>
                    <option value='9'>Luigi</option>
                    <option value='10'>Captain Falcon</option>
                    <option value='11'>Ness</option>
                    <option value='12'>Jigglypuff</option>
                </select>
                <Portrait
                img = {this.state.img}
                />
                <button className='add-team' onClick={() => this.props.addToTeamFn(this.state.id, this.state)}>Add to team!</button>
            </div>

        )
    }
}