class TicTacToe {
  constructor() {
    this.currentSymbol = 'x';
    this.winner = null;
    this.gameFieldSize = 3;
    this.gameField = Array(this.gameFieldSize)
      .fill(null)
      .map(() => Array(this.gameFieldSize).fill(null));

    this.maxTurns = this.gameFieldSize * this.gameFieldSize;
    this.currentTurnsCount = 0;
  }

  getCurrentPlayerSymbol() {
    return this.currentSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (!this.gameField[rowIndex][columnIndex]) {
      this.gameField[rowIndex][columnIndex] = this.currentSymbol;
      this.currentSymbol = this.currentSymbol === 'x' ? 'o' : 'x';
      this.currentTurnsCount++;
    }
  }

  isFinished() {
    return this.isDraw() || this.getWinner() ? true : false;
  }

  getWinner() {
    for (let i = 0; i < this.gameField.length; i++) {
      if (
        this.getFieldValue(i, 0) === this.getFieldValue(i, 1) &&
        this.getFieldValue(i, 1) === this.getFieldValue(i, 2)
      ) {
        this.winner = this.getFieldValue(i, 0);
        return this.winner;
      }
    }

    for (let i = 0; i < this.gameField[0].length; i++) {
      if (
        this.getFieldValue(0, i) === this.getFieldValue(1, i) &&
        this.getFieldValue(1, i) === this.getFieldValue(2, i)
      ) {
        this.winner = this.getFieldValue(0, i);
        return this.winner;
      }
    }

    if (
      this.getFieldValue(0, 0) === this.getFieldValue(1, 1) &&
      this.getFieldValue(1, 1) === this.getFieldValue(2, 2)
    )
      this.winner = this.getFieldValue(0, 0);
    if (
      this.getFieldValue(0, 2) === this.getFieldValue(1, 1) &&
      this.getFieldValue(1, 1) === this.getFieldValue(2, 0)
    )
      this.winner = this.getFieldValue(0, 2);
    return this.winner;
  }

  noMoreTurns() {
    return this.currentTurnsCount == this.maxTurns;
  }

  isDraw() {
    return this.noMoreTurns() && !this.getWinner();
  }

  getFieldValue(rowIndex, colIndex) {
    return this.gameField[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
