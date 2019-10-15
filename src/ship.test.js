import ship from "./ship";

test("hit() updates hits", () => {
  const newShip = ship(3);
  newShip.hit(2);
  expect(newShip.hits).toBe([false, false, true])
})

test("sunk returns correctly (false)", () => {
  const newShip = ship(3);
  expect(newShip.isSunk()).toBe(false);
})

test("sunk returns correctly (true)", () => {
  const newShip = ship(1);
  newShip.hit(0); // is this the API I want for it? `index` or `coords`?
  expect(newShip.isSunk()).toBe(true);
})
