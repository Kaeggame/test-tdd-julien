const solveNQueens = require("../index");

test("N=1 [['Nothing']]", () => {
    expect(solveNQueens(1)).toEqual([["Nothing"]]);
});
