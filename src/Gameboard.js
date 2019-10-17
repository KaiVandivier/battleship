import React from "react";
import "./Gameboard.css";
import Square from "./Square";

class Gameboard extends React.Component {
  render() {
    const { 
      size, 
      hits, 
      misses, 
      ships, 
      showShips,
      buttonsActive,
      clickHandler,
    } = this.props;

    console.log("got to gameboard");
    console.log("click handler:", clickHandler);

    const grid = [];
    for (let y = 0; y < size; y ++) {
      for (let x = 0; x < size; x ++) {
        // mark square with "hit" or "miss"
        const hit = hits.some(([hx, hy]) => x === hx && y === hy);
        const missed = misses.some(([mx, my]) => x === mx && y === my);

        // if not hit or missed, activate buttons when appropriate
        if (buttonsActive && !hit && !missed) { }

        // mark ships for player's board but not enemy's
        const ship = showShips && ships.some(({ coords }) => {
          return coords.some(([cx, cy]) => x === cx && y === cy);
        })

        const stringifiedCoord = JSON.stringify([x,y]);

        grid.push(
          <Square
            key={stringifiedCoord}
            coord={stringifiedCoord}
            active={true /* todo: make dynamic */}
            hit={hit}
            missed={missed}
            ship={ship}
            clickHandler={clickHandler}
          />
        );
      }
    }

    return (
      <div className={"Gameboard"}>
        {grid}
      </div>
    );
  }
}

export default Gameboard;
