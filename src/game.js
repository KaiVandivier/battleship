class Game {
  constructor(player, gameboard, ship, ui, player1, player2) { //todo: rearrange args
    this.player1 = player(player1 || "human");
    this.player2 = player(player2 || "computer");
    this.gameboard1 = gameboard(ship, 1);
    this.gameboard2 = gameboard(ship, 2);
    this.gameboard1.placeShips();
    this.gameboard2.placeShips();
    this.ui = ui; // todo: change from factory to module
    this.ui.render(this.gameboard1, this.gameboard2);
    // this.gameLoop();
  }

  async gameLoop() {
    let currentPlayer = this.player1;
    let currentTarget = this.gameboard2;

    while (!(this.gameOver())) {
      const attack = await currentPlayer.getMove(
        currentTarget, 
        this.ui.activateButtons
      );
      currentTarget.receiveAttack(attack);
      this.ui.render(this.gameboard1, this.gameboard2);
      currentPlayer = (currentPlayer === this.player1)
        ? this.player2
        : this.player1;
      currentTarget = (currentTarget === this.gameboard2)
        ? this.gameboard1
        : this.gameboard2;
    }

    this.endGame();
  }

  gameOver() {
    return this.gameboard1.allSunk() || this.gameboard2.allSunk();
  }

  endGame() {
    // todo
  }
}

export default Game;
