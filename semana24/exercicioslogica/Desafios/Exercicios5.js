var findNegativeNumbersInMatrix = function (m) {
    var count = 0;
    var row = 0;
    var column = m[0].length - 1;
    while (row < m.length && column >= 0) {
        if (m[row][column] < 0) {
            count += column + 1;
            row++;
        }
        else {
            column--;
        }
    }
    return count;
};
console.log("column");
