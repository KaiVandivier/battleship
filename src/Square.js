import React from "react";

class Square extends React.Component {
  render() { // classNames for styling come from props ("ship", "hit", "miss")
    return (
      <div 
        className={"square"}
      />
    );
  }
}

export default Square;