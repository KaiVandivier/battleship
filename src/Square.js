import React from "react";
import "./Square.css";

class Square extends React.Component {
  render() {
    const { hit, missed, coord, ship, clickHandler } = this.props;

    return (
      <div 
        className={
          "Square " + 
          ((hit) ? " hit" : "") + 
          ((missed) ? " missed" : "") + 
          ((ship) ? " ship" : "")
        }
        onClick={
          (clickHandler && !hit && !missed) 
          ? () => clickHandler(JSON.parse(coord))
          : null
        }
      />
    );
  }
}

export default Square;