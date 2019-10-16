import player from "./player";

test.todo("get a real move from a human");

test("get a real move from a human", () => {
  const newPlayer = player("human");
  expect(newPlayer.getMove)
});

test("get a random move from a computer", async () => {
  const newPlayer = player("computer");
  const fakeGameboard = { size: 1, misses: [], hits: [] }
  const [x, y] = await newPlayer.getMove(fakeGameboard); // todo: pass in gameboard
  expect(x).toBeGreaterThanOrEqual(0);
  expect(x).toBeLessThanOrEqual(fakeGameboard.size); // gameboard.size
  expect(y).toBeGreaterThanOrEqual(0);
  expect(y).toBeLessThanOrEqual(fakeGameboard.size);
});

test("AI moves don't overlap", async () => {
  const newPlayer = player("computer");
  const fakeGameboard = { size: 1, misses: [[0,0]], hits: [] }
  expect(await newPlayer.getMove(fakeGameboard)).toBe(false); // todo: pass in full gameboard
})
