import Game from "./game";

const fakeGetMove = jest.fn().mockName("player.getMove")
  .mockReturnValue(Promise.resolve([0,0]));
const fakePlayer = jest.fn(() => {
  return { getMove: fakeGetMove };
})

const fakePlaceShips = jest.fn();
const fakeReceiveAttack = jest.fn().mockName("receiveAttack");
const fakeAllSunk = jest.fn().mockName("allSunk")
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(false)
  .mockReturnValueOnce(false)
  .mockReturnValue(true);
const fakeGameboard = jest.fn(() => {
  return { 
    placeShips: fakePlaceShips,
    allSunk: fakeAllSunk,
    receiveAttack: fakeReceiveAttack,
  };
});
const fakeGameoverGameboard = jest.fn(() => {
  return {
    placeShips: () => {},
    allSunk: () => true,
    receiveAttack: fakeReceiveAttack,
  }
});

const fakeShip = {};

const fakeRender = jest.fn()
const fakeUI = { render: fakeRender };

// The game loop should set up a new game by creating Players and Gameboards.
//For now just populate each Gameboard with predetermined coordinates. 
//You can implement a system for allowing players to place their ships later.
test("It loads two players and gameboards", () => {
  new Game(fakePlayer, fakeGameboard, fakeShip, fakeUI);
  expect(fakePlayer).toBeCalledTimes(2);
  expect(fakePlayer).toHaveBeenNthCalledWith(1, "human");
  expect(fakePlayer).toHaveBeenNthCalledWith(2, "computer");
  expect(fakePlaceShips).toBeCalledTimes(2);
});

// display both the player’s boards and render them using information from the Gameboard class.
test("It renders the gameboards", () => {
  expect(fakeRender).toBeCalled();
});

// You need methods to render the gameboards and to take user input for attacking. 
// For attacks, let the user click on a coordinate in the enemy Gameboard.
test.todo("It takes user clicks to receive input");

//This function is appropriate for the Game module.
test("It ends the game when one player's ships are all sunk", () => {
  const newGame = new Game(fakePlayer, fakeGameboard, fakeShip, fakeUI,
    "computer", "computer");
  expect(newGame.gameOver()).toBe(false);
  const newGame2 = new Game(fakePlayer, fakeGameoverGameboard, fakeShip, fakeUI,
    "computer", "computer");
  expect(newGame2.gameOver()).toBe(true);
});

// The game loop should step through the game turn by turn using only methods from other objects.
// If at any point you are tempted to write a new function inside the game loop, 
// step back and figure out which class or module that function should belong to.
test("It should step through turns and switch players", async () => {
  const fakeAllSunk2 = jest.fn().mockName("allSunk")
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false)
    .mockReturnValue(true);
  const fakeGameboard2 = jest.fn(() => {
    return { 
      placeShips: fakePlaceShips,
      allSunk: fakeAllSunk2,
      receiveAttack: fakeReceiveAttack,
    };
  });
  const newGame = new Game(fakePlayer, fakeGameboard2, fakeShip, fakeUI,
    "computer", "computer");
  await newGame.gameLoop()
  expect(fakeAllSunk2).toBeCalledTimes(8)
  expect(fakeGetMove).toBeCalledTimes(3);
  expect(fakeReceiveAttack).toBeCalledTimes(3);
  expect(newGame.gameOver()).toBe(true);
});