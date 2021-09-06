const matrix = [
    [1, 2],
    [3, 4],
];
// [
//     [1, 1],
//     [2, 0],
// ]
// const matrix = [
//     [2, 3],
//     [5, 7],
// ];

var after = function (x, y) {
    const m = matrix.length;
    const n = matrix[0].length;

    let sum = matrix[m - 1][n - 1];
    console.log({ m, n });
    // for (let i = m - 1; i <= 0; i--) {
    //     for (let j = n - 1; j < 0; j--) {
    //         console.log(matrix[i][j]);
    //         matrix[i][j] -= matrix[i][j - 1];
    //     }
    // }
    // for (let i = m - 1; i < 0; i--) {
    //     for (let j = n - 1; j <= 0; j--) {
    //         console.log(matrix[i][j]);
    //         matrix[i][j] -= matrix[i - 1][j];
    //     }
    // }
    const result = [];
    for (let i = 0; i <= x; i++) {
        result[i] = [...matrix[i]];
        for (let j = 0; j <= y; j++) {
            console.log({ i, j });
            console.log(matrix[i][j]);
            result[i][j] -= matrix[i][j];
        }
    }
    return result;
};

console.log(after(1, 1));
