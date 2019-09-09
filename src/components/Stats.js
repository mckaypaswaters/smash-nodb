import React, {Component} from 'react'
import axios from 'axios'

export default class Stats extends Component {
    constructor() {
        super()
        this.state = {
            toggleWin: false,
            toggleLoss: false,
            toggleStat1: false,
            toggleStat1: false,
            defaultNum: 0,
            winInput: 0,
            lossInput: 0,
            ownStat1: '',
            ownStat2: '',
            ownInput1: '',
            ownInput2: ''
        }
    }
    
    componentDidMount() {
        axios.get('/api/stats/wins').then(res => {
            this.setState({winInput: res.data})
        })
        axios.get('/api/stats/losses').then(res => {
            this.setState({lossInput: res.data})
        })
    }

    toggleWin() {
        this.setState(prevState => ({toggleWin: !prevState.toggleWin}))
    }
    toggleLoss() {
        this.setState(prevState => ({toggleLoss: !prevState.toggleLoss}))
    }
    toggleStat1() {
        this.setState(prevState => ({toggleStat1: !prevState.toggleStat1}))
    }
    toggleStat2() {
        this.setState(prevState => ({toggleStat2: !prevState.toggleStat2}))
    }

    handleChangeWin(e) {
        this.setState({winInput: e.target.value})
    }
    handleChangeLoss(e) {
        this.setState({lossInput: e.target.value})
    }
    handleChangeStat1(e) {
        this.setState({ownStat1: e.target.value})
    }
    handleChangeStat2(e) {
        this.setState({ownStat2: e.target.value})
    }
    handleChangeInput1(e) {
        this.setState({ownInput1: e.target.value})
    }
    handleChangeInput2(e) {
        this.setState({ownInput2: e.target.value})
    }
    updateWin() {
        axios.put(`/api/wins/${this.state.winInput}`).then(res => {
            this.setState({winInput: res.data})
            this.setState({toggleWin: false})
        })
    }
    updateLoss() {
        axios.put(`/api/losses/${this.state.lossInput}`).then(res => {
            this.setState({lossInput: res.data})
            this.setState({toggleLoss: false})
        })
    }

    render() {
        return(
            <div className='stats'>
                <div>Wins: 
                    {this.state.toggleWin ? (
                        <p>
                            <input type='number' placeholder='Insert number here' onChange={e => this.handleChangeWin(e)}></input>
                            <button onClick={() => this.updateWin()}>Click me</button>
                            <button onClick={() => this.toggleWin()}>Cancel</button>
                        </p>
                    ) : (
                        <div className='wins' onDoubleClick={() => this.toggleWin()}>{` ${this.state.winInput}`}</div>
                    )}
                </div>
                <div>Losses:
                {this.state.toggleLoss ? (
                        <p>
                            <input type='number' placeholder='Insert number here' onChange={e => this.handleChangeLoss(e)}></input>
                            <button onClick={() => this.updateLoss()}>Click me</button>
                            <button onClick={() => this.toggleLoss()}>Cancel</button>
                        </p>
                    ) : (
                        <div className='wins' onDoubleClick={() => this.toggleLoss()}>{` ${this.state.lossInput}`}</div>
                    )}
                </div>
                <div>
                    <button>Insert Own Stat1</button>
                {this.state.toggleStat1 ? (
                        <p>
                            <input placeholder='Insert number here' onChange={e => this.handleChangeStat1(e)}></input>
                            <button>Click me</button>
                            <button onClick={() => this.toggleStat1()}>Cancel</button>
                        </p>
                    ) : (
                        <div className='wins'onDoubleClick={() => this.toggleStat1()}>{` ${this.state.defaultNum}`}</div>
                    )}
                </div>
                <div>Insert Own Stat2
                {this.state.toggleStat2 ? (
                        <p>
                            <input placeholder='Insert number here' onChange={e => this.handleChangeStat2(e)}></input>
                            <button>Click me</button>
                            <button onClick={() => this.toggleStat2()}>Cancel</button>
                        </p>
                    ) : (
                        <div className='wins' onDoubleClick={() => this.toggleStat2()}>{` ${this.state.defaultNum}`}</div>
                    )}
                </div>
            </div>
        )
    }
}

{/* <p>Wins: 
<input placeholder='--Insert number here--' onChange={e => this.handleChangeWin(e)}></input>
<button>Add!</button>
</p>
<p>Losses: 
<input placeholder='--Insert number here--' onChange={e => this.handleChangeLoss(e)}></input>
<button>Get gud khed</button>
</p>
<input placeholder='Insert own stat!' onChange={e => this.handleChangeStat1(e)}></input>
<input placeholder='--Insert number here--' onChange={e => this.handleChangeInput1(e)}></input>
<button>Add stat!</button>
<p></p>
<input placeholder='Insert own stat!' onChange={e => this.handleChangeStat2(e)}></input>
<input placeholder='--Insert number here--' onChange={e => this.handleChangeInput2(e)}></input>
<button>Add stat!</button> */}