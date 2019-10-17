import React from "react";
import ReactDOM from "react-dom";
import Gameboard from "./GameboardComponent";

const UI = (function ui() {
  const render = function render(gameboard1, gameboard2) {
    [gameboard1, gameboard2].forEach(({ id, size, hits, misses, ships }) => {
      const container = document.getElementById(`gb${id}`);
      ReactDOM.render(<Gameboard 
        size={size}
        hits={hits}
        misses={misses}
        ships={ships}
        showShips={id === 1}
      />, container);
    })
  };

  const activateButtons = function activateButtons(gameboard, clickHandler) {
    const { id, size, hits, misses, ships } = gameboard;
    const container = document.getElementById(`gb${id}`);
    ReactDOM.render(<Gameboard
      size={size}
      hits={hits}
      misses={misses}
      ships={ships}
      showShips={id === 1}
      clickHandler={clickHandler}    
    />, container);
  };

  return {
    render,
    activateButtons
  }
})();

export default UI;
