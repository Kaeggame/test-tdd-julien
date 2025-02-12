function solveNQueens(n) {
    if (n < 4 && n !== 1) {
        return [["Nothing"]];
    }

    let result = [];
    const board = Array.from({ length: n }, () => Array(n).fill('0'));

    function isValid(board, row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === '#') {
                return false;
            }
            if (col - row + i >= 0 && board[i][col - row + i] === '#') {
                return false;
            }
            if (col + row - i < n && board[i][col + row - i] === '#') {
                return false;
            }
        }
        return true;
    }

    function findSolutions(board, row) {
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isValid(board, row, col)) {
                board[row][col] = '#';
                findSolutions(board, row + 1);
                board[row][col] = '0';
            }
        }
    }

    findSolutions(board, 0);
    return result;
}

const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('number?', a => {
    const x = parseInt(a, 10);
    const result = solveNQueens(x);
    console.log(result);
    rl.close();
});

module.exports = solveNQueens;