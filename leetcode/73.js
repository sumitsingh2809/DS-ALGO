/**
 * Set Matrix Zeroes
 * Given an m x n integer matrix matrix,
 * if an element is 0, set its entire row and column to 0's, and return the matrix.
 * You must do it in place.
 *
 * A straightforward solution using O(mn) space is probably a bad idea.
 * A simple improvement uses O(m + n) space, but still not the best solution.
 * Could you devise a constant space solution?
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
        const row = matrix[rowIdx];
        console.log(row);
    }
    console.log();
    let first_cell = 1;
    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
        const row = matrix[rowIdx];
        // console.log(row);
        for (let colIdx = 0; colIdx < row.length; colIdx++) {
            const col = row[colIdx];
            if (col === 0) {
                matrix[0][colIdx] = 0;
                // matrix[rowIdx][0] = 0;
                if (rowIdx === 0) {
                    first_cell = 0;
                } else {
                    matrix[rowIdx][0] = 0;
                }
            }

            // console.log(col);
        }
    }
    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
        const row = matrix[rowIdx];
        console.log(row);
    }
    console.log({ first_cell });
    console.log();

    for (let rowIdx = 1; rowIdx < matrix.length; rowIdx++) {
        const first_col = rowIdx === 0 ? first_cell : matrix[rowIdx][0];
        console.log({ first_col });
        if (first_col === 0) {
            for (let colIdx = 0; colIdx < matrix[rowIdx].length; colIdx++) {
                matrix[rowIdx][colIdx] = 0;
            }
        }
    }
    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
        const row = matrix[rowIdx];
        console.log(row);
    }
    console.log();
    for (let colIdx = 1; colIdx < matrix[0].length; colIdx++) {
        const col = matrix[0][colIdx];
        if (col === 0) {
            for (let rowIdx = 1; rowIdx < matrix.length; rowIdx++) {
                matrix[rowIdx][colIdx] = 0;
            }
        }
    }

    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
        const row = matrix[rowIdx];
        console.log(row);
    }
    console.log();
    if (matrix[0][0] === 0) {
        for (let i = 1; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }
    if (first_cell === 0) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0;
        }
    }

    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
        const row = matrix[rowIdx];
        console.log(row);
    }

    return matrix;
};

console.log(
    setZeroes([
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ])
);
// [
//     [1, 0, 1],
//     [0, 0, 0],
//     [1, 0, 1],
// ];

// console.log(
//     setZeroes([
//         [0, 1, 2, 0],
//         [3, 4, 5, 2],
//         [1, 3, 1, 5],
//     ])
// );
// [
//     [0, 0, 0, 0],
//     [0, 4, 5, 0],
//     [0, 3, 1, 0],
// ];

// console.log(
//     setZeroes([
//         [1, 0, 1],
//         [1, 0, 1],
//         [0, 1, 1],
//     ])
// );
// [
//     [ 0, 0, 0 ]
//     [ 0, 0, 0 ]
//     [ 0, 0, 0 ]
// ]

// console.log(setZeroes([[1, 0, 3]])); // [ [ 0, 0, 0 ] ]

// console.log(
//     setZeroes([
//         [4, 1, 6, 7, 0],
//         [8, 6, 8, 6, 0],
//         [2, 2, 9, 6, 1],
//     ])
// );
// [
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [2, 2, 9, 6, 0],
// ];
