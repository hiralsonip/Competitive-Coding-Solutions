/*

Given a two-dimensional array, if any element within is zero, make its whole row and column zero. For example, consider the matrix below.


martix = [
    [1,2 3,4,5]
    [1,0,3,5,7]
    [3,7,9,0,2]
]

result = [
    [1,0,3,0,5]
    [0,0,0,0,0]
    [3,0,9,0,2]
]
*/

let makeZero = function (matrix) {
    if (!matrix || matrix.length === 0) {
        return;
    }

    let zero_col = new Set();
    let zero_row = new Set();

    let row = matrix.length;
    let col = matrix[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === 0) {
                if (!zero_col.has(j)) {
                    zero_col.add(j)
                }
                if (!zero_row.has(i)) {
                    zero_row.add(i);
                }
            }
        }
    }

    let final_matrix = matrix;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (zero_col.has(j)) {
                final_matrix[i][j] = 0;
            }
            if (zero_row.has(i)) {
                final_matrix[i][j] = 0;
            }
        }
    }
    console.log(final_matrix);
}

let martix = [
    [27, 62, 23, 12, 85],
    [73, 59, 0, 55, 30],
    [80, 18, 66, 26, 56],
    [28, 27, 50, 44, 93],
    [0, 45, 64, 64, 64],
];

makeZero(martix);
