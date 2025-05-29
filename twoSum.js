/*

Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

const arr = [2, 7, 11, 15]
const target = 9

function twoSum(arr, target) {
    // WRITE YOUR BRILLIANT CODE HERE
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > target) continue;
        if (map !== null) {
            if (map.has(arr[i])) {
                return (map.get(arr[i]), i)
            }
        }
        map.set(target - arr[i], i)
    }
    return [];
}

