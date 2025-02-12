function solveNQueens(n) {
    if (n < 4) {
        return [["Nothing"]];
    }

    let result = [];
    const board = Array.from({ length: n }, () => Array(n).fill('0'));

    function isValid(board, row, col) {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
            if (col - row + i >= 0 && board[i][col - row + i] === 'Q') {
                return false;
            }
            if (col + row - i < n && board[i][col + row - i] === 'Q') {
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
                board[row][col] = 'Q';
                findSolutions(board, row + 1);
                board[row][col] = '0';
            }
        }
    }

    findSolutions(board, 0);
    return result;
}

module.exports = solveNQueens;