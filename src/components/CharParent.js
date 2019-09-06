import React, {Component} from 'react'
import Stats from './Stats'
import AddChar from './AddChar'
import Characters from './Characters'
import axios from 'axios'

// THIS COMPONENT WILL HOLD LOGIC AND STATE TO BE PASSED DOWN THROUGH PROPS TO CHILDREN

export default class CharParent extends Component {
    constructor() {
        super()
        this.state = {
            teamArr: []
        }
        this.addToTeam = this.addToTeam.bind(this)
    }

    addToTeam(id) {
        axios.get(`/api/team/${id}`).then(res => {
            const newTeamArr = []
            newTeamArr.push({                
                name: res.data.name,
                // game: res.data.game,
                // tier: res.data.tier,
                img: res.data.img})
            this.setState({teamArr: [...this.state.teamArr, newTeamArr[0]]})
        })
    }

    render() {
        return (
            <div className='charParent'>
                <div className='firstRowParent'>
                    <Stats/>
                    <AddChar
                    addToTeamFn = {this.addToTeam}
                    teamArr = {this.state.teamArr}
                    />
                </div>
                <Characters
                addToTeamFn = {this.addToTeam}
                teamArr = {this.state.teamArr}
                />
            </div>
        )
    }
}