const solveNQueens = require("../index");

test("N=1 1 possibilitie", () => {
    expect(solveNQueens(1)).toEqual([["Q"]]);
});

test("N=2 [['Nothing']]", () => {
    expect(solveNQueens(2)).toEqual([["Nothing"]]);
});

test("N=3 [['Nothing']]", () => {
    expect(solveNQueens(3)).toEqual([["Nothing"]]);
});

test("N=4 2 possibilities", () => {
    expect(solveNQueens(4)).toEqual([
        [
            '0Q00',
            '000Q',
            'Q000',
            '00Q0'
        ],
        [
            '00Q0',
            'Q000',
            '000Q',
            '0Q00'
        ]
    ]);
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

test("Queens count 8", () => {
    const n = 8;
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