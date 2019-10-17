const gameboard = function gameboard(ship, id) {
  const size = 5;
  const ships = [];
  const misses = [];
  const hits = [];
  const placeShips = () => {
    ships.push(
      { ship: ship(4), coords: [ [1,0], [2,0], [3,0], [4,0] ] },
      { ship: ship(3), coords: [ [1,1], [2,1], [3,1]] },
      { ship: ship(3), coords: [ [0,2], [1,2], [2,2] ]},
      { ship: ship(2), coords: [ [3,2], [4,2] ] },
      { ship: ship(2), coords: [ [0,0], [0,1] ] },
    );
  };
  const receiveAttack = ([x, y]) => {
    let hitIndex;
    const targetHit = ships.find(({ coords }) => {
      hitIndex = coords.findIndex((coord) => {
        return x === coord[0] && y === coord[1];
      })
      return hitIndex !== -1;
    });
    if (targetHit) {
      targetHit.ship.hit(hitIndex);
      hits.push([x,y]);
    } 
    else 
      misses.push([x, y]);
  };
  const allSunk = () => ships.every(({ ship }) => ship.isSunk());
  return {
    id,
    size,
    ships,
    misses,
    hits,
    placeShips,
    receiveAttack,
    allSunk,
  }
}

export default gameboard;
