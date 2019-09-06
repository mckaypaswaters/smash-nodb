import React, {Component} from 'react'

// THIS COMPONENT HOLDS THE FULL IMAGE OF THE CHARACTERS WITH THE INFO ABOUT THEM (NAME, GAME, TIER)

export default class FullChar extends Component {
    constructor(props){
        super(props)
    }
    render(){
        let mappedArr = this.props.teamArr.map(el => {
            return (
            <div>
                <h2>{el.name}</h2>
                <img className='full-char-img' src={el.img}></img>
                {/* <button>Remove</button> */}
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