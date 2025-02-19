/*

You are given an array of positive numbers from 
1 to n, such that all numbers from 1 to n are present except one number x, 
You have to find x. The input array is not sorted.

*/

function findMissingNumber(arr, n) {
    const totalSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return totalSum - actualSum;
}

const arr = [1, 2, 4, 6, 3, 7, 8]; // Array with missing number
const n = 8; // The range of numbers is from 1 to n
console.log("The missing number is:", findMissingNumber(arr, n));