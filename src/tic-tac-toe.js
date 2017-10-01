class TicTacToe {
    constructor() {
      this.currentPlayerSymbol = 'x';
      this.field = [[null,null,null],[null,null,null],[null,null,null]];
      this.winner = false;
      this.turnCounter = 0;
    }

    getCurrentPlayerSymbol() {
      return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.field[rowIndex][columnIndex]) return;
      this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
      this.currentPlayerSymbol === 'x' ? this.currentPlayerSymbol = 'o' : this.currentPlayerSymbol = 'x';
      this.turnCounter++;
      if (
        (this.field[0][0]&&this.field[0][0] === this.field[0][1]&&this.field[0][0] === this.field[0][2])
         ||(this.field[1][0]&&this.field[1][0] === this.field[1][1]&&this.field[1][0] === this.field[1][2])
         ||(this.field[2][0]&&this.field[2][0] === this.field[2][1]&&this.field[2][0] === this.field[2][2])
         ||(this.field[0][0]&&this.field[0][0] === this.field[1][1]&&this.field[0][0] === this.field[2][2])
         ||(this.field[0][2]&&this.field[0][2] === this.field[1][1]&&this.field[0][2] === this.field[2][0])
         ||(this.field[0][0]&&this.field[0][0] === this.field[1][0]&&this.field[0][0] === this.field[2][0])
         ||(this.field[0][1]&&this.field[0][1] === this.field[1][1]&&this.field[0][1] === this.field[2][1])
         ||(this.field[0][2]&&this.field[0][2] === this.field[1][2]&&this.field[0][2] === this.field[2][2])
         )
         {
           this.winner = this.currentPlayerSymbol;
         }
         this.getWinner();
    }

    isFinished() {
      return this.isDraw()||this.getWinner() ? true : false;
    }

    getWinner() {
      if (this.winner === 'x') {
        return 'o';
      }
      else if (this.winner === 'o') {
        return 'x'
      }
      else return null;
    }

    noMoreTurns() {
      return this.turnCounter == 9 ? true : false;
    }

    isDraw() {
      return this.turnCounter == 9 && !this.winner ? true : false;
    }

    getFieldValue(rowIndex, colIndex) {
      return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
