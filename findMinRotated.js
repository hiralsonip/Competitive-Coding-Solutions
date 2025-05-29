/*

Find Minimum in Rotated Sorted Array
Medium
Given a sorted array that has been rotated at some unknown pivot, find the minimum element. You must write an algorithm that runs in O(log N) time.

Example:
Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The minimum value in the rotated array is 1.

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The minimum value in the rotated array is 0.

*/

const arr = [3, 4, 5, 1, 2]
function findMinRotated(arr) {
    // WRITE YOUR BRILLIANT CODE HERE
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] > arr[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    console.log(left);
    return left;
}
findMinRotated(arr)
