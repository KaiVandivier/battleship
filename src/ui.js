import React from "react";
import ReactDOM from "react-dom";
import Gameboard from "./Gameboard";

const UI = (function ui() {
  const render = function render(gameboard1, gameboard2) {
    [gameboard1, gameboard2].forEach(({ id, size, hits, misses, ships }) => {
      const container = document.getElementById(`gb${id}`);
      // todo: determine which buttons are active
      ReactDOM.render(<Gameboard 
        size={size}
        hits={hits}
        misses={misses}
        ships={ships}
        showShips={id === 1}
        buttonsActive={false}
      />, container); // todo: change container
    }) // will this just repeat over and over, without replacing itself? nei; "diff"
  };
  const activateButtons = function activateButtons(gameboard, clickHandler) {
    const { id, size, hits, misses, ships } = gameboard;
    const container = document.getElementById(`gb${id}`);
    console.log("got to `activate buttons`")
    console.log("click handler:", clickHandler);
    ReactDOM.render(<Gameboard
      size={size}
      hits={hits}
      misses={misses}
      ships={ships}
      showShips={id === 1}
      buttonsActive={true}
      clickHandler={clickHandler}    
    />, container)

  };
  return {
    render,
    activateButtons
  }
})();

export default UI;
