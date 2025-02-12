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

test("N=4 2 possibility", () => {
    expect(solveNQueens(4)).toEqual([
                                        ["0Q00",
                                        "000Q",
                                        "Q000",
                                        "00Q0"],
                                        // ----
                                        ["00Q0",
                                        "Q000",
                                        "000Q",
                                        "0Q00"]
    ]);
});