function searchMatrix(matrix, target) {
    // WRITE YOUR BRILLIANT CODE HERE
    matrix = (matrix.flat());
    let left = 0;
    let right = matrix.length - 1;
    while (left < right) {
        let mid = Math.floor((right + left) / 2);
        if (mid === target) return true;
        if (mid < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return false;
}

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
]
const target = 13
console.log(searchMatrix(matrix, target));
