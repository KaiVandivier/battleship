import gameboard from "./gameboard";
import ship from "./ship";

test("1: it places ships", () => {
  const newGameboard = gameboard(ship);
  expect(newGameboard.ships.length).toBe(0);
  newGameboard.placeShips();
  expect(newGameboard.ships.length).toBe(5);
})

test.todo("#: it places ships that don't overlap");
test.todo("#: it receives input for ship placement");

test("2: it receives attacks from coords and adds misses", () => {
  const newGameboard = gameboard(ship);
  newGameboard.receiveAttack([3, 4]);
  expect(newGameboard.misses).toContainEqual([3,4]);
});

test("3: it checks if all ships are sunk (false)", () => {
  const newGameboard = gameboard(ship);
  newGameboard.placeShips();
  expect(newGameboard.allSunk()).toBe(false);
});

test("4: it checks if all ships are sunk (true)", () => {
  const newGameboard = gameboard(ship);
  newGameboard.placeShips();
  // hit every cell
  for (let y = 0; y < newGameboard.size; y++) {
    for (let x = 0; x < newGameboard.size; x++) {
      newGameboard.receiveAttack([x, y]);
    }
  }
  expect(newGameboard.allSunk()).toBe(true);
});
