import React, {Component} from 'react'
import axios from 'axios'

// THIS COMPONENT HOLDS THE FULL IMAGE OF THE CHARACTERS WITH THE INFO ABOUT THEM (NAME, GAME, TIER)

export default class FullChar extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: 0
        }
    }



    render(){
        let mappedArr = this.props.teamArr.map((el, i) => {
            return (
            <div className='char-box' key={i + el.name}>
                <h2>{el.name}</h2>
                <img className='full-char-img' src={el.img}></img>
                <h3>Game: {el.game}</h3>
                <h3>Tier: {el.tier}</h3>
                <button onClick={() => this.props.removeCharFn(el.id)}>Remove From Team</button>
            </div>
            )
        })
        return(
            <div>
                <div className='test'>
                {mappedArr}
                </div>
            </div>
        )
    }
}