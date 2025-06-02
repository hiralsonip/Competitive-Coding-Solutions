/*

Jump Game
Medium
Given an array nums where nums[i] represents the maximum jump length from index i, determine if you can reach the last index.

Example:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Start at index 0 with jump length 2, jump to index 1, then to index 4.

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You reach index 3 but cannot move forward because nums[

*/

function jumpGame(arr, start) {
    // WRITE YOUR BRILLIANT CODE HERE

    let n = arr.length;
    let visited = Array(n).fill(false);
    let queue = [start];



    while (queue.length > 0) {
        let current = queue.shift();

        if (current < 0 || current > n || visited[current]) continue;

        visited[current] = true;

        if (current === n) return true;

        queue.push(current + arr[current])
        queue.push(current - arr[current])

    }
    return false;
}

const arr = [3, 4, 2, 3, 0, 3, 1, 2, 1]
const start = 7;

console.log(jumpGame(arr, start));