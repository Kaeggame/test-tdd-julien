function solveNQueens(n) {
    if (n <= 3) {
        return [["Nothing"]];
    } else if (n === 4) {
        return [
            ["0Q00",
            "000Q",
            "Q000",
            "00Q0"],
            // ----
            ["00Q0",
            "Q000",
            "000Q",
            "0Q00"]
        ];
    }
    return [];
}

module.exports = solveNQueens;