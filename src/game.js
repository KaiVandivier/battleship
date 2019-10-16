class Game {
  constructor(player, gameboard, ui, player1, player2) {
    this.player1 = player(player1 || "human");
    this.player2 = player(player2 || "computer");
    this.gameboard1 = gameboard();
    this.gameboard2 = gameboard();
    this.gameboard1.placeShips();
    this.gameboard2.placeShips();
    this.ui = ui();
    this.ui.render();
    // this.gameLoop();
  }

  async gameLoop() {
    let currentPlayer = this.player1;
    let currentTarget = this.gameboard2;

    while (!(this.gameOver())) {
      const attack = await currentPlayer.getMove();
      currentTarget.receiveAttack(attack);
      this.ui.render();
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
