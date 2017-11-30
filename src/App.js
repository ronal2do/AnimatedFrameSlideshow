import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './slider';

import a from './img/13.jpg';
import b from './img/14.jpg';
import c from './img/15.jpg';
import d from './img/16.jpg';

const SLIDER = [{
    id: 1,
    title: 'Yoda',
    image: a
  },
  {
    id: 2,
    title: 'Darth Vader',
    image: b
  },
  {
    id: 3,
    title: 'Skywalker',
    image: c
  },
  {
    id: 4,
    title: 'Leia',
    image: d
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Slider slides={SLIDER}/>
      </div>
    );
  }
}

export default App;
