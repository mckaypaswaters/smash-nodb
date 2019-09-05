import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import CharParent from './components/CharParent'

export default class App extends Component {
  render(){
  return (
    <div className="App">
      <Header/>
      <CharParent/>
    </div>
    );
  }
}

