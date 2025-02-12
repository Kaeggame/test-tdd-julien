const solveNQueens = require("../index");

test("N=1 [['Nothing']]", () => {
    expect(solveNQueens(1)).toEqual([["Nothing"]]);
});

test("N=2 [['Nothing']]", () => {
    expect(solveNQueens(2)).toEqual([["Nothing"]]);
});

test("N=3 [['Nothing']]", () => {
    expect(solveNQueens(3)).toEqual(["Nothing"]);
});