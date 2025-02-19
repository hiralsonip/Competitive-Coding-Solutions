/* 

Problem Statement : Given an array of integers and a value, determine if there are any two integers in the array whose sum is equal to the given value. Return true if the sum exists and return false if it does not.

Array : 4, 6, 3, 8, 9
Value : 10

*/

let findSumOfTwo = function (Arr, val) {
    let foundValSet = new Set();

    for (let a in Arr) {
        if (foundValSet.has(val - Arr[a])) {
            return true;
        }
        foundValSet.add(Arr[a]);
    }
    return false;
}

let arr = [4, 6, 3, 8, 9];
let val = 10;
let op = findSumOfTwo(arr, val);
console.log(op);

