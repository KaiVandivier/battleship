import React from "react";
import "./Square.css";

class Square extends React.Component {
  render() { // classNames for styling come from props ("ship", "hit", "miss")
    const { hit, missed, coord, ship, clickHandler } = this.props;

    return (
      <div 
        className={
          "Square " + 
          ((hit) ? " hit" : "") + 
          ((missed) ? " missed" : "") + 
          ((ship) ? " ship" : "")
        }
        onClick={(clickHandler) ? () => clickHandler(JSON.parse(coord))
          : null } // does this go here or in `Gameboard`?
      />
    );
  }
}

export default Square;