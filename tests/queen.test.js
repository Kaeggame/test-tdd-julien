const solveNQueens = require("../index");

test("N=1 [['Nothing']]", () => {
    expect(solveNQueens(1)).toEqual([["Nothing"]]);
});

test("N=2 [['Nothing']]", () => {
    expect(solveNQueens(2)).toEqual([["Nothing"]]);
});

test("N=3 [['Nothing']]", () => {
    expect(solveNQueens(3)).toEqual([["Nothing"]]);
});

test("Queens count 4", () => {
    const n = 4;
    const solutions = solveNQueens(n);
    solutions.forEach(board => {
        let count = 0;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === 'Q') {
                    count++;
                }
            }
        }
        expect(count).toBe(n);
    });
});