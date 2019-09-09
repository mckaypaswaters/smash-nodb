import React, {Component} from 'react'
import Stats from './Stats'
import AddChar from './AddChar'
import Characters from './Characters'
import axios from 'axios'
import smashBall from '../assets/Smash_Ball.png'

// THIS COMPONENT WILL HOLD LOGIC AND STATE TO BE PASSED DOWN THROUGH PROPS TO CHILDREN

export default class CharParent extends Component {
    constructor() {
        super()
        this.state = {
            teamArr: []
        }
        this.addToTeam = this.addToTeam.bind(this)
        this.removeChar = this.removeChar.bind(this)
    }

    addToTeam(id, char) {
        /* axios.get(`/api/team/${id}`).then(res => {
            const newTeamArr = []
            newTeamArr.push({                
                name: res.data.name,
                game: res.data.game,
                tier: res.data.tier,
                id: res.data.id,
                img: res.data.img})
            this.setState({teamArr: [...this.state.teamArr, newTeamArr[0]]})
        }) */
        // console.log(char)
        axios.post(`/api/team/`, char).then(res => {
            this.setState({teamArr: res.data})
        })
    }

    removeChar (id){
        axios.delete(`/api/team/${id}`).then(res => {
            this.setState({teamArr: res.data})
        })
    }

    render() {
        return (
            <div className='charParent'>
                
                <h1 className='headerText'><img className='smashBall' src={smashBall}></img> Super Smash Bros. Ultimate Stats and Team!</h1>
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
                removeCharFn = {this.removeChar}
                />
            </div>
        )
    }
}