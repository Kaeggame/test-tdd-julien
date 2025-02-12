const solveNQueens = require("../index");

test("N=1 1 possibilitie", () => {
    expect(solveNQueens(1)).toEqual([["#"]]);
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
            '0#00',
            '000#',
            '#000',
            '00#0'
        ],
        [
            '00#0',
            '#000',
            '000#',
            '0#00'
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
                if (board[i][j] === '#') {
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
                if (board[i][j] === '#') {
                    count++;
                }
            }
        }
        expect(count).toBe(n);
    });
});