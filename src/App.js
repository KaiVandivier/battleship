import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player1: this.props.player1,
      player2: this.props.player2,
      gameboard1: this.props.gameboard1,
      gameboard2: this.props.gameboard2,
    }
  }
  // game logic goes here, I think
  // constructor...
  // game loop
  // end game

  render() {
    return (
      <div>
        <h1>BATTLESHIP</h1>
        <PlayerCard />
        <span>{"VS"}</span>
        <PlayerCard />
      </div>
    );
  };
}

class PlayerCard extends Component {
  render() {
    return (
      <div>
        <PlayerTitle />
        <Gameboard />
      </div>
    )
  }
}

class PlayerTitle extends Component {
  render() {
    return <h2>{"PlayerCard Name"}</h2>;
  }
}

class Gameboard extends Component {
  render() {
    return ( //todo: loop to make more squares
      <div>
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    );
  }
}

class Square extends Component {
  render() {
    return null;
  }
}

export default App;
