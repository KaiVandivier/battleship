// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

/* ---- A mockup for UI testing ---- */
import gameboard from "./gameboard";
import ship from "./ship";
import player from "./player";
import UI from "./ui";

const gb1 = gameboard(ship, 1);
const gb2 = gameboard(ship, 2);
gb1.placeShips();
gb2.placeShips();
UI.render(gb1, gb2);

const currentPlayer = player("human");
const currentTarget = gb2;

const testMove = async function() {
  const attack = await currentPlayer.getMove(
    currentTarget, 
    UI.activateButtons
  );
  console.log("attack: ", attack);
  currentTarget.receiveAttack(attack); //`attack`
  console.log("hits: ", currentTarget.hits);
  console.log("misses: ", currentTarget.misses);
  UI.render(gb1, gb2);
}

testMove()
  .then(() => testMove())
  .then(() => testMove())
  .then(() => testMove());
/* --------------------------------- */



// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
