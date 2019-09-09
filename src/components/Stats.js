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
            ownStat1: 0,
            ownStat2: 0,
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
        axios.get('/api/stats/stat1').then(res => {
            this.setState({ownStat1: res.data})
        })
        axios.get('/api/stats/stat2').then(res => {
            this.setState({ownStat2: res.data})
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
        }).catch(err => alert('Insert a number dummy!'))
    }
    updateLoss() {
        axios.put(`/api/losses/${this.state.lossInput}`).then(res => {
            this.setState({lossInput: res.data})
            this.setState({toggleLoss: false})
        }).catch(err => alert('Insert a number dummy!'))
    }
    updateStat1() {
        axios.put(`/api/stat1/${this.state.ownStat1}`).then(res => {
            this.setState({ownStat1: res.data})
            this.setState({toggleStat1: false})
        }).catch(err => alert('Insert a number dummy!'))
    }
    updateStat2() {
        axios.put(`/api/stat2/${this.state.ownStat2}`).then(res => {
            this.setState({ownStat2: res.data})
            this.setState({toggleStat2: false})
        }).catch(err => alert('Insert a number dummy!'))
    }

    render() {
        return(
            <div className='stats'>
                <div className='wins-row'>Wins: 
                    {this.state.toggleWin ? (
                        <p>
                            <input type='number' placeholder='Insert number here' onChange={e => this.handleChangeWin(e)}></input>
                            <button onClick={() => this.updateWin()}>Add Win!</button>
                            <button onClick={() => this.toggleWin()}>Cancel</button>
                        </p>
                    ) : (
                        <div className='wins' onDoubleClick={() => this.toggleWin()}>{` ${this.state.winInput}`}</div>
                    )}
                </div>
                <div className='wins-row'>Losses:
                {this.state.toggleLoss ? (
                        <p>
                            <input type='number' placeholder='Insert number here' onChange={e => this.handleChangeLoss(e)}></input>
                            <button onClick={() => this.updateLoss()}>Get gud khed</button>
                            <button onClick={() => this.toggleLoss()}>Cancel</button>
                        </p>
                    ) : (
                        <div className='wins' onDoubleClick={() => this.toggleLoss()}>{` ${this.state.lossInput}`}</div>
                    )}
                </div>
                <div className='wins-row'>Insert Own Stat Here: 
                {this.state.toggleStat1 ? (
                        <p>
                            <input type='number' placeholder='Insert number here' onChange={e => this.handleChangeStat1(e)}></input>
                            <button onClick={() => this.updateStat1()}>Click me</button>
                            <button onClick={() => this.toggleStat1()}>Cancel</button>
                        </p>
                    ) : (
                        <div className='wins'onDoubleClick={() => this.toggleStat1()}>{` ${this.state.ownStat1}`}</div>
                    )}
                </div>

                <div className='wins-row'>Insert Own Stat Here:
                        
                {this.state.toggleStat2 ? (
                        <p>
                            <input type='number' placeholder='Insert number here' onChange={e => this.handleChangeStat2(e)}></input>
                            <button onClick={() => this.updateStat2()}>Click me</button>
                            <button onClick={() => this.toggleStat2()}>Cancel</button>
                        </p>
                    ) : (
                        <div className='wins' onDoubleClick={() => this.toggleStat2()}>{`${this.state.ownStat2}`}</div>
                    )}
                </div>
            </div>
        )
    }
}

/* <p>Wins: 
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
<button>Add stat!</button> */