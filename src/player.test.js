import player from "./player";

test.todo("get a real move from a human");

test("get a real move from a human", () => {
  const newPlayer = player("human");
  expect(newPlayer.getMove)
});

test("get a random move from a computer", () => {
  const newPlayer = player("computer");
  const fakeGameboard = { size: 1, misses: [], hits: [] }
  const [x, y] = newPlayer.getMove(fakeGameboard); // todo: pass in gameboard
  expect(x).toBeGreaterThanOrEqual(0);
  expect(x).toBeGreaterThanOrEqual(5); // gameboard.size
  expect(y).toBeGreaterThanOrEqual(0);
  expect(y).toBeGreaterThanOrEqual(5);
});

test("AI moves don't overlap", () => {
  const newPlayer = player("computer");
  const fakeGameboard = { size: 1, misses: [[0,0]], hits: [] }
  expect(newPlayer.getMove(fakeGameboard)).toBe(false); // todo: pass in full gameboard
})
