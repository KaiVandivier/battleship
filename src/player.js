
const player = function player(type) {
  // todo 
  const getHumanMove = async function(gameboard) {
    // todo: get human move
    /* 
    return new Promise((resolve, reject) => {
      gameboard.activateButtons(resolve);
      // then expecting buttons to call `resolve([x, y])`
    });
    */
  };
  const getAiMove = /* async */ async function(gameboard) {
    if (gameboard.misses.length + gameboard.hits.length 
      === gameboard.size ** 2) return false;
    const allMoves = [...gameboard.misses, ...gameboard.hits]
    while (true) {
      const x = Math.floor(Math.random() * gameboard.size);
      const y = Math.floor(Math.random() * gameboard.size);
      if (!allMoves.find(([x1, y1]) => x === x1 && y === y1)) {
        return [x, y];
      }
    }
  }
  return {
    getMove: (type === "computer")
      ? getAiMove
      : getHumanMove
  };
}

export default player;